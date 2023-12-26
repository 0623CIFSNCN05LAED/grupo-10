const userService = require("../services/userService");

module.exports = async (req, res, next) => {
  const email = req.session.userData?.user_name || req.cookies.userEmail;
  const user = await userService.userByEmail(email);
  const routeUserId = req.params.id;

  if (user.id === routeUserId) {
    next();
  } else {
    res.redirect("/");
  }
};
