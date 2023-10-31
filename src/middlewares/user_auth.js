module.exports = (req, res, next) => {
  const data = req.session.userData;
  if (data) {
    res.locals.user_log = data.user_name;
  } else {
    res.locals.user_log = null;
  }
  next();
};

// let user_name = null;
// const data = req.session.userData;
// if (data) {
//   user_name = data.user_name;
// }
