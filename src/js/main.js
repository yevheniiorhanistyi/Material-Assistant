import initHeader from './modules/header/initHeader.js';
import initMain from './modules/main/initMain.js';
import initDrawer from './modules/drawer/initDrawer.js';
import initPortionTabs from './modules/tabs/initPortionTabs.js';
import initModal from './modules/modal/initModal.js';
import initSnackbarContainer from './modules/snackbar/initSnackbarContainer.js';
import initComments from './modules/comments/initComments.js';
import handleTabLogic from './modules/tabs/tabs.js';
import generatePortionForm from './modules/portionForm/generatePortionForm.js';
import handleDrawer from './modules/drawer/handleDrawer.js';

window.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initPortionTabs();
  initMain();
  initDrawer();
  initModal();
  initSnackbarContainer();
  initComments();
  handleTabLogic('portionTabs', 'portionFormData', generatePortionForm);
  handleDrawer();
  generatePortionForm();
});
