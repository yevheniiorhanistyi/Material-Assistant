import initHeader from './modules/header/initHeader.js';
import initMain from './modules/main/initMain.js';
import initPortionTabs from './modules/tabs/initPortionTabs.js';
import initNotifications from './modules/notifications/initNotifications.js';
import initModal from './modules/modal/initModal.js';
import initSnackbarContainer from './modules/snackbar/initSnackbarContainer.js';
import initComments from './modules/comments/initComments.js';
import handleTabLogic from './modules/tabs/tabs.js';
import handleNotifications from './modules/notifications/handleNotifications.js';
import generatePortionForm from './modules/portionForm/generatePortionForm.js';

window.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initPortionTabs();
  initMain();
  initNotifications();
  initModal();
  initSnackbarContainer();
  initComments();
  handleNotifications();
  handleTabLogic('portionTabs', 'portionFormData', generatePortionForm);
  generatePortionForm();
});
