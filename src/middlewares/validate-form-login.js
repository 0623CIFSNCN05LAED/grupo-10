const { validationResult } = require("express-validator");
const userService = require('../services/userService')
const bcrypt = require("bcryptjs");
module.exports = {
  correo: (req, res, next) => {
    const { user_name } = req.body;
    if (!userService.findByField("email", user_name)) {
      return res.status(400).json({
        error:
          "El correo electrónico no está registrado. Por favor, elija otro.", //to do have the alert appear in the field email
      });
    }
    next();
  },
  password: (req, res, next) => {
     const passwordToLogin = userService.usersByFile
    if (!userService.findByField("password", user.password)) {
      return res.status(400).json({
        error: "Esta mala la clave", //to do have the alert appear in the field email
      }); //probando esto para u comit
    }
    next();
  },
};
