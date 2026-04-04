const Boot = (() => {
  let bootScreen, loginScreen, desktop;

  function init() {
    bootScreen = document.getElementById('boot-screen');
    loginScreen = document.getElementById('login-screen');
    desktop = document.getElementById('desktop');

    updateLoginClock();
    setInterval(updateLoginClock, 1000);

    setTimeout(() => {
      bootScreen.classList.add('hidden');
      setTimeout(() => {
        loginScreen.classList.add('visible');
        bootScreen.style.display = 'none';
      }, 800);
    }, 2500);

    loginScreen.querySelector('.login-avatar-wrapper').addEventListener('click', unlock);
    loginScreen.querySelector('.login-unlock-bar').addEventListener('click', unlock);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && loginScreen.classList.contains('visible') && !loginScreen.classList.contains('hidden')) {
        unlock();
      }
    });
  }

  function unlock() {
    loginScreen.classList.add('hidden');
    setTimeout(() => {
      loginScreen.style.display = 'none';
      desktop.classList.add('visible');
      Desktop.init();
    }, 600);
  }

  function updateLoginClock() {
    const now = new Date();
    const timeEl = loginScreen?.querySelector('.login-time');
    const dateEl = loginScreen?.querySelector('.login-date');
    if (timeEl) {
      timeEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    }
    if (dateEl) {
      dateEl.textContent = now.toLocaleDateString(I18n.getLang() === 'ar' ? 'ar-EG' : 'en-US', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
      });
    }
  }

  return { init };
})();
