import { getFromLocalStorage } from '../../utils/index.js';
import handleTabLogic from '../tabs/tabs.js';
import generatePortionForm from './portionForm/generatePortionForm.js';
import generateOrderForm from './orderForm/generateOrderForm.js';

const currentCalcForm = () => {
  const currentForm = getFromLocalStorage('currentForm') || 'portionForm';
  if (currentForm === 'portionForm') {
    handleTabLogic('portionTabs', 'portionFormData', generatePortionForm);
    generatePortionForm();
  } else {
    handleTabLogic('orderTabs', 'orderFormData', generateOrderForm);
    generateOrderForm();
  }
};

export default currentCalcForm;
