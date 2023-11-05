const users = require("../data/users/users");

module.exports = (req, res, next) => {
  const data = req.session.userData;
  if (data) {
    const email = data.user_name;
    const user = users.findByEmail(email);
    const user_first_name = user.first_name;
    res.locals.user_log = user_first_name;
    res.locals.user = user;
  } else {
    res.locals.user_log = null;
    res.locals.user = null;
  }
  next();
};
