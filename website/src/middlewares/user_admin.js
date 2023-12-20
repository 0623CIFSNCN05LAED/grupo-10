const userService = require("../services/userService");

module.exports = async (req, res, next) => {
  const email = req.session.userData?.user_name || req.cookies.userEmail;
  if (email) {
    const user = await userService.userByEmail(email);
    const isAdmin = await userService.userAdmin(user.id);
    return isAdmin ? next() : res.redirect("/");
  }

  return res.redirect("/");

  // const data = req.session.userData;
  // let emailInCookie = req.cookies.userEmail;
  // let isAdmin = false;

  // if (data) {
  //   const email = data.user_name;
  //   const user = await userService.userByEmail(email);
  //   const user_id = user.id;
  //   isAdmin = await userService.userAdmin(user_id);

  //   isAdmin ? next() : res.redirect("/");
  // } else if (emailInCookie) {
  //   let userFromCookie = await userService.userByEmail(emailInCookie);
  //   const user_id = userFromCookie.id;
  //   isAdmin = await userService.userAdmin(user_id);

  //   isAdmin ? next() : res.redirect("/");
  // }
};
