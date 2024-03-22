import { v4 as uuidv4 } from 'uuid';
import { MAX_PORTION_TABS, INITIAL_TABS } from '../constants/constants.js';
import {
  createElement,
  getFromLocalStorage,
  saveToLocalStorage,
  removeFromLocalStorage,
} from '../utils/index.js';

export function initializeTabs(localStorageKey, callback) {
  const tabsList = document.querySelector('.tabs-list');
  const createTabButton = document.querySelector('.create-tab');
  const reloadAllTabsButton = document.querySelector('.reload-tabs');
  let tabsData = JSON.parse(getFromLocalStorage(localStorageKey)) || [...INITIAL_TABS];

  function handleTabClick(tab) {
    const tabs = document.querySelectorAll('.tab-button');
    const index = tab.getAttribute('data-tab');

    tabs.forEach((item) => item.classList.remove('selected'));
    tab.classList.add('selected');

    const updatedTabsData = tabsData.map((item) => ({
      ...item,
      selected: item.uid === index,
    }));
    saveToLocalStorage(localStorageKey, JSON.stringify(updatedTabsData));
    callback(index);
  }

  function setInputWidth(input) {
    const focusedInput = input;
    const span = document.createElement('span');
    span.style.visibility = 'hidden';
    span.style.position = 'absolute';
    span.style.whiteSpace = 'nowrap';
    span.textContent = input.value;

    document.body.append(span);
    const width = span.offsetWidth;
    document.body.removeChild(span);
    focusedInput.style.width = `${width}px`;
  }

  function handleContextMenu(e, tab) {
    e.preventDefault();
    const currentTab = tab;
    handleTabClick(tab);

    const menu = document.createElement('div');
    menu.classList.add('custom-menu');
    menu.innerHTML = `
  <ul class="custom-menu__list">
    <li class="custom-menu__item delete">Usuń</li>
    <li class="custom-menu__item rename">Zmień nazwę</li>
  </ul>
  `;

    menu.style.top = `${e.clientY}px`;
    menu.style.left = `${e.clientX}px`;

    const overlay = document.createElement('div');
    overlay.classList.add('custom-menu__overlay');

    overlay.addEventListener('click', function closeMenu() {
      menu.remove();
      overlay.remove();
      overlay.removeEventListener('click', closeMenu);
    });

    menu.querySelector('.delete').addEventListener('click', () => {
      const listItem = tab.closest('.tabs-list__item');
      if (listItem && tabsData.length > 1) {
        const index = listItem.querySelector('.tab-button').getAttribute('data-tab');
        tabsData = tabsData.filter((item) => item.uid !== index);
        listItem.remove();
        const tabs = document.querySelectorAll('.tab-button');
        const firstTab = tabs[0];
        saveToLocalStorage(localStorageKey, JSON.stringify(tabsData));
        handleTabClick(firstTab);
      }
      menu.remove();
      overlay.remove();
    });

    menu.querySelector('.rename').addEventListener('click', () => {
      menu.remove();
      const tabText = tab.textContent;
      const inputField = document.createElement('input');
      inputField.type = 'text';
      inputField.setAttribute('maxlength', 30);
      inputField.classList.add('tab-input');
      inputField.value = tabText;

      currentTab.innerHTML = '';
      tab.appendChild(inputField);

      inputField.select();
      inputField.focus();
      setInputWidth(inputField);

      inputField.addEventListener('input', () => {
        setInputWidth(inputField);
      });

      inputField.addEventListener('blur', () => {
        const newName = inputField.value.trim();
        if (newName !== '') {
          currentTab.textContent = newName;
          const index = currentTab.getAttribute('data-tab');
          tabsData = tabsData.map((item) => {
            if (item.uid === index) {
              return { ...item, tabText: newName };
            }
            return item;
          });
          saveToLocalStorage(localStorageKey, JSON.stringify(tabsData));
          handleTabClick(tab);
        } else {
          currentTab.textContent = tabText;
        }
      });

      inputField.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          inputField.blur();
          overlay.remove();
        }
      });
    });

    document.body.append(menu, overlay);
  }

  function createNewTab() {
    if (tabsData.length >= MAX_PORTION_TABS) return null;

    const newTabData = {
      uid: uuidv4(),
      tabText: `Arkusz ${tabsData.length + 1}`,
      selected: false,
    };

    tabsData.push(newTabData);
    saveToLocalStorage(localStorageKey, JSON.stringify(tabsData));
    return newTabData;
  }

  function addTabToDOM(tabData) {
    const newTab = createElement('li', 'tabs-list__item');
    const newTabButton = createElement('button', 'tab-button');

    newTabButton.textContent = tabData.tabText;
    newTabButton.setAttribute('data-tab', tabData.uid);

    if (tabData.selected) newTabButton.classList.add('selected');

    newTab.append(newTabButton);
    tabsList.append(newTab);

    newTabButton.addEventListener('click', () => {
      handleTabClick(newTabButton, tabData.uid);
    });
    newTabButton.addEventListener('contextmenu', (e) => {
      handleContextMenu(e, newTabButton);
    });
  }

  tabsData.forEach((tabData) => {
    addTabToDOM(tabData);
  });

  createTabButton.addEventListener('click', () => {
    const newTabData = createNewTab(tabsData);
    if (newTabData) addTabToDOM(newTabData);
  });

  reloadAllTabsButton.addEventListener('click', () => {
    removeFromLocalStorage(localStorageKey);
    tabsData = [...INITIAL_TABS];
    tabsList.innerHTML = '';
    tabsData.forEach((tabData) => {
      addTabToDOM(tabData);
    });
    saveToLocalStorage(localStorageKey, JSON.stringify(tabsData));
  });
}
