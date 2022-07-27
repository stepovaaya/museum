const galleryBtns = document.querySelectorAll('.gallery-btn');
const modalOverlay = document.querySelector('.modals');
const modals = document.querySelectorAll('.modal');
const modalClose = document.querySelectorAll('.modal__close');


galleryBtns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-modal-btn');
    document.body.classList.add('disabled-scroll');
    document.querySelector(`[data-modal="${path}"]`).classList.add('modal--visible');
    modalOverlay.classList.add('modals--visible');
  });
});


modalOverlay.addEventListener('click', (e) => {
  if (e.target == modalOverlay) {
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });

    modalOverlay.classList.remove('modals--visible');
    document.body.classList.remove('disabled-scroll');
  }
});

modalClose.forEach((el) => {
  el.addEventListener('click', (e) => {
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });
    modalOverlay.classList.remove('modals--visible');
    document.body.classList.remove('disabled-scroll');
  });
});


