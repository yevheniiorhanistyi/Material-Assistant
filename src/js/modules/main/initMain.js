import { createElement } from '../../utils/index.js';

const initMain = () => {
  const rootEl = document.querySelector('#root');
  const mainEl = createElement('main', 'main');

  rootEl.append(mainEl);
};

export default initMain;
