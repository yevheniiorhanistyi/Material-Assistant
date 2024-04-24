import { createElement } from '../../utils/index.js';

const handleNotifications = () => {
  const rootEl = document.querySelector('#root');
  const notificationBtn = document.querySelector('.notifications-button');
  const notificationsEl = document.querySelector('.notifications');
  const overlayEl = createElement('div', 'notifications__overlay');

  const showNotifications = () => {
    notificationsEl.classList.add('show');
    rootEl.append(overlayEl);
  };

  const hideNotifications = () => {
    notificationsEl.classList.remove('show');
    overlayEl.remove();
  };

  notificationBtn.addEventListener('click', showNotifications);
  overlayEl.addEventListener('click', hideNotifications);
};

export default handleNotifications;
