export const isDataChanged = (formData, newFormData, index) => {
  const existingIndex = formData.findIndex((item) => item.uid === index);
  const isChanged = existingIndex !== -1
    && JSON.stringify(formData[existingIndex]) === JSON.stringify(newFormData);
  return { isChanged, existingIndex };
};
