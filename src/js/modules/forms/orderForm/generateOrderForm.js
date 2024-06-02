import initOrderForm from './initOrderForm.js';
import showSnackbar from '../../snackbar/showSnackbar.js';
import handleModalLogic from '../../modal/handleModalLogic.js';
import {
  FIELD_MAP,
  SNACKBAR_VARIANTS,
  CONFIRM_TITLE,
  CONFIRM_TEXT,
} from '../../../constants/constants.js';
import {
  getFromLocalStorage,
  saveToLocalStorage,
  findFormByUid,
  fillFormWithData,
  isDataChanged,
} from '../../../utils/index.js';

const generateOrderForm = () => {
  initOrderForm();
  const { handleOpen } = handleModalLogic();
  const form = document.querySelector('.order-calculate-form');
  const index = JSON.parse(getFromLocalStorage('orderTabs')).find((tab) => tab.selected).uid;
  const formData = JSON.parse(getFromLocalStorage('orderFormData')) || [];
  const formButtonClear = document.querySelector('.form-button-clear');

  if (formData && index) {
    const currentForm = findFormByUid(formData, index);
    if (currentForm) fillFormWithData(currentForm, FIELD_MAP.orderForm);
  }
  const onSubmitForm = (e) => {
    e.preventDefault();

    let newFormData = {
      uid: index,
      RTPJ: '',
      materialDescription: [],
      materialIndex: [],
      materialPercentage: [],
      materialQuantity: [],
      requiredQuantity: [],
      currentMixer: 0,
      productionQuantity: 0,
      mixerSize: 430,
      grammage: 0.4,
    };

    const RTPJ = form.querySelector('#RTPJ').value || '';
    const materialDescription = form.querySelectorAll('.material-description');
    const materialIndex = form.querySelectorAll('.material-index');
    const currentMixer = Number(form.querySelector('#current-mixer').value) || 0;
    const productionQuantity = Number(form.querySelector('#production-quantity').value) || 0;
    const mixerSize = Number(form.querySelector('#mixer-size-select').value);
    const grammage = Number(form.querySelector('#grammage-select').value);

    const materialPercentages = form.querySelectorAll('.material-percentage');
    const materialQuantities = form.querySelectorAll('.material-quantity');
    const requiredQuantities = form.querySelectorAll('.required-quantity');

    const cansPerDefaultPortions = mixerSize / grammage;
    const mixerQuantity = (productionQuantity / cansPerDefaultPortions) - currentMixer;

    materialPercentages.forEach((item, itemIndex) => {
      const materialPercentage = Number(item.value);
      const materialQuantity = Number(materialQuantities[itemIndex].value);
      const materialPerMixerSize = (materialPercentage * mixerSize) / 100;

      const requiredQuantity = (materialPerMixerSize * mixerQuantity - materialQuantity).toFixed(2);

      requiredQuantities[itemIndex].value = requiredQuantity;

      newFormData.materialDescription[itemIndex] = materialDescription[itemIndex].value;
      newFormData.materialIndex[itemIndex] = materialIndex[itemIndex].value;
      newFormData.materialPercentage[itemIndex] = materialPercentage;
      newFormData.materialQuantity[itemIndex] = materialQuantity;
      newFormData.requiredQuantity[itemIndex] = requiredQuantity;
    });
    newFormData = {
      ...newFormData,
      RTPJ,
      currentMixer,
      productionQuantity,
      mixerSize,
      grammage,
    };

    const { isChanged, existingIndex } = isDataChanged(formData, newFormData, index);

    if (isChanged) return;

    if (existingIndex !== -1) {
      formData[existingIndex] = newFormData;
    } else {
      formData.push(newFormData);
    }

    saveToLocalStorage('orderFormData', JSON.stringify(formData));
  };

  const resetForm = () => {
    form.reset();
    const filteredData = formData.filter((item) => item.uid !== index);
    saveToLocalStorage('orderFormData', JSON.stringify(filteredData));
    showSnackbar('Formularz pomyślnie wyczyszczony!', SNACKBAR_VARIANTS.success);
  };

  const handleFormButtonClear = () => {
    handleOpen(CONFIRM_TITLE, CONFIRM_TEXT, resetForm);
  };

  form.addEventListener('submit', onSubmitForm);
  formButtonClear.addEventListener('click', handleFormButtonClear);
};

export default generateOrderForm;
