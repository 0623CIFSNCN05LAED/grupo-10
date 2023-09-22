const path = require("path");
const productService = require("../services/productService")
module.exports = {
  products:(req, res) =>{
    const productsLenovo = productService.getProductsLenovo();
    const productsApple = productService.getProductsApple();
    const productsAsus = productService.getProductsAsus();
   
    res.render("products/products",{
      productsLenovo,
      productsApple,
      productsAsus,
    });
  },
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
