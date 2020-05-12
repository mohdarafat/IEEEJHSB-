function validateEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

function validatePhone(phone) {
    const regex = /\d+$/;
    if(phone.length !== 10)
        return false;
    return regex.test(phone);
}

function validateMessage(msg) {
    var count = (msg.split(" ").length - 1);
    console.log(count);
    if(count > 101)
        return false;
    return true;
}

function submitForm(isValid) {
    if(isValid) {
        document.ContactForm.submit();
    }
}

window.onload = function() {
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');
    const buttonSubmit = document.querySelector('#button');
    const phoneInput = document.querySelector('#phone');

    var errorMessage = document.querySelector('#error');
    errorMessage.style.display = "none";

    buttonSubmit.addEventListener('click', (e)=> {
        e.preventDefault(); //to prevent submitting the form

        errorMessage.style.display = "none";

        //to check empty fields
        if(nameInput.value == '' || emailInput.value == '' || messageInput.value == '' || phoneInput.value == '')
        {
            errorMessage.innerText = 'Error:- please fill in the empty fields';
            errorMessage.style.display = "block";
            return submitForm(false);
        }

        //use regex to check email
        if(!validateEmail(emailInput.value))
        {
            errorMessage.innerText = 'Error:- please check your email';
            errorMessage.style.display = "block";
            return submitForm(false);
        }

        //check phone number
        if(!validatePhone(phone.value)) {
            errorMessage.innerText = 'Error:- please check your phone';
            errorMessage.style.display = "block";
            return submitForm(false);
        }

        //message should be less than 100 words
        if(!validateMessage(messageInput.value))
        {
            errorMessage.innerText = 'Error:- please write a concise message having not more than 100 words';
            errorMessage.style.display = "block";
            return submitForm(false);
        }

        submitForm(true);
    })
}