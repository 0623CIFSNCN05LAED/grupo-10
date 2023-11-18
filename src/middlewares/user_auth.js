const userService = require("../services/userService");

module.exports = async (req, res, next) => {
  const data = req.session.userData;
  let emailInCookie = req.cookies.userEmail;
  let email = "";
  let user_id = "";
  const route_user_id = req.params.id;
  let checkId = false;
  console.log("entré a user_auth");

  if (data) {
    email = data.user_name;
    const user = await userService.userByEmail(email);
    user_id = user.id;
    checkId = user_id === route_user_id;
  } else if (emailInCookie) {
    req.session.userData = { user_name: emailInCookie };
    email = emailInCookie;
    const userInCookie = await userService.userByEmail(email);
    user_id = userInCookie.id;
    checkId = user_id === route_user_id;
  }

  if (checkId) {
    next();
  } else {
    res.redirect("/");
  }
};
