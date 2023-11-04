const users = require("../data/users/users");

module.exports = (req, res, next) => {
  const data = req.session.userData;
  const email = data.user_name;
  const user = users.findByEmail(email);
  const user_id = user.id;
  const route_user_id = req.params.id;
  const checkId = user_id === route_user_id;

  if (checkId) {
    next();
  } else {
    res.redirect("/");
  }
};
