const { body } = require("express-validator");
const userService = require("../services/userService");
const bcrypt = require("bcryptjs");

module.exports = [
  body("user_name")
    .notEmpty()
    .withMessage("Tienes que escribir un correo electrónico")
    .bail()
    .isEmail()
    .withMessage("Debes ingresar un formato de correo válido")
    .bail()
    .custom(async (value, { req }) => {
      const email = req.body.user_name;
      const userToLogin = await userService.userByEmail(email);
      if (userToLogin) {
        return true;
      } else {
        throw new Error(
          `El correo electrónico no está registrado. Por favor, ingrese el correo correcto`
        ); //to do have the alert appear in the field email
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("Tienes que escribir tu contraseña")
    .bail()
    .custom(async (value, { req }) => {
      const email = req.body.user_name;
      const userToLogin = await userService.userByEmail(email);
      const formPassword = req.body.password;
      const passwordOk = userToLogin.password;
      const checkPassword = bcrypt.compareSync(formPassword, passwordOk);
      if (!checkPassword) {
        throw new Error(
          `La contraseña ingresada es incorrecta, intente nuevamente`
        );
      } else {
        return true;
      }
    }),
];
