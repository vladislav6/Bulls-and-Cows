export function createMyElement(
  element: string,
  classElement: string = '',
  idElement: string = '',
  textElement: string = '',
): HTMLElement {
  const myElement = document.createElement(element);
  if (textElement) {
    myElement.textContent = textElement;
  }
  if (classElement) {
    myElement.className = classElement;
  }
  if (idElement) {
    myElement.id = idElement;
  }

  return myElement;
}

export function cleanDOM(parent: HTMLElement) {
  while (parent.firstChild) {
    parent.firstChild.remove();
  }
}

export function createRadioButtons(
  caption: string,
  name: string,
  radioButtonsValue: string[],
  radioButtonsLabel: string[],
): HTMLElement {
  const fieldset = createMyElement('fieldset', name);
  const legend = createMyElement('legend', '', '', caption);
  const fragment = document.createDocumentFragment();

  radioButtonsValue.forEach((value, id) => {
    const radioInput = createMyElement('input') as HTMLInputElement;
    const label = createMyElement('label', '', '', radioButtonsLabel[id]);
    radioInput.type = 'radio';
    radioInput.name = name;
    radioInput.value = value;

    if (id === 2) {
      radioInput.checked = true;
    }

    label.prepend(radioInput);
    fragment.append(label);
  });

  fieldset.append(legend, fragment);
  return fieldset;
}

export function timer(element: HTMLElement): () => void {
  let minutes = 0;
  let seconds = 0;

  return () => {
    seconds += 1;
    if (seconds % 60 === 0) {
      minutes += 1;
      seconds = 0;
    }
    const minutesFormat: string | number = minutes < 10 ? `0${minutes}` : minutes;
    const secondsFormat: string | number = seconds < 10 ? `0${seconds}` : seconds;
    element.textContent = `${minutesFormat}:${secondsFormat}`;
  };
}

export const disableLengthInputs = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const lengthInputs = document.querySelectorAll('.length input') as NodeListOf<HTMLInputElement>;
  if (lengthInputs[0] && target.closest('input[value="2"]')) {
    lengthInputs[0].checked = true;
    lengthInputs.forEach((input) => (input.disabled = true));
  } else {
    lengthInputs.forEach((input) => (input.disabled = false));
  }
};
