const userService = require("../services/userService");

module.exports = async (req, res, next) => {
  const email = req.session.userData?.user_name || req.cookies.userEmail;
  if (email) {
    const user = await userService.userByEmail(email);
    const user_first_name = user.first_name;
    const user_id = user.id;
    isAdmin = await userService.userAdmin(user_id);
    isAdmin
      ? (res.locals.user_admin = user_first_name)
      : (res.locals.user_admin = null);
    res.locals.user_log = user_first_name;
    res.locals.user = user;
  } else {
    res.locals.user_log = null;
    res.locals.user = null;
    res.locals.user_admin = null;
  }
  next();
};

//   const data = req.session.userData;
//   let emailInCookie = req.cookies.userEmail;

//   if (data) {
//     const email = data.user_name;
//     const user = await userService.userByEmail(email);
//     const user_first_name = user.first_name;
//     const user_id = user.id;
//     isAdmin = await userService.userAdmin(user_id);
//     isAdmin
//       ? (res.locals.user_admin = user_first_name)
//       : (res.locals.user_admin = null);
//     res.locals.user_log = user_first_name;
//     res.locals.user = user;
//   } else if (emailInCookie) {
//     let userFromCookie = await userService.userByEmail(emailInCookie);
//     const user_id = userFromCookie.id;
//     isAdmin = await userService.userAdmin(user_id);
//     isAdmin
//       ? (res.locals.user_admin = userFromCookie.first_name)
//       : (res.locals.user_admin = null);
//     res.locals.user_log = userFromCookie.first_name;
//     res.locals.user = userFromCookie;
//   } else {
//     res.locals.user_log = null;
//     res.locals.user = null;
//     res.locals.user_admin = null;
//   }
//   next();
// };
