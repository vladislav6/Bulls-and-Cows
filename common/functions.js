export function createMyElement(element, classElement = '', idElement = '', textElement = '') {
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
export function cleanDOM(parent) {
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
}
export function createRadioButtons(caption, name, radioButtonsValue, radioButtonsLabel) {
    const fieldset = createMyElement('fieldset', name);
    const legend = createMyElement('legend', '', '', caption);
    const fragment = document.createDocumentFragment();
    radioButtonsValue.forEach((value, id) => {
        const radioInput = createMyElement('input');
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
export function timer(element) {
    let minutes = 0;
    let seconds = 0;
    return () => {
        seconds += 1;
        if (seconds % 60 === 0) {
            minutes += 1;
            seconds = 0;
        }
        const minutesFormat = minutes < 10 ? `0${minutes}` : minutes;
        const secondsFormat = seconds < 10 ? `0${seconds}` : seconds;
        element.textContent = `${minutesFormat}:${secondsFormat}`;
    };
}
export const disableLengthInputs = (e) => {
    const target = e.target;
    const lengthInputs = document.querySelectorAll('.length input');
    if (lengthInputs[0] && target.closest('input[value="2"]')) {
        lengthInputs[0].checked = true;
        lengthInputs.forEach((input) => (input.disabled = true));
    }
    else {
        lengthInputs.forEach((input) => (input.disabled = false));
    }
};
