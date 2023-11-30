const { body } = require("express-validator");
const path = require("path");
const products = require("../data/products/products");

module.exports = [
  body("name")
    .notEmpty()
    .withMessage(`Debes ingresar el nombre del producto`)
    .bail()
    .isLength({ min: 5 })
    .withMessage("El nombre debe contener al menos 5 caracteres"),
  body("price")
    .notEmpty()
    .withMessage("Debes ingresar un precio")
    .bail()
    .isNumeric()
    .withMessage("Debes ingresar un valor numérico"),
  body("brand_id").notEmpty().withMessage(`Debes seleccionar una marca`),
  body("category_id").notEmpty().withMessage("Debes seleccionar una categoría"),
  body("description")
    .notEmpty()
    .withMessage("Debes ingresar una descripción")
    .bail()
    .isLength({ min: 20 })
    .withMessage("La descripción debe contener al menos 20 caracteres"),
  body("image").custom((value, { req }) => {
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
