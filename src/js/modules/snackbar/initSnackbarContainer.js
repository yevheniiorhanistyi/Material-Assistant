import { createElement } from '../../utils/index.js';

const initSnackbarContainer = () => {
  const rootEl = document.querySelector('#root');
  const snackbarContainerEl = createElement('div', 'snackbar-container');
  rootEl.append(snackbarContainerEl);
};

export default initSnackbarContainer;
