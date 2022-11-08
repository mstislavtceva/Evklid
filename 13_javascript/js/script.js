document.addEventListener('DOMContentLoaded', (e) => {
  // Свайпер
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    spaceBetween: 0,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    }
  });

  // Табы
  const tabsBtn = document.querySelectorAll('.stages-start__link');
  const tabsContent = document.querySelectorAll('.stages-text__tabs');

  tabsBtn.forEach(function (element) {
    element.addEventListener ('click', function (e) {
      const path = e.currentTarget.dataset.path;

      tabsBtn.forEach(function(btn){ btn.classList.remove('stages-start__link--active');});
      e.currentTarget.classList.add('stages-start__link--active');

      tabsContent.forEach(function(element){ element.classList.remove('stages-text__tabs--active');});
      document.querySelector(`[data-target="${path}"]`).classList.add('stages-text__tabs--active');

      console.log('Hey!!!');
    });
  });

  // Аккордеон
  new Accordion('.accordion');

  // Бургер-меню
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.header__nav');
  const menuLinks = document.querySelectorAll('.nav__link');

  burger.addEventListener('click', function() {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');

  });

  menuLinks.forEach(function (el) {
    el.addEventListener('click', function() {
      burger.classList.remove('burger--active');
      menu.classList.remove('header__nav--active');

      document.body.classList.remove('stop-scroll');
    });
  });

  // Открытие поиска
  document.getElementById('open-search-form').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.add('search-form--active');
  });

  document.getElementById('search-form-close').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.remove('search-form--active');
  });
});
