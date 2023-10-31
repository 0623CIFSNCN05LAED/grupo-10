const { validationResult } = require("express-validator");
const user = require("../data/users/users");
const bcrypt = require("bcryptjs");
module.exports = (req, res, next) => {
  const resultValidation = validationResult(req);

  if (resultValidation.errors.length > 0) {
    return res.render("users/login", {
      errors: resultValidation.mapped(),
      oldData: req.body,
    });
  }
  next();
};
