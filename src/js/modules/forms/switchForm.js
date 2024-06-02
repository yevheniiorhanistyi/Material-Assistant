import { FORMS } from '../../constants/constants.js';
import { saveToLocalStorage, getFromLocalStorage } from '../../utils/index.js';
import currentCalcForm from './currentCalcForm.js';

const switchForm = (id) => {
  const currentForm = getFromLocalStorage('currentForm') || 'portionForm';
  if (FORMS[currentForm].id !== id) {
    switchSelectedItem(id);
    switchHeaderTitle(id);
    saveToLocalStorage('currentForm', id);
    removeTabs();
    removeForms();
    currentCalcForm();
  }

  function switchSelectedItem(selectedId) {
    const allListItem = document.querySelectorAll('.utils-list__item');
    allListItem.forEach((item) => {
      const itemId = item.getAttribute('id');
      item.classList.remove('selected');
      if (itemId === selectedId) item.classList.add('selected');
    });
  }

  function switchHeaderTitle(currentId) {
    const headerTitle = document.querySelector('.header__title');
    headerTitle.innerHTML = FORMS[currentId].title;
  }

  function removeTabs() {
    const tabs = document.querySelector('.tabs');
    tabs.remove();
  }

  function removeForms() {
    const formsWrapperEl = document.querySelector('.forms-wrapper');
    formsWrapperEl.innerHTML = '';
  }
};

export default switchForm;
