import { createElement } from '../../utils/index.js';
import { CURRENT_VERSION, UTILS_NAVIGATION, UTILS_CONFIG } from '../../constants/constants.js';

const initDrawer = () => {
  const mainEl = document.querySelector('.main');
  const drawerEl = createElement('div', 'drawer');
  const versionEl = createElement('div', 'version');
  const utilsNavigationEl = createElement('div', 'utils');
  const utilsNavigationTitleEl = createElement('h4', 'utils__title');
  const utilsNavigationListEl = createElement('ul', 'utils-list');
  const utilsConfigEl = createElement('div', 'utils');
  const utilsConfigTitleEl = createElement('h4', 'utils__title');
  const utilsConfigListEl = createElement('ul', 'utils-list');

  versionEl.innerHTML = `${CURRENT_VERSION.icon}
  <p class="version__text">${CURRENT_VERSION.text}</p>`;

  utilsNavigationTitleEl.innerHTML = 'Kalkulator';
  utilsConfigTitleEl.innerHTML = 'Konfiguracja';

  UTILS_NAVIGATION.forEach((item) => {
    const listItemEl = createElement('li', 'utils-list__item');
    listItemEl.setAttribute('id', item.id);
    listItemEl.innerHTML = item.icon;

    const itemText = createElement('p', 'utils-list__text');
    itemText.innerHTML = item.text;

    listItemEl.append(itemText);
    utilsNavigationListEl.append(listItemEl);
  });

  UTILS_CONFIG.forEach((item) => {
    const listItemEl = createElement('li', 'utils-list__item');
    listItemEl.setAttribute('id', item.id);
    listItemEl.innerHTML = item.icon;

    const itemText = createElement('p', 'utils-list__text');
    itemText.innerHTML = item.text;

    listItemEl.append(itemText);
    utilsConfigListEl.append(listItemEl);
  });

  utilsNavigationEl.append(utilsNavigationTitleEl, utilsNavigationListEl);
  utilsConfigEl.append(utilsConfigTitleEl, utilsConfigListEl);
  drawerEl.append(versionEl, utilsNavigationEl, utilsConfigEl);
  mainEl.append(drawerEl);
};

export default initDrawer;
