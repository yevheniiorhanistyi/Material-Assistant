import handleTabLogic from './modules/tabs/tabs.js';
import initHeader from './modules/header/initHeader.js';
import initPortionTabs from './modules/tabs/initPortionTabs.js';
import generatePortionForm from './modules/portionForm/generatePortionForm.js';

window.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initPortionTabs();
  handleTabLogic('portionTabs', 'portionFormData', generatePortionForm);
  generatePortionForm();
});
