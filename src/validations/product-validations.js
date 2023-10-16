const { body } = require("express-validator");
const products = require("../data/products/products");

module.exports = [
  body("nombre")
    .notEmpty()
    .withMessage(`Debes ingresar el nombre del producto`),
  body("precio").notEmpty().withMessage("Debes ingresar un precio"),
  body("marca").notEmpty().withMessage(`Debes seleccionar una marca`),
  body("categoria").notEmpty().withMessage("Debes seleccionar una categoría"),
  body("descripcion").notEmpty().withMessage("Debes ingresar una descripción"),
];
