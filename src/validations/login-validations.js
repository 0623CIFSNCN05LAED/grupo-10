const { body } = require("express-validator");

module.exports = [
  body("user_name")
    .notEmpty()
    .withMessage("Tienes que escribir un correo eléctrónico")
    .bail()
    .isEmail()
    .withMessage("Debes ingresar un formato de correo válido"),
  body("password").notEmpty().withMessage("Tienes que escribir una contraseña"),
];
