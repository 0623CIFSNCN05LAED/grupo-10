const path = require("path");

module.exports = {
  home: (req, res) => {
    let user_name = null;
    const data = req.session.userData;
    if (data) {
      user_name = data.user_name;
    }
    res.render("index", { user_name: user_name });
  },
};
