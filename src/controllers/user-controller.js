const path = require("path");
const userService = require("../services/userService");
const { validationResult } = require("express-validator");

module.exports = {
  // Obtener todos los usuarios
  // DEFINIR VISTA DE TODOS LOS USUARIOS Y CORREGIR RENDER
  users: (req, res) => {
    const allUsers = userService.getUsers;

    res.render("users/VISTA-TODOS-LOS-USUARIOS", {
      allUsers,
    });
  },

  // Perfil de usuario
  // DEFINIR LA VISTA DE PERFIL Y AGREGAR A RENDER
  userProfile: (req, res) => {
    const id = req.params.id;
    const user = userService.getUser(id);
    res.render("users/VISTA-PERFIL", { user });
  },

  // Formulario para logueo de usuario
  login: (req, res) => {
    res.render("users/login");
  },

  // Formulario de creación de usuario
  register: (req, res) => {
    res.render("users/register");
  },

  // Método de creación de usuario
  createUser: (req, res) => {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render("users/register", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }
    const user = {
      name: req.body.name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      password_repeat: req.body.password_repeat,
      category: "user",
      avatar: req.file ? req.file.filename : "users_default.png",
    };
    userService.userCreating(user);
    res.redirect("login");
  },
};
