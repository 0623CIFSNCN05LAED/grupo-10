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
    //pendiente la validadcion de avatar 
];