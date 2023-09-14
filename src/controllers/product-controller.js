const path = require("path");

module.exports = {
  productCart: (req, res) => {
    res.render("products/productCart");
  },
  productDetail: (req, res) => {
    res.render("products/productDetail");
  },
  productCreate: (req, res) => {
    res.render("products/productCreate");
  },
  productEdit: (req, res) => {
    res.render("products/productEdit");
  },
};
