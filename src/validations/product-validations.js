const { body } = require("express-validator");
const products = require("../data/products/products");

module.exports = [
  body("name").notEmpty().withMessage(`Debes ingresar el nombre del producto`),
  body("price").notEmpty().withMessage("Debes ingresar un precio"),
  body("brand").notEmpty().withMessage(`Debes seleccionar una marca`),
  body("category").notEmpty().withMessage("Debes seleccionar una categoría"),
  body("description").notEmpty().withMessage("Debes ingresar una descripción"),
];
