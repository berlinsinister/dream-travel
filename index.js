let inputs = document.querySelectorAll('.input');
let select = document.querySelector('.select-input');
let radios = document.querySelectorAll('input[type="radio"]');
let checkboxes = document.querySelectorAll('input[type="checkbox"]');
let textarea = document.querySelector('textarea');
let reset = document.querySelector('.reset');

reset.addEventListener('click', () => {
    for (let input of inputs)
        input.value = '';
    select.value = 'select'.toUpperCase();
    for (let radio of radios)
        radio.checked = false;
    for (let checkbox of checkboxes)
        checkbox.checked = false;
    textarea.value = '';
});