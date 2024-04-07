import initHeader from './modules/header/initHeader.js';
import initPortionTabs from './modules/tabs/initPortionTabs.js';
import initModal from './modules/modal/initModal.js';
import handleTabLogic from './modules/tabs/tabs.js';
import generatePortionForm from './modules/portionForm/generatePortionForm.js';

window.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initPortionTabs();
  initModal();
  handleTabLogic('portionTabs', 'portionFormData', generatePortionForm);
  generatePortionForm();
});
