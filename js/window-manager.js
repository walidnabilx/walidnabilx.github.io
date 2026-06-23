const WindowManager = (() => {
  const windows = new Map();
  let topZ = 100;
  let dragState = null;
  let resizeState = null;

  function create(appId, title, contentHtml, opts = {}) {
    if (windows.has(appId)) {
      focus(appId);
      const existing = windows.get(appId);
      if (existing.minimized) restore(appId);
      return;
    }

    const area = document.querySelector('.window-area');
    const areaRect = area.getBoundingClientRect();

    const w = opts.width || Math.min(750, areaRect.width - 40);
    const h = opts.height || Math.min(500, areaRect.height - 40);
    const x = opts.x ?? Math.max(20, (areaRect.width - w) / 2 + Math.random() * 40 - 20);
    const y = opts.y ?? Math.max(20, (areaRect.height - h) / 2 + Math.random() * 40 - 20);

    const win = document.createElement('div');
    win.className = 'app-window opening focused';
    win.dataset.appId = appId;
    win.style.cssText = `left:${x}px;top:${y}px;width:${w}px;height:${h}px;z-index:${++topZ}`;

    win.innerHTML = `
      <div class="window-titlebar">
        <span class="window-title">${title}</span>
        <div class="window-controls">
          <button class="ctrl-btn ctrl-minimize" data-action="minimize" aria-label="Minimize">
            <svg viewBox="0 0 16 16"><path d="M4 8.25h8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" fill="none"/></svg>
          </button>
          <button class="ctrl-btn ctrl-maximize" data-action="maximize" aria-label="Maximize">
            <svg viewBox="0 0 16 16"><rect x="4.2" y="4.2" width="7.6" height="7.6" rx="1.4" stroke="currentColor" stroke-width="1.4" fill="none"/></svg>
          </button>
          <button class="ctrl-btn ctrl-close" data-action="close" aria-label="Close">
            <svg viewBox="0 0 16 16"><path d="M5 5l6 6M11 5l-6 6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" fill="none"/></svg>
          </button>
        </div>
      </div>
      <div class="window-body">${contentHtml}</div>
      <div class="resize-handle resize-n"></div>
      <div class="resize-handle resize-s"></div>
      <div class="resize-handle resize-e"></div>
      <div class="resize-handle resize-w"></div>
      <div class="resize-handle resize-ne"></div>
      <div class="resize-handle resize-nw"></div>
      <div class="resize-handle resize-se"></div>
      <div class="resize-handle resize-sw"></div>
    `;

    area.appendChild(win);

    const state = {
      el: win, appId, minimized: false, maximized: false,
      restoreRect: { x, y, w, h }
    };
    windows.set(appId, state);

    win.addEventListener('mousedown', () => focus(appId));
    setupTitlebarDrag(win, appId);
    setupResize(win, appId);
    setupControls(win, appId);

    setTimeout(() => win.classList.remove('opening'), 250);

    Desktop.setDockActive(appId, true);
    focus(appId);
  }

  function setupControls(win, appId) {
    win.querySelectorAll('.ctrl-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const action = btn.dataset.action;
        if (action === 'close') close(appId);
        else if (action === 'minimize') minimize(appId);
        else if (action === 'maximize') toggleMaximize(appId);
      });
    });

    win.querySelector('.window-titlebar').addEventListener('dblclick', (e) => {
      if (e.target.closest('.ctrl-btn')) return;
      toggleMaximize(appId);
    });
  }

  function setupTitlebarDrag(win, appId) {
    const titlebar = win.querySelector('.window-titlebar');
    titlebar.addEventListener('mousedown', (e) => {
      if (e.target.closest('.ctrl-btn')) return;
      const state = windows.get(appId);
      if (state.maximized) return;

      dragState = {
        appId,
        startX: e.clientX,
        startY: e.clientY,
        origX: win.offsetLeft,
        origY: win.offsetTop
      };
      win.classList.add('dragging');
      document.body.classList.add('window-dragging');
      e.preventDefault();
    });
  }

  function setupResize(win, appId) {
    win.querySelectorAll('.resize-handle').forEach(handle => {
      handle.addEventListener('mousedown', (e) => {
        const state = windows.get(appId);
        if (state.maximized) return;

        const dir = [...handle.classList].find(c => c.startsWith('resize-'))?.replace('resize-', '');
        resizeState = {
          appId, dir,
          startX: e.clientX,
          startY: e.clientY,
          origX: win.offsetLeft,
          origY: win.offsetTop,
          origW: win.offsetWidth,
          origH: win.offsetHeight
        };
        win.classList.add('resizing');
        e.preventDefault();
        e.stopPropagation();
      });
    });
  }

  function focus(appId) {
    windows.forEach((s, id) => {
      s.el.classList.toggle('focused', id === appId);
    });
    const state = windows.get(appId);
    if (state) state.el.style.zIndex = ++topZ;
  }

  function close(appId) {
    const state = windows.get(appId);
    if (!state) return;
    state.el.classList.add('closing');
    setTimeout(() => {
      state.el.remove();
      windows.delete(appId);
      Desktop.setDockActive(appId, false);
    }, 200);
  }

  function minimize(appId) {
    const state = windows.get(appId);
    if (!state) return;
    state.minimized = true;
    state.el.classList.add('minimizing');
    setTimeout(() => {
      state.el.style.display = 'none';
      state.el.classList.remove('minimizing');
    }, 250);
  }

  function restore(appId) {
    const state = windows.get(appId);
    if (!state) return;
    state.minimized = false;
    state.el.style.display = '';
    state.el.classList.add('opening');
    setTimeout(() => state.el.classList.remove('opening'), 250);
    focus(appId);
  }

  function toggleMaximize(appId) {
    const state = windows.get(appId);
    if (!state) return;

    if (state.maximized) {
      state.maximized = false;
      state.el.classList.remove('maximized');
      const r = state.restoreRect;
      state.el.style.left = r.x + 'px';
      state.el.style.top = r.y + 'px';
      state.el.style.width = r.w + 'px';
      state.el.style.height = r.h + 'px';
    } else {
      state.restoreRect = {
        x: state.el.offsetLeft,
        y: state.el.offsetTop,
        w: state.el.offsetWidth,
        h: state.el.offsetHeight
      };
      state.maximized = true;
      state.el.classList.add('maximized');
    }
  }

  function initGlobalListeners() {
    document.addEventListener('mousemove', (e) => {
      if (dragState) {
        const dx = e.clientX - dragState.startX;
        const dy = e.clientY - dragState.startY;
        const state = windows.get(dragState.appId);
        if (state) {
          state.el.style.left = (dragState.origX + dx) + 'px';
          state.el.style.top = (dragState.origY + dy) + 'px';
        }
      }

      if (resizeState) {
        const s = resizeState;
        const state = windows.get(s.appId);
        if (!state) return;
        const dx = e.clientX - s.startX;
        const dy = e.clientY - s.startY;
        let newX = s.origX, newY = s.origY, newW = s.origW, newH = s.origH;

        if (s.dir.includes('e')) newW = Math.max(420, s.origW + dx);
        if (s.dir.includes('w')) { newW = Math.max(420, s.origW - dx); newX = s.origX + (s.origW - newW); }
        if (s.dir.includes('s')) newH = Math.max(300, s.origH + dy);
        if (s.dir.includes('n')) { newH = Math.max(300, s.origH - dy); newY = s.origY + (s.origH - newH); }

        state.el.style.left = newX + 'px';
        state.el.style.top = newY + 'px';
        state.el.style.width = newW + 'px';
        state.el.style.height = newH + 'px';
      }
    });

    document.addEventListener('mouseup', () => {
      if (dragState) {
        const s = windows.get(dragState.appId);
        if (s) s.el.classList.remove('dragging');
      }
      if (resizeState) {
        const s = windows.get(resizeState.appId);
        if (s) s.el.classList.remove('resizing');
      }
      document.body.classList.remove('window-dragging');
      dragState = null;
      resizeState = null;
    });
  }

  function closeAll() {
    windows.forEach((_, id) => close(id));
  }

  function isOpen(appId) {
    return windows.has(appId);
  }

  function getState(appId) {
    return windows.get(appId);
  }

  return { create, focus, close, minimize, restore, toggleMaximize, initGlobalListeners, closeAll, isOpen, getState };
})();
