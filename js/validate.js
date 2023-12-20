export const validateCardHolder = (str) => {
  const test = str.toString();
  const regExp = /^[a-zA-Z]+\s{1,1}[a-zA-Z]+$/gi;

  if (!regExp.test(test)) {
    return false;
  }

  return true;
};

// Проверяет на валидность номера карты
export const validateCardNumber = (str) => {
  const test = str.toString();
  const result = test.replace(/\s+/g, '');
  const regExp = /^[\d]+$/g;

  if (!regExp.test(result) || result.length !== 16) {
    return false;
  }

  return true;
};
// Проверяет на валидность cvv
export const validateCardCvv = (str) => {
  const test = str.toString();
  const regExp = /^[\d]+$/gi;

  if (!regExp.test(test) || test.length !== 3) {
    return false;
  }

  return true;
};
// Проверяет на валиднсть даты
export const validateCardValidity = (str) => {
  const test = str.toString();
  const regExp = /^(0[1-9]|1[0-2])\/2([3-9])$/g;

  if (!regExp.test(test) || test.length !== 5) {
    return false;
  }

  return true;
};
