const db = require("../data/db");

const userService = {
  getUsers: async () => {
    const users = await db.users.getUsers();
    return users;
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
};

module.exports = userService;
