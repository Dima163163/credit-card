import {el, setChildren} from 'redom';

// Создаем обертку
const createWrapper = () => el('div', {className: 'wrapper'});

// Функция заполнения кредитной карты
const fillInCard = (selectorSpan, selectorInput) => {
  selectorInput.addEventListener('input', () => {
    selectorSpan.textContent = selectorInput.value;
  });
};

// Функция маски ввода банковской карты
const formatCart = (input) => {
  let inputVal = input.value;
  if (inputVal === '') return;
  const originalLen = inputVal.length;
  let caretPos = input.selectionStart;
  inputVal = inputVal.replace(/\D/g, '').replace(/\B(?=(\d{4})+(?!\d))/g, ' ');
  input.value = inputVal;
  const updatedLen = inputVal.length;
  caretPos = updatedLen - originalLen + caretPos;
  input.setSelectionRange(caretPos, caretPos);
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

  const form = el('form', {className: 'form', id: 'form', action: '#'});

  const formInputWrapHolder =
  el('div', {className: 'form__input-wrap form__input-wrap_holder'});

  const labelFormHolder = el('label', 'Card Holder',
      {className: 'form__label form__holder-label', for: ''},
  );
  const inputFormHolder = el('input',
      {className: 'input input__holder', type: 'text'},
  );

  const formInputWrapNumber =
  el('div', {className: 'form__input-wrap form__input-wrap_number'});

  const labelFormNumber = el('label', 'Card Number',
      {className: 'form__label form__number-label', for: ''},
  );
  const inputFormNumber = el('input',
      {className: 'input input__number', id:
      'cardNumber', maxlength: 19, placeholder:
      'XXXX XXXX XXXX XXXX'},
  );
  inputFormNumber.addEventListener('input', (e) => formatCart(e.target));

  const formInputWrapDate =
  el('div', {className: 'form__input-wrap form__input-wrap_date'});

  const labelFormDate = el('label', 'Card Expiry',
      {className: 'form__label form__date-label', for: ''},
  );
  const inputFormDate = el('input',
      {className: 'input input__date', type: 'text'},
  );

  const formInputWrapCvv =
  el('div', {className: 'form__input-wrap form__input-wrap_cvv'});

  const labelFormCvv = el('label', 'CVV',
      {className: 'form__label form__cvv-label', for: ''},
  );
  const inputFormCvv = el('input',
      {className: 'input input__cvv', type: 'text'},
  );

  const btn = el('button', 'CHECK OUT',
      {className: 'form__button'},
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
