import { NOTIFICATIONS } from '../../constants/constants.js';
import { createElement } from '../../utils/index.js';

const initNotifications = () => {
  const headerEl = document.querySelector('.header');
  const notificationsEl = createElement('div', 'notifications');

  NOTIFICATIONS.forEach((text) => {
    const notificationText = createElement('p', 'notifications__text');
    notificationText.innerHTML = text;
    notificationsEl.append(notificationText);
  });

  headerEl.append(notificationsEl);
};

export default initNotifications;
