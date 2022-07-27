const validation = new JustValidate(
  '.contacts__form',
  {
    errorFieldCssClass: 'is-invalid',
    errorLabelCssClass: 'is-label-invalid',
    errorLabelStyle: {
      color: '#d11616',
    },

  },
);

validation
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Введите ваше имя',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Введите более 3-х символов',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Введите не более 30-ти символов'
    },
    {
      rule: 'customRegexp',
      value: /^[а-яА-ЯёЁa-zA-Z]+$/,
      errorMessage: 'Неверный формат',
    },
  ])
  .addField('#tel', [
    {
      rule: 'required',
      errorMessage: 'Укажите ваш телефон',
    },
    {
      rule: 'number',
      errorMessage: 'Только цифры',
    },
    {
      rule: 'minLength',
      value: 10,
      errorMessage: 'Введите 10 символов',
    },

  ]).onSuccess((event) => {

    let formData = new FormData(event.target);
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
         let doneMessage = document.querySelector('.feedback__message');
         doneMessage.classList.add('visible-message');

         (function() {
          // Создаём таймер
          setTimeout(function() {
            doneMessage.classList.remove('visible-message'); // Меняем прозрачность
          }, 5000); // 10000 мсек = 10 сек
        })();
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    event.target.reset();
  });
