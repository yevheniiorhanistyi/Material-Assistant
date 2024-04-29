import { createElement } from '../../utils/index.js';

const initModal = () => {
  const mainEl = document.querySelector('.main');
  const backdropEl = createElement('div', 'backdrop');
  const modalEl = createElement('div', 'modal');

  modalEl.innerHTML = `
  <div class="modal-content">
    <h2 class="modal__title"></h2>
    <p class="modal__text"></p>
  </div>
  <div class="actions-group">
    <button class="actions-group__button" id="modal-button-cancel">Anuluj</button>
    <button class="actions-group__button" id="modal-button-confirm">Ok</button>
  </div>
  `;

  mainEl.append(backdropEl, modalEl);
};

export default initModal;
