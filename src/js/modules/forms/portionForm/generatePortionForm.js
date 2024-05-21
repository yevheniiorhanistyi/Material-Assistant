import Pristine from 'pristinejs';
import {
  MIN_PORTION_SIZE,
  LANG_PL,
  CONFIRM_TITLE,
  CONFIRM_TEXT,
  SNACKBAR_VARIANTS,
  FIELD_MAP,
} from '../../../constants/constants.js';
import initPortionForm from './initPortionForm.js';
import { generatePortionResult } from './generatePortionResult.js';
import handleModalLogic from '../../modal/handleModalLogic.js';
import showSnackbar from '../../snackbar/showSnackbar.js';
import {
  getFromLocalStorage,
  saveToLocalStorage,
  findFormByUid,
  fillFormWithData,
  isDataChanged,
} from '../../../utils/index.js';

const generatePortionForm = () => {
  initPortionForm();

  const index = JSON.parse(getFromLocalStorage('portionTabs')).find((tab) => tab.selected).uid;
  const formData = JSON.parse(getFromLocalStorage('portionFormData')) || [];
  const form = document.getElementById('portion-calculate-form');
  const pristine = new Pristine(form);
  const materialInput = document.getElementById('material-input');
  const rawMaterialInput = document.getElementById('raw-material-input');
  const formButtonClear = document.querySelector('.form-button-clear');
  const { handleOpen } = handleModalLogic();

  pristine.addMessages('pl', LANG_PL);
  pristine.setLocale('pl');

  pristine.addValidator(rawMaterialInput, () => Number(materialInput.value) > 0, 'Wartość % musi być większa niż 0', 2, false);
  pristine.addValidator(rawMaterialInput, (value) => {
    const materialQuantityForMinPortion = (Number(materialInput.value) * MIN_PORTION_SIZE) / 100;
    return Number(value) > materialQuantityForMinPortion;
  }, 'Ilość materiału jest zbyt mała', 3, false);

  if (formData && index) {
    const currentForm = findFormByUid(formData, index);

    if (currentForm) fillFormWithData(currentForm, FIELD_MAP.portionForm);
  }

  const onSubmitForm = (e) => {
    e.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      const newFormData = {
        uid: index,
        percentage: Number(materialInput.value),
        totalRawMaterial: Number(rawMaterialInput.value),
        mixerSize: Number(document.getElementById('mixer-size-select').value),
        grammage: Number(document.getElementById('grammage-select').value),
      };

      const { isChanged, existingIndex } = isDataChanged(formData, newFormData, index);

      if (isChanged) return;

      if (existingIndex !== -1) {
        formData[existingIndex] = newFormData;
      } else {
        formData.push(newFormData);
      }

      saveToLocalStorage('portionFormData', JSON.stringify(formData));
      generatePortionResult(index);
    }
  };

  const resetForm = () => {
    form.reset();
    const filteredData = formData.filter((item) => item.uid !== index);
    saveToLocalStorage('portionFormData', JSON.stringify(filteredData));
    generatePortionResult(index);
    showSnackbar('Formularz pomyślnie wyczyszczony!', SNACKBAR_VARIANTS.success);
  };

  const handleFormButtonClear = () => {
    handleOpen(CONFIRM_TITLE, CONFIRM_TEXT, resetForm);
  };

  generatePortionResult(index);

  form.addEventListener('submit', onSubmitForm);
  formButtonClear.addEventListener('click', handleFormButtonClear);
};

export default generatePortionForm;
