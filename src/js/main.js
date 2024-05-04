import initHeader from './modules/header/initHeader.js';
import initMain from './modules/main/initMain.js';
import initDrawer from './modules/drawer/initDrawer.js';
import initModal from './modules/modal/initModal.js';
import initSnackbarContainer from './modules/snackbar/initSnackbarContainer.js';
import initComments from './modules/comments/initComments.js';
import currentCalcForm from './modules/forms/currentCalcForm.js';

window.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMain();
  initModal();
  initDrawer();
  initSnackbarContainer();
  initComments();
  currentCalcForm();
});
