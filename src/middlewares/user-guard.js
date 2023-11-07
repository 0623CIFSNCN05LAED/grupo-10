module.exports = (req, res, next) => {
  if (req.session.userData || req.cookies.userEmail) {
    next();
  } else {
    res.redirect("/users/login");
  }
};
