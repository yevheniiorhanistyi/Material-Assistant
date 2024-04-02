import Pristine from 'pristinejs';
import { MIN_PORTION_SIZE, LANG_PL } from '../../constants/constants.js';
import initPortionForm from './initPortionForm.js';
import { generatePortionResult } from './generatePortionResult.js';
import {
  getFromLocalStorage,
  saveToLocalStorage,
  findFormByUid,
} from '../../utils/index.js';

export const generatePortionForm = () => {
  initPortionForm();

  const index = JSON.parse(getFromLocalStorage('portionTabs')).find((tab) => tab.selected).uid;
  const formData = JSON.parse(getFromLocalStorage('portionFormData')) || [];
  const form = document.getElementById('portion-calculate-form');
  const pristine = new Pristine(form);
  const materialInput = document.getElementById('material-input');
  const rawMaterialInput = document.getElementById('raw-material-input');
  const formButtonClear = document.querySelector('.form-button-clear');

  pristine.addMessages('pl', LANG_PL);
  pristine.setLocale('pl');

  pristine.addValidator(rawMaterialInput, () => Number(materialInput.value) > 0, 'Wartość % musi być większa niż 0', 2, false);
  pristine.addValidator(rawMaterialInput, (value) => {
    const materialQuantityForMinPortion = (Number(materialInput.value) * MIN_PORTION_SIZE) / 100;
    return Number(value) > materialQuantityForMinPortion;
  }, 'Ilość materiału jest zbyt mała', 3, false);

  if (formData && index) {
    const currentForm = findFormByUid(formData, index);

    const fillFormWithData = (data) => {
      const fieldMap = {
        'material-input': data.percentage,
        'raw-material-input': data.totalRawMaterial,
        'mixer-size-select': data.mixerSize,
        'grammage-select': data.grammage,
      };

      Object.keys(fieldMap).forEach((fieldId) => {
        const fieldElement = document.querySelector(`#${fieldId}`);
        if (fieldElement) fieldElement.value = fieldMap[fieldId];
      });
    };

    if (currentForm) fillFormWithData(currentForm);
  }

  form.addEventListener('submit', (e) => {
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

      let existingIndex = -1;

      for (let i = 0; i < formData.length; i += 1) {
        if (formData[i].uid === index) {
          existingIndex = i;
          break;
        }
      }

      if (existingIndex !== -1) {
        formData[existingIndex] = newFormData;
      } else {
        formData.push(newFormData);
      }

      saveToLocalStorage('portionFormData', JSON.stringify(formData));
      generatePortionResult(index);
    }
  });

  function resetForm() {
    form.reset();
    const filteredData = formData.filter((item) => item.uid !== index);
    saveToLocalStorage('portionFormData', JSON.stringify(filteredData));
    generatePortionResult();
  }

  generatePortionResult(index);
  formButtonClear.addEventListener('click', resetForm);
};
