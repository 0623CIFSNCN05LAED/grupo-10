const { validationResult } = require("express-validator");
// const userService = require("../services/userService");
const user = require('../data/users/users')
const bcrypt = require("bcryptjs");
module.exports = {
  campo: (req, res, next) => {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render("users/register", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }
    next();
  },
  correo: (req, res, next) => {
    const resultValidation = validationResult(req);
    const email = req.body.user_name;
    if (!user.findByField("email", email)) {
      return res.render("users/login", {
        errors: resultValidation.mapped(),
        oldData: req.body
      });
    
    }
    next();
  },
  password: (req, res, next) => {
    const resultValidation = validationResult(req);
    const userToLogin = user.findByMeil('email', req.body.user_name)
        const paswordOK = bcrypt.compareSync(req.body.password, userToLogin.password)
    if(!paswordOK){
      return res.render("users/login", {
        errors: resultValidation.mapped(),
      });
      
    }
    next()
  }
};
