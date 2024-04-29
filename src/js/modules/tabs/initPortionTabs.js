import { createElement } from '../../utils/index.js';

const initPortionTabs = () => {
  const headerEl = document.querySelector('.header');
  const tabsEl = createElement('div', 'tabs');

  tabsEl.innerHTML = `
  <ul class="tabs-list"></ul>
  <div class="button-wrapper">
    <button class="icon-button create-tab">
      <svg class="icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AddCircleIcon"
        tabindex="-1" title="AddCircle">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m5 11h-4v4h-2v-4H7v-2h4V7h2v4h4z">
        </path>
      </svg>
    </button>
    <button class="icon-button reload-tabs">
      <svg class="icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="RefreshIcon">
        <path
          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z">
        </path>
      </svg>
    </button>
  </div>
`;
  headerEl.append(tabsEl);
};

export default initPortionTabs;
