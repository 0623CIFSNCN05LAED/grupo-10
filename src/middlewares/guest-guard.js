const users = require("../data/users/users");

module.exports = (req, res, next) => {
  if (!req.session.userData) {
    next();
  } else {
    const data = req.session.userData;
    const email = data.user_name;
    const user = users.findByEmail(email);
    const user_id = user.id;
    res.redirect("/users/" + user_id);
  }
};
