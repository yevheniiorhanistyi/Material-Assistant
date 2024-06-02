import { createElement } from '../../../utils/index.js';

const convertToPercent = () => {
  const mainEl = document.querySelector('.main');
  const convert = document.querySelector('.convert');
  const formControl = convert.querySelector('.form-control');
  const materialInput = document.querySelector('#material-input');
  const mixerSizeSelect = document.querySelector('#mixer-size-select');
  const overlay = document.querySelector('.custom-popover__overlay') || createElement('div', 'custom-popover__overlay');

  const onChangeValue = () => {
    const value = (Number(formControl.value) * 100) / Number(mixerSizeSelect.value);
    materialInput.value = Number(value.toFixed(1));
  };

  const closeConvertElement = () => {
    convert.classList.remove('show');
    formControl.removeEventListener('input', onChangeValue);
    formControl.removeEventListener('keydown', onEnterPress);
    overlay.removeEventListener('click', closeConvertElement);
    overlay.remove();
  };

  const onEnterPress = (e) => {
    if (e.key === 'Enter') closeConvertElement();
  };

  const openConvertElement = () => {
    convert.classList.add('show');
    formControl.addEventListener('input', onChangeValue);
    formControl.addEventListener('keydown', onEnterPress);
    overlay.addEventListener('click', closeConvertElement);
    mainEl.append(overlay);
  };

  openConvertElement();
};

export default convertToPercent;
