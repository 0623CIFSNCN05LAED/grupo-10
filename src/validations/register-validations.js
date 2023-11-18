const { body } = require("express-validator");
const path = require("path");
const users = require("../data/users/users");

module.exports = [
  body("first_name")
    .notEmpty()
    .withMessage("Tienes que escribir un nombre")
    .bail()
    .isLength({ min: 2 })
    .withMessage("El nombre debe tener al menos dos caracteres"),
  body("last_name")
    .notEmpty()
    .withMessage("Tienes que escribir un apellido")
    .bail()
    .isLength({ min: 2 })
    .withMessage("El apellido debe tener al menos dos caracteres"),
  body("email")
    .notEmpty()
    .withMessage("Tienes que escribir un correo eléctrónico")
    .bail()
    .isEmail()
    .withMessage("Debes ingresar un formato de correo válido")
    .bail()
    .custom((value, { req }) => {
      let email = req.body.email;
      let checkEmail = users.findByEmail(email);
      if (!checkEmail) {
        return true;
      } else {
        throw new Error(`El correo electrónico ${email} ya está registrado.`);
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("Tienes que escribir una contraseña")
    .bail()
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 caracteres")
    .bail()
    .matches(/[A-Z]/)
    .withMessage("La contraseña debe contener al menos una letra mayúscula")
    .bail()
    .matches(/[a-z]/)
    .withMessage("La contraseña debe contener al menos una letra minúscula")
    .bail()
    .matches(/[\d]/)
    .withMessage("La contraseña debe contener al menos un número")
    .bail()
    .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .withMessage("La contraseña debe contener al menos un carácter especial"),
  body("password_repeat")
    .notEmpty()
    .withMessage("Tienes que repetir la contraseña")
    .bail()
    .custom((value, { req }) => {
      const password = req.body.password;
      const password2 = req.body.password_repeat;
      const checkPasswords = password === password2;
      if (!checkPasswords) {
        throw new Error(`Las contraseñas ingresadas no son iguales.`);
      } else {
        return true;
      }
    }),
  body("avatar").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpg", ".jpeg", ".png", ".gif"];

    if (!file) {
      return true;
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `Las extensiones aceptadas son ${acceptedExtensions.join(", ")}`
        );
      }
    }
    return true;
  }),
];
