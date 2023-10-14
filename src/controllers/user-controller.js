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
    let user_name = null;
    const data = req.session.userData;
    if (data) {
      user_name = data.user_name;
    }
    res.render("users/VISTA-TODOS-LOS-USUARIOS", {
      allUsers,
      user_name,
    });
  },

  // Perfil de usuario
  // DEFINIR LA VISTA DE PERFIL Y AGREGAR A RENDER
  userProfile: (req, res) => {
    const id = req.params.id;
    const user = userService.getUser(id);
    let user_name = null;
    const data = req.session.userData;
    if (data) {
      user_name = data.user_name;
    }
    res.render("users/VISTA-PERFIL", { user, user_name });
  },

  // Formulario para logueo de usuario
  login: (req, res) => {
    let user_name = null;
    const data = req.session.userData;
    if (data) {
      user_name = data.user_name;
    }
    res.render("users/login", { user_name });
  },

  //Método de proceso de login

  loginProcess: (req, res) => {
    const data = req.body;
    req.session.userData = data;
    res.redirect("/");
  },

  // Formulario de creación de usuario
  register: (req, res) => {
    let user_name = null;
    const data = req.session.userData;
    if (data) {
      user_name = data.user_name;
    }
    res.render("users/register", { user_name });
  },

  // Método de creación de usuario
  createUser: (req, res) => {
    const user = {
      name: req.body.name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      password_repeat: bcrypt.hashSync(req.body.password_repeat, 10),
      category: "user",
      avatar: req.file ? req.file.filename : "users_default.png",
    };
    userService.userCreating(user);
    res.redirect("login");
  },
};
