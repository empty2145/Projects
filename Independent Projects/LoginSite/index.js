const form = document.getElementById('form');
const firstnameInput = document.getElementById('firstname-input');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const repeatpasswordInput = document.getElementById('repeat-password-input');
const errorMessage = document.getElementById('error-message')
const submitButton = document.querySelector('.submitButton')


submitButton.addEventListener('click', (e) => {
    console.log("🔥 Form submit triggered");
    let errors = [];
    if (firstnameInput) {
        errors = getSignupFormErrors(firstnameInput.value, emailInput.value, passwordInput.value, repeatpasswordInput.value);
    } else {
        errors = getLoginFormErrors(emailInput.value, passwordInput.value)
    }

    if (errors.length > 0) {
        e.preventDefault();
        errorMessage.innerText = errors.join(". ");
    }
})

function getSignupFormErrors(firstname, email, password, repeatPassword) {
    let errors = [];
    if (firstname === '' || firstname == null) {
        errors.push('Firstname is required');
        firstnameInput.parentElement.classList.add('incorrect')
    }
    if (email === '' || email == null) {
        errors.push('Email is required');
        emailInput.parentElement.classList.add('incorrect');
    }
    if (password === '' || password == null) {
        errors.push('Password is required');
        passwordInput.parentElement.classList.add('incorrect');
    }
    if (password.length < 8) {
        errors.push('Password must have at least 8 characters');
        passwordInput.parentElement.classList.add('incorrect');
    }
    if (password !== repeatPassword) {
        errors.push('Password does not match repeated password');
        repeatpasswordInput.parentElement.classList.add('incorrect');
        passwordInput.parentElement.classList.add('incorrect');
    }

    return errors;
}

function getLoginFormErrors(email, password) {
    let errors = [];
    if (email === '' || email == null) {
        errors.push('Email is required');
        emailInput.parentElement.classList.add('incorrect');
    }
    if (password === '' || password == null) {
        errors.push('Password is required');
        passwordInput.parentElement.classList.add('incorrect');
    }

    return errors;
}
const allInput = [firstnameInput, emailInput, passwordInput, repeatpasswordInput].filter(input => input != null);

allInput.forEach(input => {
    input.addEventListener('input', () => {
        if (input.parentElement.classList.contains('incorrect')) {
            input.parentElement.classList.remove('incorrect');
            errorMessage.innerText = '';
        }
    })
})