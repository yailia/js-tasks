function createEl (el, nameOfCl) {
  const element = document.createElement(el);
  if (typeof (nameOfCl) !== 'object')
    element.classList.add(nameOfCl);
  else
    for (classEl of nameOfCl)
      element.classList.add(classEl);
  return element;
}