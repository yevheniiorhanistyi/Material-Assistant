import { createElement, getFromLocalStorage } from '../../utils/index.js';
import { FORMS } from '../../constants/constants.js';

const initHeader = () => {
  const rootEl = document.querySelector('#root');
  const headerEl = createElement('header', 'header');
  const currentForm = getFromLocalStorage('currentForm') || 'portionForm';

  headerEl.innerHTML = `
  <div class="container-fluid">
    <div class="header__menu">
      <h1 class="header__title">${FORMS[currentForm].title}</h1>
      <div class="button-wrapper">
        <button class="icon-button burger-button">
        <svg class="icon"
        focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MenuIcon" tabindex="-1" title="Menu">
        <path d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"></path>
        </svg>
        </button>
      </div>
    </div>
  </div>
`;
  rootEl.append(headerEl);
};

export default initHeader;
