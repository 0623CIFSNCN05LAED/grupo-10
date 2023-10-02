const { body } = require("express-validator");
const path = require("path");

module.exports = [
  body("name").notEmpty().withMessage("Tienes que escribir un nombre"),
  body("last_name").notEmpty().withMessage("Tienes que escribir un apellido"),
  body("email")
    .notEmpty()
    .withMessage("Tienes que escribir un correo eléctrónico")
    .bail()
    .isEmail()
    .withMessage("Debes ingresar un formato de correo válido"),
  body("password").notEmpty().withMessage("Tienes que escribir una contraseña"),
  body("password_repeat")
    .notEmpty()
    .withMessage("Tienes que repetir la contraseña"),
  body("avatar").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpg", ".png", ".gif"];

    if (!file) {
      return true;
      /*throw new Error("Tienes que subir una imagen");*/
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
