const userService = require("../services/userService");

module.exports = async (req, res, next) => {
  if (!req.session.userData) {
    next();
  } else {
    const data = req.session.userData;
    const email = data.user_name;
    const user = await userService.userByEmail(email);
    const user_id = user.id;
    res.redirect("/users/" + user_id);
  }
};
