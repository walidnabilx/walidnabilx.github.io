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
    { id: 'messages', icon: '💬', labelEn: 'Messages', labelAr: 'الرسائل' }
  ];

  function init() {
    WindowManager.initGlobalListeners();
    buildDock();
    startClock();
    setupContextMenu();
    setupLangToggle();
    setupActivities();
  }

  function refresh() {
    buildDock();
    updatePanelClock();
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

  return { init, refresh, setDockActive, buildDock };
})();
