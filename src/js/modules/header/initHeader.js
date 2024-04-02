import { createElement } from '../../utils/index.js';

const initHeader = () => {
  const rootEl = document.querySelector('#root');
  const headerEl = createElement('header', 'header');

  headerEl.innerHTML = `
  <div class="container">
    <div class="header__menu">
      <h1 class="header__title">Kalkulator porcji pod stan pełnego BB</h1>
      <div class="button-wrapper">
        <button class="icon-button">
          <svg class="icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="NotificationsIcon"
            tabindex="-1" title="Notifications">
            <path
              d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1z">
            </path>
          </svg>
        </button>
      </div>
    </div>
  </div>
`;
  rootEl.append(headerEl);
};

export default initHeader;
