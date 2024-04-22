import { NOTIFICATIONS } from '../../constants/constants.js';
import { createElement } from '../../utils/index.js';

const initNotifications = () => {
  const rootEl = document.querySelector('#root');
  const notificationsEl = createElement('div', 'notifications');

  NOTIFICATIONS.forEach((text) => {
    const notificationText = createElement('p', 'notifications__text');
    notificationText.innerHTML = text;
    notificationsEl.append(notificationText);
  });

  rootEl.append(notificationsEl);
};

export default initNotifications;
