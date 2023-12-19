import {el, setChildren} from '../node_modules/redom/dist/redom.es.js';
import {createWarningTitle} from './createWarningTitle.js';
import {validateCardHolder, validateCardNumber,
  validateCardCvv, validateCardValidity} from './validate.js';


// Создаем обертку
const createWrapper = () => el('div', {className: 'wrapper'});

// Функция заполнения кредитной карты
const fillInCard = (selectorSpan, selectorInput) => {
  selectorInput.addEventListener('input', () => {
    selectorSpan.textContent = selectorInput.value;
  });
};

// Создаем карту и форму
const createCard = () => {
  const card = el('div', {className: 'card'});
  const secure = el('p', 'Secure Checkout', {className: 'secure'});
  const creditCard = el('div', {className: 'credit-card'});

  const cardNumber = el('span',
      'xxxx xxxx xxxx xxxx',
      {className: 'card__number'},
  );

  const cardPersonal = el('div', {className: 'card__personal'});

  const cardName = el('span', 'John Doe', {className: 'card__name'});
  const cardDate = el('span', '04/24', {className: 'card__date'});

  setChildren(cardPersonal, [cardName, cardDate]);
  setChildren(creditCard, [cardNumber, cardPersonal]);

  const form = el('form', {className: 'form', id: 'form', action: '#', onsubmit(e) {
      e.preventDefault();

      const formData = new FormData(e.target);
      const itemData = Object.fromEntries(formData);

      for (const val of Object.values(itemData)) {
        if (!val.replace(/\s/g, '').length) return;
      }

      const isNameValid = validateCardHolder(form.cardName.value);
      const isNumberValid = validateCardNumber(form.number.value);
      const isCVVValid = validateCardCvv(form.cvv.value);
      const isExpireDateValid = validateCardValidity(form.date.value);

      if (!isNameValid) {
        createWarningTitle(form.cardName);
      }
      if (!isNumberValid) {
        createWarningTitle(form.number);
      }
      if (!isCVVValid) {
        createWarningTitle(form.cvv);
      }
      if (!isExpireDateValid) {
        createWarningTitle(form.date);
      }

      if (isNameValid && isNumberValid &&
            isCVVValid && isExpireDateValid) {
        alert('Данные введены корректно!');
        cardNumber.textContent = 'xxxx xxxx xxxx xxxx';
        cardName.textContent ='John Doe';
        cardDate.textContent = '04/24';
        form.reset();
      }
  }});

  const formInputWrapHolder =
  el('div', {className: 'form__input-wrap form__input-wrap_holder'});

  const labelFormHolder = el('label', 'Card Holder',
      {className: 'form__label form__holder-label', for: ''},
  );
  const inputFormHolder = el('input',
      {className: 'input input__holder', type: 'text', name: 'cardName'},
  );

  const formInputWrapNumber =
  el('div', {className: 'form__input-wrap form__input-wrap_number'});

  const labelFormNumber = el('label', 'Card Number',
      {className: 'form__label form__number-label', for: ''},
  );
  const inputFormNumber = el('input',
      {className: 'input input__number', id:
      'cardNumber', maxlength: 19, placeholder:
      'XXXX XXXX XXXX XXXX', name: 'number'},
  );

  inputFormNumber.addEventListener('input', (e) => {
    const number = document.querySelector('.card__number');
    e.target.value = e.target.value.replace(/(\S{4})(?=\S)/g, '$1 ');
    number.textContent = e.target.value;
  });

  inputFormHolder.addEventListener('input', (e) => {
    const name = document.querySelector('.card__name');
    e.target.value = e.target.value.toUpperCase();

    name.textContent = e.target.value;
  });

  const formInputWrapDate =
  el('div', {className: 'form__input-wrap form__input-wrap_date'});

  const labelFormDate = el('label', 'Card Expiry',
      {className: 'form__label form__date-label', for: ''},
  );
  const inputFormDate = el('input',
      {className: 'input input__date', type: 'text', name: 'date'},
  );
  
  inputFormDate.addEventListener('input', (e) => {
    const expire = document.querySelector('.card__date');
    e.target.value = e.target.value.replace(/(\d{2})(?=\d)/g, '$1/');
    expire.textContent = e.target.value;
  });

  const formInputWrapCvv =
  el('div', {className: 'form__input-wrap form__input-wrap_cvv'});

  const labelFormCvv = el('label', 'CVV',
      {className: 'form__label form__cvv-label', for: ''},
  );
  const inputFormCvv = el('input',
      {className: 'input input__cvv', type: 'text', name: 'cvv'},
  );

  const btn = el('button', 'ОТПРАВИТЬ',
      {className: 'form__button', type: 'submit'},
  );

  // Вставляем элементы в форму
  setChildren(formInputWrapHolder, [labelFormHolder, inputFormHolder]);
  setChildren(formInputWrapNumber, [labelFormNumber, inputFormNumber]);
  setChildren(formInputWrapDate, [labelFormDate, inputFormDate]);
  setChildren(formInputWrapCvv, [labelFormCvv, inputFormCvv]);
  setChildren(form, [formInputWrapHolder, formInputWrapNumber,
    formInputWrapDate, formInputWrapCvv, btn,
  ]);


  fillInCard(cardNumber, inputFormNumber);
  fillInCard(cardName, inputFormHolder);
  fillInCard(cardDate, inputFormDate);

  // Вставляем элементы в карту
  setChildren(card, [secure, creditCard, form]);

  return card;
};

const init = () => {
  setChildren(document.body, createWrapper());
  setChildren(document.querySelector('.wrapper'), createCard());
};

init();