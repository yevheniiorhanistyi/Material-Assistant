import { createElement } from '../../utils/index.js';

const initPortionForm = () => {
  const rootEl = document.querySelector('#root');
  const existingMain = rootEl.querySelector('.main');

  if (existingMain) { existingMain.remove(); }

  const mainEl = createElement('main', 'main');
  const formEl = createElement('form', 'form portion-calculate-form');

  formEl.setAttribute('id', 'portion-calculate-form');
  formEl.setAttribute('method', 'post');
  formEl.setAttribute('novalidate', '');

  formEl.innerHTML = `
  <div class="form-group form-fields-group">
  <label class="form-fields-group-label" for="material-input">Materiał</label>
  <div class="form-fields-group__wrapper">
    <input required class="form-fields-input" min="0" max="100" type="number" id="material-input" placeholder="54.8">
    <span class="form-fields-input-adornment">
      %
    </span>
  </div>
  </div>
<div class="form-group form-fields-group">
  <label class="form-fields-group-label" for="raw-material-input">Ilość surowca</label>
  <div class="form-fields-group__wrapper">
    <input required class="form-fields-input" min="0" type="number" id="raw-material-input" placeholder="3400">
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
    <option value="430" selected>430kg</option>
    <option value="440">440kg</option>
    <option value="450">450kg</option>
  </select>
</div>
<div class="select-group">
  <label class="form-fields-group-label" for="grammage-select">Grammatura</label>
  <select class="form-select" id="grammage-select">
    <option value="0.4" selected>400g</option>
    <option value="0.7">700g</option>
    <option value="0.8">800g</option>
    <option value="0.9">900g</option>
  </select>
</div>
<div class="form-button-wrapper">
  <button type="submit" class="form-button-calculate">Oblicz</button>
  <button type="button" class="icon-button form-button-clear">
  <svg class="icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon" tabindex="-1" title="Delete"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"></path></svg>
  </button>
</div>
  `;

  mainEl.append(formEl);
  rootEl.append(mainEl);
};

export default initPortionForm;
