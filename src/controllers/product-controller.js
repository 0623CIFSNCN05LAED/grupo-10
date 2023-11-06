const path = require("path");
const productService = require("../services/productService");
const { Products } = require('../database/models');
module.exports = {
  products: (req, res) => {
    //let user_name = null;
    //const data = req.session.userData;
    //if (data) {
    //user_name = data.user_name;
    //}
    const productsLenovo = productService.getProductsLenovo();
    const productsApple = productService.getProductsApple();
    const productsAsus = productService.getProductsAsus();

    res.render("products/products", {
      productsLenovo,
      productsApple,
      productsAsus,
    });
  },
  
  productCart: (req, res) => {
    res.render("products/productCart");
  },
  //Detalle de un producto
  productDetail: (req, res) => {
    const id = req.params.id;
    const product = productService.getProduct(id);

    res.render("products/productDetail", { product });
  },

  // VISTA FORMULARIO DE CREACION PRODUCTO
  productCreateForm: (req, res) => {
    res.render("products/productCreate");
  },
  //METODO DE CREACION DE PRODUCTOS
  createProduct: (req, res) => {
    const product = {
      name: req.body.name,
      price: Number(req.body.price),
      brand: req.body.brand,
      category: req.body.category,
      description: req.body.description,
      masBuscado: req.body.masBuscado,
      image: req.file ? req.file.filename : "default.png",
    };
    productService.produtcCreating(product);
    res.redirect("products");
  },
  // Update - Form to edit one product
  productEdit: (req, res) => {
    const id = req.params.id;
    const product = productService.getProduct(id);
    res.render("products/productEdit", { product });
  },
  // Update - Method to update
  productUpdate: (req, res) => {
    const product = {
      name: req.body.name,
      price: Number(req.body.price),
      brand: req.body.brand,
      category: req.body.category,
      description: req.body.description,
    };
    const id = req.params.id;
    const image = req.file
      ? req.file.filename
      : productService.getProduct(id).image;
    product.image = image;
    productService.updateProduct(id, product);
    res.redirect("/products");
  },

  // Delete - Delete one product from DB
  destroy: (req, res) => {
    const id = req.params.id;
    productService.deleteProduct(id);
    res.redirect("/products");
  },
          //--------- TRABAJANDO CON LA BASE DE DATOS---------------

  list: (req, res) => {
    const productsLenovo = Products.findAll().then((productsLenovo) => {
      res.render('products/productsList', { productsLenovo })
    })
  },


};




              
