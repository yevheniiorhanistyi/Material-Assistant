import { createElement } from '../../utils/index.js';

const initMain = () => {
  const rootEl = document.querySelector('#root');
  const mainEl = createElement('main', 'main');
  const formsWrapperEl = createElement('div', 'forms-wrapper');

  mainEl.append(formsWrapperEl);
  rootEl.append(mainEl);
};

export default initMain;
