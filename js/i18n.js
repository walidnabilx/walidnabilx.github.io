const I18n = (() => {
  let currentLang = 'en';

  function init() {
    const saved = localStorage.getItem('portfolio-lang');
    if (saved === 'ar' || saved === 'en') currentLang = saved;
    apply();
  }

  function getLang() {
    return currentLang;
  }

  function getData() {
    return portfolioData[currentLang];
  }

  function toggle() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('portfolio-lang', currentLang);
    apply();
    if (typeof Desktop !== 'undefined' && Desktop.refresh) Desktop.refresh();
  }

  function apply() {
    const html = document.documentElement;
    html.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    html.setAttribute('lang', currentLang);
  }

  function t(enText, arText) {
    return currentLang === 'ar' ? arText : enText;
  }

  return { init, getLang, getData, toggle, t };
})();
