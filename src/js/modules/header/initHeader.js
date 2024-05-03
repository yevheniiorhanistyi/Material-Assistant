import { createElement } from '../../utils/index.js';

const initHeader = () => {
  const rootEl = document.querySelector('#root');
  const headerEl = createElement('header', 'header');

  headerEl.innerHTML = `
  <div class="container">
    <div class="header__menu">
      <h1 class="header__title">Kalkulator porcji pod stan surowca</h1>
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
