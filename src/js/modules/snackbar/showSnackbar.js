import { createElement } from '../../utils/index.js';

const showSnackbar = (message, current, timeout = 3000) => {
  const variantClasses = {
    success: 'snackbar--success',
    error: 'snackbar--error',
  };
  const variantIcons = {
    success: `
    <svg class="snackbar__icon" viewBox="0 0 24 24" focusable="false">
      <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41
        10.59L10 14.17L17.59 6.58L19 8L10 17Z">
      </path>
  </svg>
    `,
    error: `
    <svg class="snackbar__icon" viewBox="0 0 24 24" focusable="false">
    <path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,
        6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,
        13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z">
    </path>
  </svg>
    `,
  };
  const snackbarContainerEl = document.querySelector('.snackbar-container');
  const snackbar = createElement('div', `snackbar ${variantClasses[current]}`);

  snackbar.setAttribute('role', 'alert');

  snackbar.innerHTML = `
  ${variantIcons[current]}
  ${message}`;

  snackbarContainerEl.append(snackbar);

  setTimeout(() => {
    snackbar.remove();
  }, timeout);
};

export default showSnackbar;
