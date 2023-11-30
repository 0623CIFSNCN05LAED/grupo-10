const userService = require("../services/userService");

module.exports = async (req, res, next) => {
  const data = req.session.userData;

  let emailInCookie = req.cookies.userEmail;

  if (data) {
    const email = data.user_name;
    const user = await userService.userByEmail(email);
    const user_first_name = user.first_name;
    res.locals.user_log = user_first_name;
    res.locals.user = user;
  } else if (emailInCookie) {
    let userFromCookie = await userService.userByEmail(emailInCookie);
    res.locals.user_log = userFromCookie.first_name;
    res.locals.user = userFromCookie;
  } else {
    res.locals.user_log = null;
    res.locals.user = null;
  }
  next();
};
