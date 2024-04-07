import { createElement } from '../../utils/index.js';

const initModal = () => {
  const rootEl = document.querySelector('#root');
  const backdropEl = createElement('div', 'backdrop');
  const modalEl = createElement('div', 'modal');

  modalEl.innerHTML = `
  <div class="modal-content">
    <h2 class="modal__title"></h2>
    <p class="modal__text"></p>
  </div>
  <div class="modal__actions">
    <button class="modal-button" id="modal-button-cancel">Anuluj</button>
    <button class="modal-button" id="modal-button-confirm">Ok</button>
  </div>
  `;

  rootEl.append(backdropEl, modalEl);
};

export default initModal;
