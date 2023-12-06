const db = require("../data/db");
const { Product } = require("../database/models");

const productService = {
  // getProductsLenovo: () => {
  //   const products = db.products
  //     .getProducts()
  //     .filter((product) => product.brand == "Lenovo");
  //   return products;
  // },
  // getProductsApple: () => {
  //   const products = db.products
  //     .getProducts()
  //     .filter((product) => product.brand == "Apple");
  //   return products;
  // },
  // getProductsAsus: () => {
  //   const products = db.products
  //     .getProducts()
  //     .filter((product) => product.brand == "ASUS");
  //   return products;
  // },

  // productCreating: (product) => {
  //   db.products.create(product);
  // },
  // updateProduct: (id, product) => {
  //   db.products.update(id, product);
  // // },
  // deleteProduct: (id) => {
  //   db.products.delete(id);
  // },

  //--------- TRABAJANDO CON LA BASE DE DATOS---------------

  getAllProducts: (offset, limit) => {
    return db.products.getProducts(offset, limit);
  },

  getCountTotalProducts: ()=>{
    return db.products.getCountTotalProducts();
  },
  searchProducts: (query) => {
    return db.products.getProductsByQuery(query);
  },
  getAppleProducts: () => {
    return Product.findAll({
      where: { brand_id: "apple" },
    });
  },
  getCorsairProducts: () => {
    return Product.findAll({
      where: { brand_id: "corsair" },
    });
  },
  getRazerProducts: () => {
    return Product.findAll({
      where: { brand_id: "razer" },
    });
  },
  getLenovoProducts: () => {
    return Product.findAll({
      where: { brand_id: "lenovo" },
    });
  },
  getAsusProducts: () => {
    return Product.findAll({
      where: { brand_id: "lenovo" },
    });
  },
  pcsCategory: () => {
    return Product.findAll({
      where: { category_id: "pcs" },
    });
  },
  celularesCategory: () => {
    return Product.findAll({
      where: { category_id: "celulares" },
    });
  },
  accesoriosCategory: () => {
    return Product.findAll({
      where: { category_id: "accesorios" },
    });
  },
  getProduct: async (id) => {
    const product = await db.products.findById(id);
    console.log("pase por getProduct");
    return product;
  },
  productCreating: (product) => {
    db.products.create(product);
  },
  updateProduct: (id, product) => {
    db.products.update(id, product);
  },
  deleteProduct: (id) => {
    db.products.delete(id);
  },
  getAllBrands: () => {
    return db.products.getBrands();
  },
  getAllCategories: () => {
    return db.products.getCategories();
  },
  getAllProductsByCategory: (category) => {
    return db.products.getProductsByCategory(category);
  },
};
module.exports = productService;
