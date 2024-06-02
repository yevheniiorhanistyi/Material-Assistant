import { createElement } from '../../../utils/index.js';
import convertToPercent from './convertToPercent.js';

const initPortionForm = () => {
  const formsWrapperEl = document.querySelector('.forms-wrapper');
  const existingForm = formsWrapperEl.querySelector('.portion-calculate-form');

  if (existingForm) {
    const convertButton = existingForm.querySelector('.form-button-convert');
    convertButton.removeEventListener('click', convertToPercent);
    existingForm.remove();
  }

  const formEl = createElement('form', 'form portion-calculate-form');

  formEl.setAttribute('id', 'portion-calculate-form');
  formEl.setAttribute('method', 'post');
  formEl.setAttribute('novalidate', '');

  formEl.innerHTML = `
  <div class="form-group form-fields-group">
  <label class="form-fields-group-label" for="material-input">Materiał</label>
  <div class="form-fields-group__wrapper">
    <input required="" class="form-fields-input" min="0" max="100" type="number" id="material-input"
      placeholder="54.8">
    <div class="form-fields-input-group">
      <span class="form-fields-input-group__adornment">%</span>
      <button type="button" class="icon-button form-button-convert">
        <svg class="icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AutorenewIcon"
          tabindex="-1" title="Autorenew">
          <path
            d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6m6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26">
          </path>
        </svg>
      </button>
    </div>
    <div class="custom-popover convert">
      <label for="convert-to-percent" class="form-label">Przelicz kg na %</label>
      <input type="number" class="form-control" placeholder="135" id="convert-to-percent">
    </div>
  </div>
</div>
<div class="form-group form-fields-group">
  <label class="form-fields-group-label" for="raw-material-input">Ilość surowca</label>
  <div class="form-fields-group__wrapper">
    <input required="" class="form-fields-input" min="0" type="number" id="raw-material-input"
      placeholder="3400">
    <span class="form-fields-input-adornment">
      kg
    </span>
  </div>
</div>
<div class="select-group">
  <label class="form-fields-group-label" for="mixer-size-select">Podstawowa wielkość mieszałki</label>
  <select class="form-select" id="mixer-size-select">
    <option value="400">400kg</option>
    <option value="410">410kg</option>
    <option value="420">420kg</option>
    <option value="430" selected="">430kg</option>
    <option value="440">440kg</option>
    <option value="450">450kg</option>
  </select>
</div>
<div class="select-group">
  <label class="form-fields-group-label" for="grammage-select">Grammatura</label>
  <select class="form-select" id="grammage-select">
    <option value="0.4" selected="">400g</option>
    <option value="0.7">700g</option>
    <option value="0.8">800g</option>
    <option value="0.9">900g</option>
  </select>
</div>
<div class="form-button-wrapper">
  <button type="submit" class="form-button-calculate">Oblicz</button>
  <button type="button" class="icon-button form-button-clear">
    <svg class="icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon"
      tabindex="-1" title="Delete">
      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"></path>
    </svg>
  </button>
</div>`;

  formsWrapperEl.append(formEl);

  const convertButton = document.querySelector('.form-button-convert');
  convertButton.addEventListener('click', convertToPercent);
};

export default initPortionForm;
