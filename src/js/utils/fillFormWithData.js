export const fillFormWithData = (data, fieldMap) => {
  Object.keys(fieldMap).forEach((fieldId) => {
    const fieldElements = document.querySelectorAll(`${fieldMap[fieldId]}`);
    if (fieldElements.length > 0) {
      if (Array.isArray(data[fieldId])) {
        fieldElements.forEach((element, elemIndex) => {
          const currentElement = element;
          if (data[fieldId][elemIndex]) currentElement.value = data[fieldId][elemIndex];
        });
      } else {
        fieldElements.forEach((element) => {
          const currentElement = element;
          currentElement.value = data[fieldId];
        });
      }
    }
  });
};
