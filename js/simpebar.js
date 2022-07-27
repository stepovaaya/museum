document.querySelectorAll(".dropdown__simplebar").forEach(dropdown => {
  new SimpleBar(dropdown, {
  autoHide: false,
  scrollbarMaxSize: 28,
});
})

const btns = document.querySelectorAll(".filter-list__btn");
const dropdowns = document.querySelectorAll(".dropdown");
const activeClassdropdowns = "dropdown__active";
const activeClassbtns = "btn__active";

btns.forEach(item => {
  item.addEventListener("click", (e) => {
    let currentBtn = e.currentTarget;
    let dropThis = currentBtn.closest('.filter-list__item').querySelector('.dropdown');
    dropdowns.forEach(el => {
      if (el != dropThis) {
        el.classList.remove(activeClassdropdowns);
      }
    });
    btns.forEach(el => {
      if (el != currentBtn) {
        el.classList.remove(activeClassbtns)
      }
    });
    dropThis.classList.toggle(activeClassdropdowns);
    currentBtn.classList.toggle(activeClassbtns);
  })
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.filter-list__item')) {
    btns.forEach(el => {
      el.classList.remove(activeClassbtns);
    });

    dropdowns.forEach(el => {
      el.classList.remove(activeClassdropdowns);
    });
  }
});



