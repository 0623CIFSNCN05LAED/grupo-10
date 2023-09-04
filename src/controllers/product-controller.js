const path = require("path")

module.exports = {
    productCart: (req, res) => {
        res.render("products/productCart")
    },
    productDetail: (req, res) => {
        res.render("products/productDetail")
    },
};
