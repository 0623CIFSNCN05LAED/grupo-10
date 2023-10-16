const { validationResult } = require("express-validator");
const users = require("../data/users/users");
module.exports = (req, res, next) => {
  const resultValidation = validationResult(req);

  if (resultValidation.errors.length > 0) {
    let user_name = null;
    const data = req.session.userData;
    if (data) {
      user_name = data.user_name;
    }
    return res.render("users/register", {
      errors: resultValidation.mapped(),
      oldData: req.body,
      user_name,
    });
  }
  next();
};

// correo: (req, res, next) => {
//   const { email } = req.body;
//   if (users.findByField("email", email)) {
//     return res.status(400).json({
//       error:
//         "El correo electrónico ya está registrado. Por favor, elija otro.", //to do have the alert appear in the field email
//     });
//   }
//   next();
// },
//};
