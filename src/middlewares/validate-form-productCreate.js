const { validationResult } = require("express-validator");
const users = require("../data/products/products");

module.exports = (req, res, next) => {
  const resultValidation = validationResult(req);
  if (resultValidation.errors.length > 0) {
    return res.render("products/productCreate", {
      errors: resultValidation.mapped(),
      oldData: req.body,
    });
  }
  next();
};
