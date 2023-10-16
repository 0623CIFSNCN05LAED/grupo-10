const { validationResult } = require("express-validator");
const users = require("../data/products/products");

module.exports = (req, res, next) => {
  const resultValidation = validationResult(req);
  if (resultValidation.errors.length > 0) {
    let user_name = null;
    const data = req.session.userData;
    if (data) {
      user_name = data.user_name;
    }
    return res.render("products/productCreate", {
      errors: resultValidation.mapped(),
      oldData: req.body,
      user_name,
    });
  }
  next();
};
