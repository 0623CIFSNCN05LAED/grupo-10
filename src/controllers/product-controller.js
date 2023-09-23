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

  // VISTA FORMULARIO DE CREACION PRODUCTO
  productCreate: (req, res) => {
    res.render("products/productCreate");
  },
  //METODO DE CREACION DE PRODUCTOS
  createProduct:(req, res) => {
    const product = req.body;
    console.log(product);
    res.redirect("products/products");
  },
  productEdit: (req, res) => {
    res.render("products/productEdit");
  },
};
