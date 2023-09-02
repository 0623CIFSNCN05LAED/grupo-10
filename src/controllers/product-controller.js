const path = require("path")

module.exports = {
    productCart: (req, res) => {
        res.render("productCart")
    },
    productDetail: (req, res) => {
        res.render("productDetail")
    },
};
