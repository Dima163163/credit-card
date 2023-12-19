import {validateCardCvv, validateCardHolder, validateCardNumber, validateCardValidity} from './validate.js';

describe('Проверка имени держателя карты', () => {
  it('Проверка на 1 слово работает корректно', () => {
    expect(validateCardHolder('Peterpetrov')).toBe(false);
    expect(validateCardHolder('PETRPETROV')).toBe(false);
    expect(validateCardHolder('petr petrov')).toBe(true);
  });
  it('Проверка на кирилицу работает корректно', () => {
    expect(validateCardHolder('петр петров')).toBe(false);
    expect(validateCardHolder('петрпетров')).toBe(false);
    expect(validateCardHolder('PETR PETROV')).toBe(true);
  });
  it('Проверка на содержание цифр работает корректно', () => {
    expect(validateCardHolder('p1tr petrov')).toBe(false);
    expect(validateCardHolder('petr petro3')).toBe(false);
    expect(validateCardHolder('PETR petrov')).toBe(true);
  });
});

describe('Проверка номера карты', () => {
  it('Проверка на кирилицу работает корректно', () => {
    expect(validateCardNumber('1111аааа1111аааа')).toBe(false);
    expect(validateCardNumber('аааа1111аааа1111')).toBe(false);
    expect(validateCardNumber('5555555555555555')).toBe(true);
  });
  it('Проверка на латиницу работает корректно', () => {
    expect(validateCardNumber('1111aaaa1111aaaa')).toBe(false);
    expect(validateCardNumber('aaaa1111aaaa1111')).toBe(false);
    expect(validateCardNumber('5555555555555555')).toBe(true);
  });
  it('Проверка на знаки препинания работает корректно', () => {
    expect(validateCardNumber('1111-1111-1111-1111')).toBe(false);
    expect(validateCardNumber('1111/1111/1111/1111')).toBe(false);
    expect(validateCardNumber('5555555555555555')).toBe(true);
  });
  it('Проверка на количество цифр работает корректно', () => {
    expect(validateCardNumber('111111111')).toBe(false);
    expect(validateCardNumber('111111111111111111111')).toBe(false);
    expect(validateCardNumber('5555555555555555')).toBe(true);
  });
});

describe('Проверка CVV кода', () => {
  it('Проверка на кирилицу работает корректно', () => {
    expect(validateCardCvv('1ф1')).toBe(false);
    expect(validateCardCvv('ф11')).toBe(false);
    expect(validateCardCvv('111')).toBe(true);
  });
  it('Проверка на латиницу работает корректно', () => {
    expect(validateCardCvv('11a')).toBe(false);
    expect(validateCardCvv('a11')).toBe(false);
    expect(validateCardCvv('111')).toBe(true);
  });
  it('Проверка на знаки препинания работает корректно', () => {
    expect(validateCardCvv('1-1')).toBe(false);
    expect(validateCardCvv('1)1')).toBe(false);
    expect(validateCardCvv('1/1')).toBe(false);
    expect(validateCardCvv('111')).toBe(true);
  });
  it('Проверка на количество цифр работает корректно', () => {
    expect(validateCardCvv('1111')).toBe(false);
    expect(validateCardCvv('11')).toBe(false);
    expect(validateCardCvv('111')).toBe(true);
  });
});

describe('Проверка срока действия карты', () => {
  it('Проверка на кирилицу работает корректно', () => {
    expect(validateCardValidity('ааа')).toBe(false);
    expect(validateCardValidity('аа/аа')).toBe(false);
    expect(validateCardValidity('07/28')).toBe(true);
  });
  it('Проверка на латиницу работает корректно', () => {
    expect(validateCardValidity('aa/aa')).toBe(false);
    expect(validateCardValidity('a1/a1')).toBe(false);
    expect(validateCardValidity('07/28')).toBe(true);
  });
  it('Проверка на неверную дату', () => {
    expect(validateCardValidity('22/25')).toBe(false);
    expect(validateCardValidity('04/505')).toBe(false);
    expect(validateCardValidity('07/28')).toBe(true);
  });
  it('Проверка на количество символов работает корректно', () => {
    expect(validateCardValidity('12/2026')).toBe(false);
    expect(validateCardValidity('4/27')).toBe(false);
    expect(validateCardValidity('07/28')).toBe(true);
  });
});
