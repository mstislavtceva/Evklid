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
