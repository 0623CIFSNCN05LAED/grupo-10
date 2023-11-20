const { validationResult } = require("express-validator");
//const users = require("../data/users/users");

module.exports = (req, res, next) => {
  const resultValidation = validationResult(req);

  if (resultValidation.errors.length > 0) {
    return res.render("users/register", {
      errors: resultValidation.mapped(),
      oldData: req.body,
    });
  }
  next();
};
