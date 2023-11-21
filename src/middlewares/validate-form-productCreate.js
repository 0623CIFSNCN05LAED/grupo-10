const { validationResult } = require("express-validator");
const productService = require("../services/productService");

module.exports = async (req, res, next) => {
  const brands = await productService.getAllBrands();
  const resultValidation = validationResult(req);
  if (resultValidation.errors.length > 0) {
    return res.render("products/productCreate", {
      errors: resultValidation.mapped(),
      oldData: req.body,
      brands,
    });
  }
  next();
};
