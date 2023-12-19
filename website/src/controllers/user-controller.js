const path = require("path");
const userService = require("../services/userService");
const bcrypt = require("bcryptjs");

module.exports = {
  // Obtener todos los usuarios
  users: (req, res) => {
    const allUsers = userService.getUsers;
    res.render("users/VISTA-TODOS-LOS-USUARIOS", {
      allUsers,
    });
  },

  // Perfil de usuario
  userProfile: async (req, res) => {
    const id = req.params.id;
    const user = await userService.getUser(id);
    res.render("users/userProfileView", { user });
  },

  // Formulario para logueo de usuario
  login: (req, res) => {
    res.render("users/login");
  },

  //Método de proceso de login

  loginProcess: async (req, res) => {
   const data = req.body;
    req.session.userData = data;
    const email = data.user_name;
    const user = await userService.userByEmail(email);
    const user_id = user.id;
    if (req.body.remember_me) {
      res.cookie("userEmail", req.body.user_name, {
        maxAge: 1000 * 60 * 2,
      });
    }
    res.redirect("/users/" + user_id);
  },

  //Método de cierre de sesión

  logout: (req, res) => {
    res.clearCookie("userEmail");
    req.session.destroy();
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
      email: req.body.email.toLowerCase(),
      password: bcrypt.hashSync(req.body.password, 10),
      category_id: "user",
      avatar: req.file ? req.file.filename : "users_default.png",
    };
    userService.userCreating(user);
    res.redirect("login");
  },
  // Formulario de edición de usuario
  userEdit: async (req, res) => {
    const id = req.params.id;
    const user = await userService.getUser(id);
    res.render("users/edit", { user });
  },

  // Método de edición de usuario
  userUpdate: (req, res) => {
    const id = req.params.id;
    const user = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
    };
    const avatar = req.file
      ? req.file.filename
      : userService.getUser(id).avatar;
    user.avatar = avatar;
    userService.updateUser(id, user);
    res.redirect("/users/" + id);
  },
  // Método para eliminar un usuario
  destroy: (req, res) => {
    const id = req.params.id;
    userService.deleteUser(id);
    res.clearCookie("userEmail");
    req.session.destroy();
    res.redirect("login");
  },
};
