const isValidEmail = (email) => {
    const regex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(String(email).toLowerCase())
}

const isValidCPF = (cpf) => {
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
    return regex.test(String(cpf).toLowerCase())
}

let isValidForm = false

const msg = document.querySelector(".mensagem")
msg.style.opacity = "0"

const invalidateElement = (elem) => {
    elem.style.border = "1px solid red";
    elem.nextElementSibling.style.opacity = "100";
    elem.nextElementSibling.style.transition = "1s";
    isValidForm = false;
}

const validateInput = () => {
    const invalid = document.querySelector(".invalid");
    const invalid2 = document.querySelector(".invalid2");

    isValidForm = true;

    if(!invalid.value){
        invalidateElement(invalid);
    }

    if (!invalid2.value || !isValidEmail(invalid2.value)) {
        invalidateElement(invalid2);
    } else {
        // Se o e-mail é válido, redefina o estilo do campo e do erro
        invalid2.style.border = "1px solid black";
        invalid2.nextElementSibling.style.opacity = "0";
        invalid2.nextElementSibling.style.transition = "1s";
    }
}

const resetInput = (elem) => {
    elem.style.border = "1px solid black";
    elem.nextElementSibling.style.opacity = "0";
    elem.nextElementSibling.style.transition = "1s";
}

const form = document.querySelector('form')
const input = document.querySelector('input[name="name"]')
const email = document.querySelector('input[name="email"]')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInput();

    if (isValidForm) {
        form.style.display = "none";
        document.body.appendChild(msg);
        msg.style.opacity = '100%'
    }
});

input.addEventListener('input', () => {
    resetInput(input);
});

email.addEventListener('input', () => {
    resetInput(email);
});