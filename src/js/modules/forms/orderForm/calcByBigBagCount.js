import { createElement } from '../../../utils/index.js';

const calcByBgBagCount = (e) => {
  const button = e.target.closest('.bigbag-info-button');

  if (button) {
    const mainEl = document.querySelector('.main');
    const current = button.getAttribute('data-current');
    const materialInput = mainEl.querySelector(`#material-quantity-${current}`);
    const infoList = mainEl.querySelector(`#bigbag-info-${current}`);
    const infoListInputs = infoList.querySelectorAll('.form-control');
    const overlay = document.querySelector('.custom-popover__overlay') || createElement('div', 'custom-popover__overlay');

    const onChangeValue = () => {
      const averageWeight = +infoList.querySelector(`#average-weight-bb-${current}`).value;
      const bigBagCount = +infoList.querySelector(`#bb-count-${current}`).value;
      const additionalQuantity = +infoList.querySelector(`#additional-quantity-${current}`).value;

      materialInput.value = (averageWeight * bigBagCount) + additionalQuantity;
    };

    const toggleInfoList = (action) => {
      if (action === 'open') {
        infoList.classList.add('show-info');
        overlay.addEventListener('click', closeInfoList);
        mainEl.append(overlay);
      } else if (action === 'close') {
        infoList.classList.remove('show-info');
        overlay.removeEventListener('click', closeInfoList);
        overlay.remove();
      }

      infoListInputs.forEach((input) => {
        input[action === 'open' ? 'addEventListener' : 'removeEventListener']('input', onChangeValue);
      });
    };

    const closeInfoList = () => toggleInfoList('close');
    const openInfoList = () => toggleInfoList('open');

    openInfoList();
  }
};

export default calcByBgBagCount;
