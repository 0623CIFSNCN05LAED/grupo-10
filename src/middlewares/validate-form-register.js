const { validationResult } = require("express-validator");
const users = require('../data/users/users')
module.exports = {
campo: (req, res, next) => {
  const resultValidation = validationResult(req);
  
  if (resultValidation.errors.length > 0) {
    return res.render("users/register", {
      errors: resultValidation.mapped(),
      oldData: req.body,
    });
  }
  next()
},

  correo: (req, res, next) => {
    const {email} = req.body;
  if (users.findByField('email', email)) {
        return res
          .status(400)
          .json({
            error:
              "El correo electrónico ya está registrado. Por favor, elija otro.", //to do have the alert appear in the field email
          });
      }
  next();
    },
}
