const db = require("../data/db");

const userService = {
  getUsers: async () => {
    const users = await db.users.getUsers();
    return users;
  },
  getUserLimit: async (offset, limit) => {
    const user = await db.users.getUserLimit(offset, limit);
    return user;
  },
  getCountTotalUsers: () => {
    return db.users.getCountTotalUser();
  },
  getUser: async (id) => {
    const user = await db.users.findById(id);
    return user;
  },
  usersByField: (field, text) => {
    const user = db.users.findByField(field, text);
    return user;
  },
  userByEmail: async (email) => {
    const user = await db.users.findByEmail(email);
    return user;
  },
  userCreating: (user) => {
    db.users.create(user);
  },
  updateUser: (id, user) => {
    db.users.update(id, user);
  },
  deleteUser: (id) => {
    db.users.delete(id);
  },
  userAdmin: async (id) => {
    const isAdmin = await db.users.userAdmin(id);
    return isAdmin;
  },
};

module.exports = userService;
