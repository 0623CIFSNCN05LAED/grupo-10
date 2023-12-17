const { body } = require("express-validator");
const path = require("path");
const userService = require("../services/userService");

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
