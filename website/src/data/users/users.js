const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const { User, sequelize } = require("../../database/models");

module.exports = {
  // Obtener todos los usuarios
  getUsers: async function () {
    const allUsers = await User.findAll({
      include: ["users_category"],
    });
    return allUsers;
  },
  getUserLimit: async function (offset, limit) {
    const users = await User.findAll({
      include: ["users_category"],
      offset,
      limit,
    });
    return users;
  },
  getCountTotalUser: async function () {
    const count = User.count();
    return count;
  },
  create: async function (user) {
    console.log(`Creating user ${user.first_name} ${user.last_name}`);
    //const users = this.getUsers();
    const newUser = {
      id: uuidv4(),
      ...user,
    };
    return await User.create(newUser);
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

    return User.destroy({ where: { id } });
  },
  userAdmin: async (id) => {
    const user = await User.findByPk(id, { include: ["users_category"] });
    const category = user.category_id;
    const isAdmin = category === "admin";
    console.log("usuario " + user.email, "rol " + category);
    return isAdmin;
  },
};
