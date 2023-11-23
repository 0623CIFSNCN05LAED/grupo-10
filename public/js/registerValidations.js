
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allExtensions = [ 'png','gif'];

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
        check: (input) => isStrongPassword(input.value),
        message: "La contraseña debe tener al menos 8 caracteres, incluir una letra mayúscula, una letra minúscula, un número y un carácter especial",
    },
    
    {
        field: "password_repeat",
        check: (input) => input.value.length >= 8 && input.value === document.getElementById("password").value,
        message: "Las contraseñas deben coincidir y tener al menos ocho caracteres",
    },
    
    {
        field: "avatar",
        check: (input) => validateFileExtension(input),
        message: "Solo se permiten archivos con extensiones: " + allExtensions.join(', '),
    },
];

function isStrongPassword(password) {
    const regexUpperCase = /[A-Z]/;
    const regexLowerCase = /[a-z]/;
    const regexDigit = /\d/;
    const regexSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
    const hasUpperCase = regexUpperCase.test(password);
    const hasLowerCase = regexLowerCase.test(password);
    const hasDigit = regexDigit.test(password);
    const hasSpecialChar = regexSpecialChar.test(password);

    return password.length >= 8 && hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar;
}

function validateFileExtension(input) {
    const fileName = input.value.toLowerCase();
    const fileExtension = fileName.split('.').pop();
    console.log(fileExtension);
    // return allExtensions.includes(fileExtension)
   if( allExtensions.includes(fileExtension)){
    console.log('Esta estencion es permitida');
   }else{
    console.log('ESTA EXTENSIN NO ESTA PERMITIDA');
   } 
}

validations.forEach((validation) => {
    const inputId = validation.field;
    const input = document.getElementById(inputId);
    const inputErrorMsg = document.getElementById(inputId + "Error");

    function validate() {
        // console.log("input.value", input.value);
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
    if (!input.value) {
        if (inputErrorMsg) {
            inputErrorMsg.innerText = "El campo no debe estar vacío";
            inputErrorMsg.classList.add("display");
        }
        return;
    }

    if (!validation.check(input)) {
        if (inputErrorMsg) {
            inputErrorMsg.innerText = validation.message;
            inputErrorMsg.classList.add("display");
        }
        return;
    }

    if (inputErrorMsg) {
        inputErrorMsg.innerText = "";
        inputErrorMsg.classList.remove("display");
    }
}


