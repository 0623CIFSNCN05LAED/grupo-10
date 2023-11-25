
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allExtensions = [ 'JPG', 'JPEG', 'PNG', 'GIF'];

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
//validacion de caracteres especiales e igualdad de contraseñas
function isStrongPassword(password) {
    // Define expresiones regulares para diferentes requisitos
    const regexUpperCase = /[A-Z]/; // Al menos una letra mayúscula
    const regexLowerCase = /[a-z]/; // Al menos una letra minúscula
    const regexDigit = /\d/; // Al menos un dígito
    const regexSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/; // Al menos un carácter especial
    //provar si cumple cada requisito
    const hasUpperCase = regexUpperCase.test(password);
    const hasLowerCase = regexLowerCase.test(password);
    const hasDigit = regexDigit.test(password);
    const hasSpecialChar = regexSpecialChar.test(password);
    // Devuelve true si la contraseña es lo suficientemente fuerte
    return password.length >= 8 && hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar;
}



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

//Validacion del la extencion del avatar
function validateFileExtension(input) {
    const fileName = input.value.toUpperCase();
//Extraer el nombre de la extencion | separa el enunciado cada que contenga un punto y luego extrae solo la extencion
    const fileExtension = fileName.split('.').pop();
//Verificar si la extencion esta incluida en el array de extenciones
    return allExtensions.includes(fileExtension);
};

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
    };
});


function inputValidation(validation, input, inputErrorMsg) {
  // Verificar si el campo está vacío y no es el campo de avatar para que este no sea obligatorio para el usuario
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

