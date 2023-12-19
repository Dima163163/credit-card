import {el, mount, unmount} from '../node_modules/redom/dist/redom.es.js';

export const createWarningTitle = (elem) => {
  const warningTitle = el('h2',
      {className: 'js-validate-error-label'}, 'Данные не валидны');
  mount(elem.parentElement, warningTitle);

  setTimeout(() => {
    unmount(elem.parentElement, warningTitle);
  }, 2000);
};
