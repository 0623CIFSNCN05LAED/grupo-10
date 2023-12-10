const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const validations = [
    {
        field: "user_name",
        check: (input) => emailRegex.test(input.value),
        message: "Debe ser un correo electrónico válido",
    },
    {
        field: "password",
        check: (input) => input.value.trim() !== "",
        message: "La contraseña no puede estar vacía",
    },
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

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const validationsResult = [];

    validations.forEach((validation) => {
        const inputId = validation.field;
        const input = document.getElementById(inputId);
        const inputErrorMsg = document.getElementById(inputId + "Error");
        const result = inputValidation(validation, input, inputErrorMsg);
        validationsResult.push(result);
    });

    if (validationsResult.every((val) => val == true)) {
        form.submit();
    }
});

function inputValidation(validation, input, inputErrorMsg) {
    if (!input.value && input.id !== 'avatar') {
        if (inputErrorMsg) {
            inputErrorMsg.innerText = "El campo no debe estar vacío";
            inputErrorMsg.classList.add("display");
        }
        return false;
    }
    if (!validation.check(input)) {
        if (inputErrorMsg) {
            inputErrorMsg.innerText = validation.message;
            inputErrorMsg.classList.add("display");
        }
        return false;
    }

    if (inputErrorMsg) {
        inputErrorMsg.innerText = "";
        inputErrorMsg.classList.remove("display");
    }

    return true;
}
