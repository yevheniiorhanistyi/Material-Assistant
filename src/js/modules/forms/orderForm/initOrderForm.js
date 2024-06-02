import { createElement } from '../../../utils/index.js';
import onFileInputChange from './onFileInputChange.js';
import calcByBgBagCount from './calcByBigBagCount.js';

const initOrderForm = () => {
  const formsWrapperEl = document.querySelector('.forms-wrapper');
  const existingForm = formsWrapperEl.querySelector('.order-calculate-form');

  if (existingForm) {
    const fileInput = existingForm.querySelector('.input-file input[type=file]');
    const materialQuantityRow = existingForm.querySelector('#material-quantity-row');
    materialQuantityRow.removeEventListener('click', calcByBgBagCount);
    fileInput.removeEventListener('change', onFileInputChange);
    existingForm.remove();
  }

  const formEl = createElement('form', 'form order-calculate-form');
  formEl.setAttribute('novalidate', '');

  formEl.innerHTML = `<div class="container">
  <div class="row justify-content-lg-center flex-column-reverse flex-xl-row">
  <div class="col-12 col-xl-8">
    <div class="table-wrapper">
        <table class="table table-borderless text-center order-table">
          <thead>
            <tr class="border-bottom">
              <th class="text-start" scope="col">Kod RTPJ</th>
              <td scope="col" colspan="3">
                <input class="form-control RTPJ" type="number" id="RTPJ" placeholder="172972">
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" colspan="4">&nbsp;</th>
            </tr>
            <tr class="border-bottom">
              <th class="text-start" scope="col">Materiał</th>
              <td scope="col">
                <input class="form-control material-description" type="text" placeholder="MLE BASE LFD">
              </td>
              <td scope="col">
                <input class="form-control material-description" type="text" placeholder="MB IF 017">
              </td>
              <td scope="col">
                <input class="form-control material-description" type="text" placeholder="MLE BASE IF">
              </td>
            </tr>
            <tr class="border-bottom">
              <th class="text-start" scope="row">Indeks materiału</th>
              <td>
                <input class="form-control material-index" type="text" placeholder="10332596">
              </td>
              <td>
                <input class="form-control material-index" type="text" placeholder="10343216">
              </td>
              <td>
                <input class="form-control material-index" type="text" placeholder="10379607">
              </td>
            </tr>
            <tr class="border-bottom">
              <th class="text-start" scope="row">Receptura (%):</th>
              <td>
                <input class="form-control material-percentage" type="number" placeholder="10">
              </td>
              <td>
                <input class="form-control material-percentage" type="number" placeholder="34">
              </td>
              <td>
                <input class="form-control material-percentage" type="number" placeholder="56">
              </td>
            </tr>
            <tr class="border-bottom" id="material-quantity-row">
              <th class="text-start" scope="row">Aktualna ilość (kg):</th>
              <td>
                <div class="form-group form-fields-group">
                  <input type="number" class="form-control material-quantity" placeholder="2478"
                    id="material-quantity-1">
                  <button class="icon-button bigbag-info-button" type="button" data-current="1">
                  <svg class="icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ExpandMoreIcon" tabindex="-1" title="ExpandMore"><path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
                  </button>
                  <ul class="custom-popover bigbag-info" id="bigbag-info-1">
                    <li class="bigbag-info__item">
                      <label for="average-weight-bb-1" class="form-label mb-0">Średnia waga BB</label>
                      <input type="number" class="form-control px-0" id="average-weight-bb-1" placeholder="0">
                    </li>
                    <li class="bigbag-info__item">
                      <label for="bb-count-1" class="form-label mb-0">Ilość BB</label>
                      <input type="number" class="form-control px-0" id="bb-count-1" placeholder="0">
                    </li>
                    <li class="bigbag-info__item">
                      <label for="additional-quantity-1" class="form-label mb-0">Dodatkowa ilość</label>
                      <input type="number" class="form-control px-0" id="additional-quantity-1" placeholder="0">
                    </li>
                  </ul>
                </div>
              </td>
              <td>
                <div class="form-group form-fields-group">
                  <input type="number" class="form-control material-quantity" placeholder="900"
                  id="material-quantity-2">
                  <button class="icon-button bigbag-info-button" type="button" data-current="2">
                  <svg class="icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ExpandMoreIcon" tabindex="-1" title="ExpandMore"><path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
                  </button>
                  <ul class="custom-popover bigbag-info" id="bigbag-info-2">
                    <li class="bigbag-info__item">
                      <label for="average-weight-bb-2" class="form-label mb-0">Średnia waga BB</label>
                      <input type="number" class="form-control px-0" id="average-weight-bb-2" placeholder="0">
                    </li>
                    <li class="bigbag-info__item">
                      <label for="bb-count-2" class="form-label mb-0">Ilość BB</label>
                      <input type="number" class="form-control px-0" id="bb-count-2" placeholder="0">
                    </li>
                    <li class="bigbag-info__item">
                      <label for="additional-quantity-2" class="form-label mb-0">Dodatkowa ilość</label>
                      <input type="number" class="form-control px-0" id="additional-quantity-2" placeholder="0">
                    </li>
                  </ul>
                </div>
              </td>
              <td>
                <div class="form-group form-fields-group">
                  <input type="number" class="form-control material-quantity" placeholder="1200"
                  id="material-quantity-3">
                  <button class="icon-button bigbag-info-button" type="button" data-current="3">
                  <svg class="icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ExpandMoreIcon" tabindex="-1" title="ExpandMore"><path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
                  </button>
                  <ul class="custom-popover bigbag-info" id="bigbag-info-3">
                    <li class="bigbag-info__item">
                      <label for="average-weight-bb-3" class="form-label mb-0">Średnia waga BB</label>
                      <input type="number" class="form-control px-0" id="average-weight-bb-3" placeholder="0">
                    </li>
                    <li class="bigbag-info__item">
                      <label for="bb-count-3" class="form-label mb-0">Ilość BB</label>
                      <input type="number" class="form-control px-0" id="bb-count-3" placeholder="0">
                    </li>
                    <li class="bigbag-info__item">
                      <label for="additional-quantity-3" class="form-label mb-0">Dodatkowa ilość</label>
                      <input type="number" class="form-control px-0" id="additional-quantity-3" placeholder="0">
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row" colspan="4">&nbsp;</th>
            </tr>
            <tr class="border-bottom">
              <th class="text-start" scope="row">Ilość do zamówienia (kg):</th>
              <td>
                <input class="form-control required-quantity" type="number" value="0" readonly="">
              </td>
              <td>
                <input class="form-control required-quantity" type="number" value="0" readonly="">
              </td>
              <td>
                <input class="form-control required-quantity" type="number" value="0" readonly="">
              </td>

            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="col-12 col-xl-4">
      <table class="table table-borderless text-center">
        <thead>
          <tr>
            <td scope="col" colspan="2">
              <label class="input-file">
                <input type="file" name="file" accept=".xml" id="fileInput">
                <span>Wybierz plik XML</span>
              </label>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" colspan="2">&nbsp;</th>
          </tr>
          <tr class="border-bottom">
            <th class="text-start" scope="col">Aktualna mieszałka</th>
            <td scope="col">
              <input class="form-control" type="number" placeholder="0" id="current-mixer">
            </td>
          </tr>
          <tr class="border-bottom">
            <th class="text-start" scope="row">Ilość produkcji (szt)</th>
            <td>
              <input class="form-control" type="number" placeholder="12354" id="production-quantity">
            </td>
          </tr>
          <tr class="border-bottom">
            <th class="text-start" scope="row">Wielkość mieszałki</th>
            <td>
              <select class="form-select text-center" id="mixer-size-select">
                <option value="400">400kg</option>
                <option value="410">410kg</option>
                <option value="420">420kg</option>
                <option value="430" selected="">430kg</option>
                <option value="440">440kg</option>
                <option value="450">450kg</option>
              </select>
            </td>
          </tr>
          <tr class="border-bottom">
            <th class="text-start" scope="row">Grammatura</th>
            <td>
              <select class="form-select text-center" id="grammage-select">
                <option value="0.4" selected="">400g</option>
                <option value="0.7">700g</option>
                <option value="0.8">800g</option>
                <option value="0.9">900g</option>
              </select>
            </td>
          </tr>
          <tr>
            <th scope="row" colspan="2">&nbsp;</th>
          </tr>
          <tr>
            <td scope="col">
              <button type="submit" class="form-button-calculate w-100 m-0">Oblicz</button>
            </td>
            <td scope="col">
              <button type="button" class="icon-button form-button-clear">
                <svg class="icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                  data-testid="DeleteIcon" tabindex="-1" title="Delete">
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"></path>
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>`;

  formsWrapperEl.append(formEl);

  const fileInput = document.querySelector('.input-file input[type=file]');
  fileInput.addEventListener('change', () => onFileInputChange(fileInput));

  const materialQuantityRow = formsWrapperEl.querySelector('#material-quantity-row');
  materialQuantityRow.addEventListener('click', calcByBgBagCount);
};

export default initOrderForm;
