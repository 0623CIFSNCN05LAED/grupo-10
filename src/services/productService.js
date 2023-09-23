const db = require("../data/db");

const productService = {
<<<<<<<<< Temporary merge branch 1
  getProductsLenovo: () => {
    const products = db.products
      .getProducts()
      .filter((product) => product.marca == "Lenovo");
    return products;
  },
  getProductsApple: () => {
    const products = db.products
      .getProducts()
      .filter((product) => product.marca == "Apple");
    return products;
  },
  getProductsAsus: () => {
    const products = db.products
      .getProducts()
      .filter((product) => product.marca == "ASUS");
    return products;
  },
  getProduct: (id) => {
    const product = db.products.findById(id);
    return product;
  },
  produtcCreating: (product) => {
    db.products.create(product);
  },
};

module.exports = productService;
