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
