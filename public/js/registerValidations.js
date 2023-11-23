
const validations = [
    {
        field: "first_name",
        check: (input) => input.value.length >= 2,
        message: "El nombre debe tener al menos dos caracteres",
    },
    {
        field: "last_name",
        check: (input) => input.value.length >= 2,
        message: "El apellido debe tener al menos dos caracteres",
    },
    {
        field: "email",
        check: (input) => emailRegex.test(input.value),
        message: "Debe ser un correo electrónico válido",
    },
    {
        field: "password",
        check: (input) => input.value.length >= 8,
        message: "La contraseña debe tener al menos ocho caracteres",
    },
    {
        field: "password_repeat",
        check: (input) => input.value.length >= 8,
        message: "La contraseña repetida debe tener al menos ocho caracteres",
    },
    // {
    //     validacion de extencion
    // },
];


validations.forEach((validation) => {
    const inputId = validation.field;
    const input = document.getElementById(inputId);
    const inputErrorMsg = document.getElementById(inputId + "Error");

    function validate() {
        inputValidation(validation, input, inputErrorMsg);
    }

    input.addEventListener("blur", validate);
    input.addEventListener("input", validate);
});

const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Aquí puedes agregar lógica adicional si es necesario antes de enviar el formulario
});

function inputValidation(validation, input, inputErrorMsg) {
    if (!input.value) {
        inputErrorMsg.innerText = "El campo no debe estar vacío";
        inputErrorMsg.classList.add("display");
        return;
    }

    if (!validation.check(input)) {
        inputErrorMsg.innerText = validation.message;
        inputErrorMsg.classList.add("display");
        return;
    }

    inputErrorMsg.innerText = '';
    inputErrorMsg.classList.remove('display');
}
