const db = require("../data/db");

const userService = {
  getUsers: () => {
    const users = db.users.getUsers();
    return users;
  },
  getUser: (id) => {
    const user = db.users.findById();
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
