import { createElement } from '../../utils/index.js';

const initSnackbarContainer = () => {
  const mainEl = document.querySelector('.main');
  const snackbarContainerEl = createElement('div', 'snackbar-container');
  mainEl.append(snackbarContainerEl);
};

export default initSnackbarContainer;
