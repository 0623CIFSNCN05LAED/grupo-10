const { log } = require("console");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const { users } = require("../db");

module.exports = {
  // Obtener todos los usuarios
  getUsers: function () {
    const usersFilePath = path.join(__dirname, "./usersDataBase.json");
    const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
    return users;
  },
  saveUsers: function (users) {
    const usersFilePath = path.join(__dirname, "./usersDataBase.json");
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
  },
  create: function (user) {
    console.log(`Creating user ${user.name} ${user.last_name}`);
    const users = this.getUsers();
    const newUser = {
      id: uuidv4(),
      ...user,
    };
    users.push(newUser);
    this.saveUsers(users);
  },
  findById: function (id) {
    const user = this.getUsers().find((usuario) => usuario.id == id);
    return user;
  },
  findByField: function (field, text) {
    const userFound = this.getUsers().find((usuario) => usuario[field] == text);
    return !!userFound;
  },
  findByMeil:function (field, text) {
    const userFound = this.getUsers().find((usuario) => usuario[field] == text);
    return userFound;
  },
  update: function (id, user) {
    console.log(`Actualizando usuario ${user.name}`);
    // cargar todos los usuarios
    const users = this.getUsers();
    // buscar un usuario por id
    const userToEdit = users.find((usuario) => usuario.id == id);
    // pisar las propiedades
    Object.assign(userToEditToEdit, user);
    // guardar el usuario editado
    this.saveUsers(users);
    return user;
  },
  delete: function (id) {
    console.log(`Deleting user with id ${id}`);
    const users = this.getUsers();
    const nonDeleteUsers = users.filter((usuario) => usuario.id != id);
    this.saveUsers(nonDeleteUsers);
  },
};
