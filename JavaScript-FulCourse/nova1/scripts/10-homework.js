function toggleButton(selector) {
    const buttonElement = document.querySelector(selector);
    if (buttonElement.classList.contains('is-toggled')) {
        buttonElement.classList.remove('is-toggled');
    } else {

        turnOffPreviousButton();
        buttonElement.classList.add('is-toggled');
    } 
}
function turnOffPreviousButton() {
    const previousButton = document.querySelector('.is-toggled')
    if (previousButton) {
        previousButton.classList.remove('is-toggled');
    }
}




/*
function toggleButton2() {
const buttonElement2 = document.querySelector('.js-button-2')
if (buttonElement2.classList.contains('is-toggled-2')) {
    buttonElement2.classList.remove('is-toggled-2');
} else {
    buttonElement2.classList.add('is-toggled-2');
}
}

function toggleButton3() {
const buttonElement3 = document.querySelector('.js-button-3')
if (buttonElement3.classList.contains('is-toggled-3')) {
    buttonElement3.classList.remove('is-toggled-3');
} else {
    buttonElement3.classList.add('is-toggled-3');
}
}
*/
       