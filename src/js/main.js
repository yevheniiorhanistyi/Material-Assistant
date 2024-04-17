import initHeader from './modules/header/initHeader.js';
import initPortionTabs from './modules/tabs/initPortionTabs.js';
import initModal from './modules/modal/initModal.js';
import initSnackbarContainer from './modules/snackbar/initSnackbarContainer.js';
import initCommentsSection from './modules/comments/initCommentsSection.js';
import handleTabLogic from './modules/tabs/tabs.js';
import generatePortionForm from './modules/portionForm/generatePortionForm.js';

window.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initPortionTabs();
  initModal();
  initCommentsSection();
  initSnackbarContainer();
  handleTabLogic('portionTabs', 'portionFormData', generatePortionForm);
  generatePortionForm();
});
