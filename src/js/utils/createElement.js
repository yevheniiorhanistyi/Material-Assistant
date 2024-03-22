export const createElement = (tag, classList) => {
  const element = document.createElement(tag);
  element.classList = classList;
  return element;
};
