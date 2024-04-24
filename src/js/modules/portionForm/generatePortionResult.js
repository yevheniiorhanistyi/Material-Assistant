import { MIN_PORTION_SIZE, MAX_PORTION_SIZE } from '../../constants/constants.js';
import { createElement, getFromLocalStorage, findFormByUid } from '../../utils/index.js';

const calcMaterialPerMinMixerSize = (val) => Math.ceil((MIN_PORTION_SIZE * val) / 100);
const calcMaterialPerMaxMixerSize = (val) => Math.ceil((MAX_PORTION_SIZE * val) / 100);
const calcMaterialPerDefaultMixerSize = (val, mixerSize) => (mixerSize * val) / 100;

const calcPortions = (totalRawMaterial, materialPerDefaultMixerSize, mixerSize) => {
  const perMaterial = Math.round(
    (totalRawMaterial * mixerSize) / materialPerDefaultMixerSize,
  );
  return perMaterial;
};

export const generatePortionResult = (index) => {
  const mainEl = document.querySelector('.main');
  const existingTable = mainEl.querySelector('.portion-calculate-result');

  if (existingTable) { existingTable.remove(); }

  const tableWrapper = createElement('div', 'portion-calculate-result');
  const formData = JSON.parse(getFromLocalStorage('portionFormData')) || [];
  const currentForm = findFormByUid(formData, index);

  if (currentForm) {
    const {
      percentage,
      totalRawMaterial,
      grammage,
      mixerSize,
    } = currentForm;

    const materialPerMinMixerSize = calcMaterialPerMinMixerSize(percentage);
    const materialPerMaxMixerSize = calcMaterialPerMaxMixerSize(percentage);
    const materialPerDefaultMixerSize = calcMaterialPerDefaultMixerSize(percentage, mixerSize);

    const viewResultTable = (rest = 0) => {
      const totalPortionCount = defaultPortionCount + portionCountPerCurrentMaterial;
      const cansPerDefaultPortions = Math.ceil((mixerSize / grammage) * defaultPortionCount);
      const cansPerNewPortions = Math.ceil(
        (portionsPerMaterial / grammage) * portionCountPerCurrentMaterial,
      );
      const allCans = cansPerDefaultPortions + cansPerNewPortions;
      const materialPerNewSize = calcMaterialPerDefaultMixerSize(percentage, portionsPerMaterial);
      tableWrapper.innerHTML = `
    <table class="portion-result-table">
      <thead>
        <tr>
          <th>Porcji (kg)</th>
          <th>Udział składnika (kg)</th>
          <th>Ilość (szt)</th>
        </tr>
      </thead>
      <tbody>
       ${defaultPortionCount !== 0 ? `<tr>
          <td>${mixerSize}</td>
          <td>${Math.round(materialPerDefaultMixerSize)}</td>
          <td>${defaultPortionCount}</td>
        </tr>` : ''}
        <tr>
          <td>${portionsPerMaterial}</td>
          <td>${Math.round(materialPerNewSize)}</td>
          <td>${portionCountPerCurrentMaterial}</td>
        </tr>
        <tr>
          <td class="border-none" rowspan=${rest > 0 ? '3' : '2'}></td>
          <td class="font-medium align-left">Ogólna ilość mieszałek (szt)</td>
          <td>${totalPortionCount}</td>
        </tr>
        ${rest > 0 ? `
        <tr>
          <td class="font-medium align-left">Pozostała ilość materiału po liczeniu (kg)</td>
          <td>${rest}</td>
        </tr>
        ` : ''}
        <tr>
          <td class="font-medium align-left border-none">Ilość puszek dla wygenerowanych mieszałek (szt)</td>
          <td class="border-none">${allCans}</td>
        </tr>
      </tbody>
    </table>
    `;
    };

    let defaultPortionCount = Math.floor(totalRawMaterial / materialPerDefaultMixerSize);
    let remainder = totalRawMaterial - (defaultPortionCount * materialPerDefaultMixerSize);
    let portionCountPerCurrentMaterial = 1;
    let portionsPerMaterial = 0;

    if (totalRawMaterial >= materialPerMinMixerSize && totalRawMaterial < materialPerMaxMixerSize) {
      const perMaterial = calcPortions(totalRawMaterial, materialPerDefaultMixerSize, mixerSize);
      remainder = 0;
      portionsPerMaterial = perMaterial;
      defaultPortionCount = 0;
      viewResultTable();
    } else if (totalRawMaterial >= materialPerMaxMixerSize && (
      (totalRawMaterial / 2) < materialPerMinMixerSize)) {
      remainder = Math.floor(totalRawMaterial - materialPerMaxMixerSize);
      portionsPerMaterial = MAX_PORTION_SIZE;
      defaultPortionCount = 0;
      viewResultTable(remainder);
    } else if (totalRawMaterial >= materialPerMaxMixerSize && (
      (totalRawMaterial / materialPerMinMixerSize) >= 2 && defaultPortionCount < 2)) {
      remainder = totalRawMaterial / 2;
      portionCountPerCurrentMaterial += 1;
      const perMaterial = calcPortions(remainder, materialPerDefaultMixerSize, mixerSize, grammage);
      portionsPerMaterial = perMaterial;
      defaultPortionCount = 0;
      viewResultTable();
    } else {
      if (remainder < materialPerMinMixerSize) {
        while (portionCountPerCurrentMaterial < 5) {
          if (remainder >= materialPerMinMixerSize && (
            remainder / portionCountPerCurrentMaterial >= materialPerMinMixerSize)) {
            break;
          } else {
            defaultPortionCount -= 1;
            remainder += materialPerDefaultMixerSize;
            portionCountPerCurrentMaterial += 1;
          }
        }
      }
      remainder /= portionCountPerCurrentMaterial;
      const perMaterial = calcPortions(remainder, materialPerDefaultMixerSize, mixerSize, grammage);
      portionsPerMaterial = perMaterial;
      viewResultTable();
    }
    mainEl.append(tableWrapper);
  } else {
    tableWrapper.innerHTML = '';
  }
};
