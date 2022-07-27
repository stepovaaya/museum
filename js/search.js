const openBtn = document.querySelector('.search-open-btn');
const closeBtn = document.querySelector('.search-mobile__close-btn');
const mobileSearchForm = document.querySelector('.mobile-search-wrapper');

openBtn.addEventListener('click', function (e) {
  openBtn.classList.add('btn--hidden')
  mobileSearchForm.classList.add('search--visibly')
});

closeBtn.addEventListener('click', function (e) {
  openBtn.classList.remove('btn--hidden')
  mobileSearchForm.classList.remove('search--visibly')
});
