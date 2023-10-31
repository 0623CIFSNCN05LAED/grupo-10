const path = require("path");
const userService = require("../services/userService");
const bcrypt = require("bcryptjs");
const { log } = require("console");
const users = require("../data/users/users");

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
    res.render("users/userProfileView", { user });
  },

  // Formulario para logueo de usuario
  login: (req, res) => {
    res.render("users/login");
  },

  //Método de proceso de login

  loginProcess: (req, res) => {
    const data = req.body;
    req.session.userData = data;
    res.redirect("/");
  },

  // Formulario de creación de usuario
  register: (req, res) => {
    res.render("users/register");
  },

  // Método de creación de usuario
  createUser: (req, res) => {
    const user = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      category: "user",
      avatar: req.file ? req.file.filename : "users_default.png",
    };
    userService.userCreating(user);
    res.redirect("login");
  },
};
