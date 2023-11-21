// Poner en un array los objetos que quiero validar
const validations = [
    {
        field: "first_name",
        check: (input) => input.value.length >= 2,
        message: "El nombre debe tener al menos dos caracteres",
    },
    {
        field: "last_name",
        check: (input) => input.value.length >= 2,
        message: "El nombre debe tener al menos dos caracteres",
    },
    {
        field: "email",
        check: (input) => validator.isEmail(input.value),
        message: "Debe ser un correo electrónico válido",
    },
    {
        field: "password",
        check: (input) => input.value.length >= 8,
        message: "El nombre debe tener al menos ocho caracteres",
    },
    {
        field: "password_repeat",
        check: (input) => input.value.length >= 8,
        message: "El nombre debe tener al menos ocho caracteres",
        //pendiente la validadcion de avatar 
    },
];
//Hacer foreach
validations.forEach((validation) => {
    const inputId = validation.field;
    const input = document.getElementById(inputId);
    const inputErrorMsg = document.getElementById(inputId + "Error");

    function validate() {
        
        if(!input.value){
            inputErrorMsg.innerText = "El campo no debe estar vacio"
        }
    }

    input.addEventListener("blur", validate);
    input.addEventListener("input", validate);
});
// const form = document.getElementById('form');

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const first_name = document.getElementById("first_name");


//     if (first_name) {
        
//         const first_nameValue = first_name.value;
//         if (first_nameValue.length >= 5) {
//         } else {
//             console.error('Error: La longitud del nombre debe ser al menos 5 caracteres');
//         }
//     }
// });
