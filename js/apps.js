const Apps = (() => {

  function open(appId) {
    const data = I18n.getData();
    const t = I18n.t.bind(I18n);

    switch (appId) {
      case 'settings': openSettings(data, t); break;
      case 'terminal': openTerminal(data, t); break;
      case 'files': openFiles(data, t); break;
      case 'software': openSoftware(data, t); break;
      case 'editor': openEditor(data, t); break;
      case 'email': openEmail(data, t); break;
      case 'browser': openBrowser(data, t); break;
      case 'messages': openMessages(data, t); break;
    }
  }

  /* ── Settings (About + Stats) ── */
  function openSettings(data, t) {
    const settingsPanels = {
      about: () => `
        <div class="about-header">
          <div class="about-avatar">${data.name.charAt(0)}</div>
          <div class="about-name">${data.name}</div>
          <div class="about-title">${data.title}</div>
          <div class="about-bio">${data.bio}</div>
        </div>
        <div class="about-info-grid">
          <div class="about-info-item"><span class="info-icon">📍</span><span class="info-text">${data.location}</span></div>
          <div class="about-info-item"><span class="info-icon">📧</span><span class="info-text">${data.email}</span></div>
          <div class="about-info-item"><span class="info-icon">💻</span><span class="info-text">${data.github}</span></div>
        </div>`,
      stats: () => `
        <div class="app-section-title">${t('By the Numbers', 'بالأرقام')}</div>
        <div class="stats-grid">
          ${data.stats.map(s => `
            <div class="stat-card">
              <div class="stat-value" data-target="${s.value}">0</div>
              <div class="stat-label">${s.label}</div>
            </div>`).join('')}
        </div>`
    };

    let currentPanel = 'about';

    const sidebarItems = [
      { id: 'about', icon: '👤', label: t('About', 'نبذة') },
      { id: 'stats', icon: '📊', label: t('Statistics', 'إحصائيات') }
    ];

    function renderContent() {
      return `<div class="settings-app">
        <div class="settings-sidebar">
          ${sidebarItems.map(item => `
            <div class="settings-sidebar-item ${item.id === currentPanel ? 'active' : ''}" data-panel="${item.id}">
              <span>${item.icon}</span> ${item.label}
            </div>`).join('')}
        </div>
        <div class="settings-content">${settingsPanels[currentPanel]()}</div>
      </div>`;
    }

    WindowManager.create('settings', t('Settings', 'الإعدادات'), renderContent(), { width: 700, height: 480 });

    setTimeout(() => {
      const win = document.querySelector('.app-window[data-app-id="settings"]');
      if (!win) return;

      win.querySelectorAll('.settings-sidebar-item').forEach(item => {
        item.addEventListener('click', () => {
          currentPanel = item.dataset.panel;
          const body = win.querySelector('.window-body');
          body.innerHTML = renderContent();
          attachSettingsListeners(win);
          if (currentPanel === 'stats') animateCounters(win);
        });
      });

      if (currentPanel === 'stats') animateCounters(win);
    }, 50);

    function attachSettingsListeners(win) {
      win.querySelectorAll('.settings-sidebar-item').forEach(item => {
        item.addEventListener('click', () => {
          currentPanel = item.dataset.panel;
          const body = win.querySelector('.window-body');
          body.innerHTML = renderContent();
          attachSettingsListeners(win);
          if (currentPanel === 'stats') animateCounters(win);
        });
      });
    }
  }

  function animateCounters(container) {
    container.querySelectorAll('.stat-value[data-target]').forEach(el => {
      const target = parseInt(el.dataset.target, 10);
      let current = 0;
      const step = Math.max(1, Math.floor(target / 40));
      const interval = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(interval); }
        el.textContent = current + '+';
      }, 30);
    });
  }

  /* ── Terminal ── */
  function openTerminal(data, t) {
    const neofetchOutput = generateNeofetch(data);
    const html = `<div class="terminal-app">
      <div class="terminal-output"><div class="terminal-line">${neofetchOutput}</div></div>
      <div class="terminal-prompt-line">
        <span class="terminal-prompt">${data.name.split(' ')[0].toLowerCase()}@portfolio:~$&nbsp;</span>
        <input class="terminal-input" type="text" autocomplete="off" spellcheck="false" autofocus>
      </div>
    </div>`;

    WindowManager.create('terminal', t('Terminal', 'الطرفية'), html, { width: 700, height: 440 });

    setTimeout(() => {
      const win = document.querySelector('.app-window[data-app-id="terminal"]');
      if (!win) return;
      const input = win.querySelector('.terminal-input');
      const output = win.querySelector('.terminal-output');
      const termApp = win.querySelector('.terminal-app');

      input.focus();
      win.addEventListener('click', () => input.focus());

      input.addEventListener('keydown', (e) => {
        if (e.key !== 'Enter') return;
        const cmd = input.value.trim().toLowerCase();
        input.value = '';

        const promptPrefix = `${data.name.split(' ')[0].toLowerCase()}@portfolio:~$ `;
        output.innerHTML += `<div class="terminal-line"><span class="terminal-prompt">${promptPrefix}</span>${cmd}</div>`;

        if (cmd === 'clear') {
          output.innerHTML = '';
        } else if (cmd === 'neofetch') {
          output.innerHTML += `<div class="terminal-line">${generateNeofetch(data)}</div>`;
        } else if (cmd === 'help') {
          output.innerHTML += `<div class="terminal-line">${data.terminalCommands.help}</div>`;
        } else if (cmd === 'whoami') {
          output.innerHTML += `<div class="terminal-line">${data.terminalCommands.whoami}</div>`;
        } else if (cmd === 'skills') {
          const sk = data.skills;
          output.innerHTML += `<div class="terminal-line"><span class="neofetch-label">Languages:</span> ${sk.languages.join(', ')}\n<span class="neofetch-label">Frameworks:</span> ${sk.frameworks.join(', ')}\n<span class="neofetch-label">Databases:</span> ${sk.databases.join(', ')}\n<span class="neofetch-label">Cloud:</span> ${sk.cloud.join(', ')}</div>`;
        } else if (cmd === 'tools') {
          output.innerHTML += `<div class="terminal-line"><span class="neofetch-label">Tools:</span> ${data.skills.tools.join(', ')}</div>`;
        } else if (cmd === 'projects') {
          const list = data.projects.map(p => `  ${p.icon} ${p.name} [${p.status}]`).join('\n');
          output.innerHTML += `<div class="terminal-line">${list}</div>`;
        } else if (cmd === 'contact') {
          output.innerHTML += `<div class="terminal-line">${data.terminalCommands.contact}</div>`;
        } else if (cmd) {
          output.innerHTML += `<div class="terminal-line">${data.terminalCommands.unknown}</div>`;
        }

        termApp.scrollTop = termApp.scrollHeight;
      });
    }, 50);
  }

  function generateNeofetch(data) {
    const sk = data.skills;
    const ascii = `
         .-/+oossssoo+/-.
     \`:+ssssssssssssssssss+:\`
   -+ssssssssssssssssssyyssss+-
 .ossssssssssssssssssd<span style="color:#e95420">MMMNy</span>sssso.
/sssssssssss<span style="color:#e95420">hdmmNNmmyNMMMMh</span>ssssss/
+sssssssss<span style="color:#e95420">hm</span>yd<span style="color:#e95420">MMMMMMMNddddy</span>ssssssss+
/ssssssss<span style="color:#e95420">hNMMMyhhyyyyhmNMMMNh</span>ssssssss/
.ssssssss<span style="color:#e95420">dMMMNh</span>ssssssssss<span style="color:#e95420">hNMMMd</span>ssssssss.
+ssss<span style="color:#e95420">hhhyNMMNy</span>ssssssssssss<span style="color:#e95420">yNMMMy</span>sssssss+
ossss<span style="color:#e95420">dMMMMMMMh</span>sssssssssssss<span style="color:#e95420">hmmmh</span>ssssssso
ossss<span style="color:#e95420">dMMMMMMMh</span>ssssssssssssss<span style="color:#e95420">mh</span>sssssssso
+ssss<span style="color:#e95420">hhhyNMMNy</span>ssssssssssssss<span style="color:#e95420">yNMMMy</span>ssssss+
.ssssssss<span style="color:#e95420">dMMMNh</span>ssssssssssss<span style="color:#e95420">hNMMMd</span>ssssssss.
/ssssssss<span style="color:#e95420">hNMMMyhhyyyyhdNMMMNh</span>ssssssss/
+sssssssss<span style="color:#e95420">dm</span>yd<span style="color:#e95420">MMMMMMMMddddy</span>ssssssss+
/sssssssssss<span style="color:#e95420">hdmNNNNmyNMMMMh</span>ssssss/
 .ossssssssssssssssssd<span style="color:#e95420">MMMNy</span>sssso.
   -+sssssssssssssssss<span style="color:#e95420">yyy</span>ssss+-
     \`:+ssssssssssssssssss+:\`
         .-/+oossssoo+/-.`;

    const info = `<span class="neofetch-label">${sk.host}</span>@<span class="neofetch-label">portfolio</span>
<span class="neofetch-separator"></span>
<span class="neofetch-label">OS:</span> ${sk.os}
<span class="neofetch-label">Host:</span> ${sk.host}
<span class="neofetch-label">Kernel:</span> ${sk.kernel}
<span class="neofetch-label">Uptime:</span> ${sk.uptime}
<span class="neofetch-label">Packages:</span> ${sk.packages}
<span class="neofetch-label">Shell:</span> ${sk.shell}
<span class="neofetch-separator"></span>
<span class="neofetch-label">Languages:</span> ${sk.languages.join(', ')}
<span class="neofetch-label">Frameworks:</span> ${sk.frameworks.join(', ')}
<span class="neofetch-label">Databases:</span> ${sk.databases.join(', ')}
<span class="neofetch-label">Tools:</span> ${sk.tools.join(', ')}
<span class="neofetch-label">Cloud:</span> ${sk.cloud.join(', ')}
<div class="neofetch-colors">
  <span style="background:#2e3436"></span>
  <span style="background:#cc0000"></span>
  <span style="background:#4e9a06"></span>
  <span style="background:#c4a000"></span>
  <span style="background:#3465a4"></span>
  <span style="background:#75507b"></span>
  <span style="background:#06989a"></span>
  <span style="background:#d3d7cf"></span>
</div>`;

    return `<div class="neofetch-container"><pre class="neofetch-ascii">${ascii}</pre><div class="neofetch-info">${info}</div></div>`;
  }

  /* ── Files / Nautilus (Projects) ── */
  function openFiles(data, t) {
    let viewingProject = null;

    function renderGrid() {
      return `<div class="files-app">
        <div class="files-toolbar">
          <div class="files-breadcrumb">
            <span data-nav="home">🏠 ${t('Home', 'الرئيسية')}</span>
            <span class="sep">/</span>
            <span>${t('Projects', 'المشاريع')}</span>
          </div>
        </div>
        <div class="files-grid">
          ${data.projects.map((p, i) => `
            <div class="file-item" data-idx="${i}">
              <span class="file-icon">${p.icon}</span>
              <span class="file-name">${p.name}</span>
              <span class="file-status">${p.status}</span>
            </div>`).join('')}
        </div>
      </div>`;
    }

    function renderDetail(idx) {
      const p = data.projects[idx];
      return `<div class="files-app">
        <div class="files-toolbar">
          <div class="files-breadcrumb">
            <span data-nav="home">🏠 ${t('Home', 'الرئيسية')}</span>
            <span class="sep">/</span>
            <span data-nav="grid">${t('Projects', 'المشاريع')}</span>
            <span class="sep">/</span>
            <span>${p.name}</span>
          </div>
        </div>
        <div class="project-detail">
          <div class="project-detail-header">
            <span class="project-detail-icon">${p.icon}</span>
            <div>
              <div class="project-detail-title">${p.name}</div>
              <span class="project-detail-status">${p.status}</span>
            </div>
          </div>
          <div class="project-detail-desc">${p.desc}</div>
          <div class="project-detail-tags">
            ${p.tags.map(tag => `<span>${tag}</span>`).join('')}
          </div>
        </div>
      </div>`;
    }

    WindowManager.create('files', t('Files', 'الملفات'), renderGrid(), { width: 680, height: 460 });

    setTimeout(() => attachFilesListeners(), 50);

    function attachFilesListeners() {
      const win = document.querySelector('.app-window[data-app-id="files"]');
      if (!win) return;

      win.querySelectorAll('.file-item').forEach(item => {
        item.addEventListener('click', () => {
          const idx = parseInt(item.dataset.idx, 10);
          win.querySelector('.window-body').innerHTML = renderDetail(idx);
          attachBreadcrumbListeners(win);
        });
      });

      attachBreadcrumbListeners(win);
    }

    function attachBreadcrumbListeners(win) {
      win.querySelectorAll('.files-breadcrumb span[data-nav]').forEach(span => {
        span.addEventListener('click', () => {
          win.querySelector('.window-body').innerHTML = renderGrid();
          setTimeout(() => attachFilesListeners(), 10);
        });
      });
    }
  }

  /* ── Software Center (Services) ── */
  function openSoftware(data, t) {
    const html = `<div class="software-app">
      <div class="software-header">${t('Services', 'الخدمات')}</div>
      <div class="software-subtitle">${t('What I can build for you', 'ما أقدر أبنيه لك')}</div>
      <div class="software-grid">
        ${data.services.map(s => `
          <div class="software-card">
            <span class="software-card-icon">${s.icon}</span>
            <div>
              <div class="software-card-title">${s.title}</div>
              <div class="software-card-desc">${s.desc}</div>
            </div>
          </div>`).join('')}
      </div>
    </div>`;

    WindowManager.create('software', t('Software', 'البرمجيات'), html, { width: 720, height: 500 });
  }

  /* ── Text Editor (Experience + Education) ── */
  function openEditor(data, t) {
    let activeTab = 'experience';

    function renderTabs() {
      const expContent = data.experience.map(exp => `
        <div class="timeline-item">
          <div class="timeline-role">${exp.role}</div>
          <div class="timeline-company">${exp.company}</div>
          <div class="timeline-period">${exp.period}</div>
          <ul class="timeline-details">
            ${exp.details.map(d => `<li>${d}</li>`).join('')}
          </ul>
          <div class="timeline-tags">
            ${exp.tags.map(tag => `<span>${tag}</span>`).join('')}
          </div>
        </div>`).join('');

      const eduContent = data.education.map(edu => `
        <div class="edu-item">
          <div class="edu-degree">${edu.degree}</div>
          <div class="edu-school">${edu.school}</div>
          <div class="edu-period">${edu.period}</div>
          <div class="edu-details">${edu.details}</div>
        </div>`).join('');

      return `<div class="editor-app">
        <div class="editor-tabs">
          <div class="editor-tab ${activeTab === 'experience' ? 'active' : ''}" data-tab="experience">${t('Experience', 'الخبرة')}</div>
          <div class="editor-tab ${activeTab === 'education' ? 'active' : ''}" data-tab="education">${t('Education', 'التعليم')}</div>
        </div>
        <div class="editor-content">
          ${activeTab === 'experience' ? expContent : eduContent}
        </div>
      </div>`;
    }

    WindowManager.create('editor', t('Text Editor', 'محرر النصوص'), renderTabs(), { width: 650, height: 480 });

    setTimeout(() => attachEditorListeners(), 50);

    function attachEditorListeners() {
      const win = document.querySelector('.app-window[data-app-id="editor"]');
      if (!win) return;
      win.querySelectorAll('.editor-tab').forEach(tab => {
        tab.addEventListener('click', () => {
          activeTab = tab.dataset.tab;
          win.querySelector('.window-body').innerHTML = renderTabs();
          setTimeout(() => attachEditorListeners(), 10);
        });
      });
    }
  }

  /* ── Email / Contact ── */
  function openEmail(data, t) {
    const html = `<div class="email-app">
      <div class="email-toolbar">📧 ${t('New Message', 'رسالة جديدة')}</div>
      <div class="email-compose">
        <div class="email-field">
          <label>${t('To:', 'إلى:')}</label>
          <input type="text" value="${data.email}" readonly style="opacity:0.6">
        </div>
        <div class="email-field">
          <label>${t('From:', 'من:')}</label>
          <input type="email" placeholder="${t('your@email.com', 'بريدك@email.com')}">
        </div>
        <div class="email-field">
          <label>${t('Name:', 'الاسم:')}</label>
          <input type="text" placeholder="${t('Your name', 'اسمك')}">
        </div>
        <div class="email-field">
          <label>${t('Subject:', 'الموضوع:')}</label>
          <input type="text" placeholder="${t('Project inquiry...', 'استفسار عن مشروع...')}">
        </div>
        <div class="email-body-field">
          <textarea placeholder="${t('Write your message here...', 'اكتب رسالتك هنا...')}"></textarea>
        </div>
      </div>
      <div class="email-send-bar">
        <button class="email-send-btn">${t('Send', 'إرسال')} ⬆</button>
      </div>
    </div>`;

    WindowManager.create('email', t('Email', 'البريد'), html, { width: 600, height: 480 });

    setTimeout(() => {
      const win = document.querySelector('.app-window[data-app-id="email"]');
      if (!win) return;
      win.querySelector('.email-send-btn').addEventListener('click', () => {
        const btn = win.querySelector('.email-send-btn');
        btn.textContent = t('Sent!', 'تم الإرسال!');
        btn.style.background = '#73c48f';
        setTimeout(() => {
          btn.textContent = t('Send', 'إرسال') + ' ⬆';
          btn.style.background = '';
        }, 2000);
      });
    }, 50);
  }

  /* ── Browser (Links) ── */
  function openBrowser(data, t) {
    const linkIcons = { github: '⌨️', linkedin: '💼', twitter: '🐦', email: '📧' };

    const html = `<div class="browser-app">
      <div class="browser-toolbar">
        <div class="browser-nav-btns">
          <button>←</button><button>→</button><button>↻</button>
        </div>
        <div class="browser-url-bar">
          <span class="lock-icon">🔒</span> ${data.name.toLowerCase().replace(' ', '')}.dev/links
        </div>
      </div>
      <div class="browser-content">
        <div class="links-section-title">${t('Links & Social', 'الروابط والتواصل')}</div>
        <div class="links-grid">
          ${data.links.map(link => `
            <a class="link-card" href="${link.url}" target="_blank" rel="noopener">
              <div class="link-card-icon">${linkIcons[link.icon] || '🔗'}</div>
              <div>
                <div class="link-card-label">${link.label}</div>
                <div class="link-card-url">${link.url.replace('https://', '').replace('mailto:', '')}</div>
              </div>
            </a>`).join('')}
        </div>
      </div>
    </div>`;

    WindowManager.create('browser', t('Firefox', 'فايرفوكس'), html, { width: 680, height: 440 });
  }

  /* ── Messages (Reviews) ── */
  function openMessages(data, t) {
    const html = `<div class="messages-app">
      <div class="messages-header">${t('Client Reviews', 'آراء العملاء')}</div>
      <div class="messages-list">
        ${data.reviews.map(r => `
          <div class="message-item">
            <div class="message-avatar">${r.initials}</div>
            <div class="message-bubble">
              <div class="message-name">${r.name}</div>
              <div class="message-project">${r.project}</div>
              <div class="message-text">${r.text}</div>
            </div>
          </div>`).join('')}
      </div>
    </div>`;

    WindowManager.create('messages', t('Messages', 'الرسائل'), html, { width: 620, height: 460 });
  }

  return { open };
})();
