import { createElement } from '../../../utils/index.js';
import onFileInputChange from './onFileInputChange.js';

const initOrderForm = () => {
  const formsWrapperEl = document.querySelector('.forms-wrapper');

  const existingForm = formsWrapperEl.querySelector('.order-calculate-form');

  if (existingForm) {
    const fileInput = existingForm.querySelector('.input-file input[type=file]');
    fileInput.removeEventListener('change', onFileInputChange);
    existingForm.remove();
  }

  const formEl = createElement('form', 'form order-calculate-form');
  formEl.setAttribute('novalidate', '');

  formEl.innerHTML = `
  <div class="container">
    <div class="row justify-content-lg-center flex-column-reverse flex-xl-row">
      <div class="col-12 col-xl-8">
        <div class="table-responsive">
          <table class="table table-borderless text-center">
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
                  <input class="form-control material-description" type="text" placeholder="MLE BASE LFD LCP">
                </td>
                <td scope="col">
                  <input class="form-control material-description" type="text" placeholder="MB IF 0178851">
                </td>
                <td scope="col">
                  <input class="form-control material-description" type="text" placeholder="MLE BASE IF LCP">
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
              <tr class="border-bottom">
                <th class="text-start" scope="row">Aktualna ilość (kg):</th>
                <td>
                  <input class="form-control material-quantity" type="number" placeholder="2400">
                </td>
                <td>
                  <input class="form-control material-quantity" type="number" placeholder="1200">
                </td>
                </td>
                <td>
                  <input class="form-control material-quantity" type="number" placeholder="900">
                </td>
              </tr>
              <tr>
                <th scope="row" colspan="4">&nbsp;</th>
              </tr>
              <tr class="border-bottom">
                <th class="text-start" scope="row">Ilość do zamówienia (kg):</th>
                <td>
                  <input class="form-control required-quantity" type="number" value="0" readonly>
                </td>
                <td>
                  <input class="form-control required-quantity" type="number" value="0" readonly>
                </td>
                <td>
                  <input class="form-control required-quantity" type="number" value="0" readonly>
                </td>
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
                  <option value="430" selected>430kg</option>
                  <option value="440">440kg</option>
                  <option value="450">450kg</option>
                </select>
              </td>
            </tr>
            <tr class="border-bottom">
              <th class="text-start" scope="row">Grammatura</th>
              <td>
                <select class="form-select text-center" id="grammage-select">
                  <option value="0.4" selected>400g</option>
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
};

export default initOrderForm;
