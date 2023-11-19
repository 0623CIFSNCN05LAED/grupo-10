const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const { User } = require("../../database/models");
//const Sequelize = require("sequelize");

module.exports = {
  // Obtener todos los usuarios
  getUsers: async function () {
    const allUsers = await User.findAll({
      include: ["users_category"],
    });
    return allUsers;
  },
  // saveUsers: function (users) {
  //   const usersFilePath = path.join(__dirname, "./usersDataBase.json");
  //   fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
  // },
  create: async function (user) {
    console.log(`Creating user ${user.first_name} ${user.last_name}`);
    //const users = this.getUsers();
    const newUser = {
      id: uuidv4(),
      ...user,
    };
    return await User.create(newUser);
    //users.push(newUser);
    //this.saveUsers(users);
  },
  findById: async function (id) {
    const user = await User.findByPk(id, { include: ["users_category"] });
    return user;
  },
  findByField: function (field, text) {
    const userFound = this.getUsers().find((usuario) => usuario.field == text);
    return userFound;
  },
  findByEmail: async function (email) {
    const emailToLower = email.toLowerCase();
    const userFound = await User.findOne(
      { where: { email: emailToLower } },
      { include: ["users_category"] }
    );
    return userFound ? userFound : false;
  },
  update: function (id, user) {
    console.log(`Actualizando usuario ${user.first_name}`);
    // cargar todos los usuarios
    //const users = this.getUsers();
    // buscar un usuario por id
    //const userToEdit = users.find((usuario) => usuario.id == id);
    // pisar las propiedades
    //Object.assign(userToEditToEdit, user);
    // guardar el usuario editado
    //this.saveUsers(users);

    return User.update(
      {
        first_name: user.first_name,
        last_name: user.last_name,
        avatar: user.avatar,
      },
      { where: { id } }
    );
  },
  delete: function (id) {
    console.log(`Deleting user with id ${id}`);
    const users = this.getUsers();
    const nonDeleteUsers = users.filter((usuario) => usuario.id != id);
    this.saveUsers(nonDeleteUsers);
  },
};
