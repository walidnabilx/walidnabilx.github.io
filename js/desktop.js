const Desktop = (() => {
  let panelClock;
  let contextMenu;

  const dockApps = [
    { id: 'settings', icon: '⚙️', labelEn: 'Settings', labelAr: 'الإعدادات' },
    { id: 'terminal', icon: '▬', labelEn: 'Terminal', labelAr: 'الطرفية', isTerminal: true },
    { id: 'files', icon: '📁', labelEn: 'Files', labelAr: 'الملفات' },
    { id: 'separator1', separator: true },
    { id: 'software', icon: '🏪', labelEn: 'Software', labelAr: 'البرمجيات' },
    { id: 'editor', icon: '📄', labelEn: 'Text Editor', labelAr: 'محرر النصوص' },
    { id: 'email', icon: '✉️', labelEn: 'Email', labelAr: 'البريد' },
    { id: 'separator2', separator: true },
    { id: 'browser', icon: '🌐', labelEn: 'Firefox', labelAr: 'فايرفوكس' },
    { id: 'messages', icon: '💬', labelEn: 'How I Work', labelAr: 'كيف أعمل' }
  ];

  function init() {
    WindowManager.initGlobalListeners();
    buildDock();
    startClock();
    setupContextMenu();
    setupLangToggle();
    setupActivities();
    setupSystemMenu();
  }

  function refresh() {
    buildDock();
    updatePanelClock();
    setupSystemMenu();
    const langToggle = document.querySelector('.lang-toggle');
    if (langToggle) langToggle.textContent = I18n.getLang() === 'en' ? 'عربي' : 'EN';

    WindowManager.closeAll();
  }

  function buildDock() {
    const dock = document.querySelector('.dock');
    dock.innerHTML = '';

    dockApps.forEach(app => {
      if (app.separator) {
        const sep = document.createElement('div');
        sep.className = 'dock-separator';
        dock.appendChild(sep);
        return;
      }

      const item = document.createElement('div');
      item.className = 'dock-item';
      item.dataset.appId = app.id;

      const icon = document.createElement('span');
      icon.className = 'dock-icon';
      if (app.isTerminal) {
        icon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 17l6-5-6-5"/><path d="M12 19h8"/></svg>`;
      } else {
        icon.textContent = app.icon;
      }

      const indicator = document.createElement('div');
      indicator.className = 'dock-indicator';

      const tooltip = document.createElement('span');
      tooltip.className = 'dock-tooltip';
      tooltip.textContent = I18n.getLang() === 'ar' ? app.labelAr : app.labelEn;

      item.appendChild(indicator);
      item.appendChild(icon);
      item.appendChild(tooltip);

      item.addEventListener('click', () => {
        item.classList.add('bouncing');
        setTimeout(() => item.classList.remove('bouncing'), 600);
        Apps.open(app.id);
      });

      dock.appendChild(item);
    });
  }

  function setDockActive(appId, active) {
    const item = document.querySelector(`.dock-item[data-app-id="${appId}"]`);
    if (item) item.classList.toggle('active', active);
  }

  function startClock() {
    panelClock = document.querySelector('.panel-center');
    updatePanelClock();
    setInterval(updatePanelClock, 1000);
  }

  function updatePanelClock() {
    if (!panelClock) return;
    const now = new Date();
    const locale = I18n.getLang() === 'ar' ? 'ar-EG' : 'en-US';
    const time = now.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit', hour12: false });
    const date = now.toLocaleDateString(locale, { weekday: 'short', month: 'short', day: 'numeric' });
    panelClock.textContent = `${date}  ${time}`;
  }

  function setupContextMenu() {
    contextMenu = document.querySelector('.context-menu');
    const windowArea = document.querySelector('.window-area');

    windowArea.addEventListener('contextmenu', (e) => {
      if (e.target.closest('.app-window')) return;
      e.preventDefault();
      contextMenu.style.left = e.clientX + 'px';
      contextMenu.style.top = e.clientY + 'px';
      contextMenu.classList.add('visible');
    });

    document.addEventListener('click', () => {
      contextMenu.classList.remove('visible');
    });

    contextMenu.querySelectorAll('.context-menu-item').forEach(item => {
      item.addEventListener('click', () => {
        const action = item.dataset.action;
        if (action === 'terminal') Apps.open('terminal');
        else if (action === 'about') Apps.open('settings');
        contextMenu.classList.remove('visible');
      });
    });
  }

  function setupLangToggle() {
    const btn = document.querySelector('.lang-toggle');
    if (btn) {
      btn.textContent = I18n.getLang() === 'en' ? 'عربي' : 'EN';
      btn.addEventListener('click', () => I18n.toggle());
    }
  }

  function setupActivities() {
    const btn = document.querySelector('.activities-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        Apps.open('settings');
      });
    }
  }

  function setupSystemMenu() {
    const btn = document.querySelector('.system-menu-btn');
    if (!btn) return;

    // rebuild fresh (labels are language-dependent; refresh() re-invokes this)
    const old = document.querySelector('.system-menu');
    if (old) old.remove();

    const data = I18n.getData();
    const t = (en, ar) => (I18n.getLang() === 'ar' ? ar : en);

    const menu = document.createElement('div');
    menu.className = 'system-menu';
    menu.innerHTML = `
      <div class="system-menu-greeting">
        <div class="sm-avatar">${data.name.charAt(0)}</div>
        <div>
          <div class="sm-name">${data.name}</div>
          <div class="sm-sub">${data.location} · ${data.title}</div>
        </div>
      </div>
      <div class="system-menu-row" data-act="about"><span class="sm-ico">ⓘ</span> ${t('About this portfolio', 'عن هذا البورتفوليو')}</div>
      <div class="system-menu-row" data-act="github"><span class="sm-ico">⌨️</span> ${t('GitHub profile', 'حساب GitHub')} ↗</div>
      <div class="system-menu-row" data-act="lang"><span class="sm-ico">🌐</span> ${t('العربية', 'English')}</div>
      <div class="system-menu-row danger" data-act="lock"><span class="sm-ico">⏻</span> ${t('Lock / Restart', 'قفل / إعادة تشغيل')}</div>
    `;
    document.querySelector('#desktop').appendChild(menu);

    btn.onclick = (e) => {
      e.stopPropagation();
      const open = menu.classList.toggle('visible');
      btn.classList.toggle('open', open);
    };
    menu.addEventListener('click', (e) => e.stopPropagation());
    document.addEventListener('click', () => {
      menu.classList.remove('visible');
      btn.classList.remove('open');
    });

    menu.querySelectorAll('.system-menu-row').forEach(row => {
      row.addEventListener('click', () => {
        menu.classList.remove('visible');
        btn.classList.remove('open');
        const act = row.dataset.act;
        if (act === 'about') Apps.open('settings');
        else if (act === 'github') window.open('https://github.com/walidnabilx', '_blank', 'noopener');
        else if (act === 'lang') I18n.toggle();
        else if (act === 'lock') location.reload();
      });
    });
  }

  return { init, refresh, setDockActive, buildDock };
})();
