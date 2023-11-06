const db = require("../data/db");
const { Product } = require('../database/models');

const productService = {
  getProductsLenovo: () => {
    const products = db.products
      .getProducts()
      .filter((product) => product.brand == "Lenovo");
    return products;
  },
  getProductsApple: () => {
    const products = db.products
      .getProducts()
      .filter((product) => product.brand == "Apple");
    return products;
  },
  getProductsAsus: () => {
    const products = db.products
      .getProducts()
      .filter((product) => product.brand == "ASUS");
    return products;
  },
  getProduct: (id) => {
    const product = db.products.findById(id);
    return product;
  },
  produtcCreating: (product) => {
    db.products.create(product);
  },
  updateProduct: (id, product) => {
    db.products.update(id, product);
  },
  deleteProduct: (id) => {
    db.products.delete(id);
  },

  //--------- TRABAJANDO CON LA BASE DE DATOS---------------

  getAllProducts: ()=>{
    return Product.findAll()
  }
};

module.exports = productService;
