const { validationResult } = require("express-validator");
//const users = require("../data/users/users");

module.exports = (req, res, next) => {
  const resultValidation = validationResult(req);
  const id = req.params.id;

  if (resultValidation.errors.length > 0) {
    console.log(resultValidation);
    return res.render("users/edit", {
      errors: resultValidation.mapped(),
      oldData: req.body,
    });
  }
  next();
};
