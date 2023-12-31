const db = require("../data/db");
const { Product } = require("../database/models");

const productService = {
  getAllProducts: () => {
    return db.products.getProducts();
  },
  getProductsLimit: (offset, limit) => {
    return db.products.getProductsLimit(offset, limit);
  },

  getCountTotalProducts: () => {
    return db.products.getCountTotalProducts();
  },
  searchProducts: (query) => {
    return db.products.getProductsByQuery(query);
  },
  getProduct: async (id) => {
    const product = await db.products.findById(id);
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
  getAllProductsByBrand: (brand) => {
    return db.products.getProductsByBrand(brand);
  },
  getAllCategories: () => {
    return db.products.getCategories();
  },
  getAllProductsByCategory: (category) => {
    return db.products.getProductsByCategory(category);
  },
  getProductById: (id) => {
    return db.products.findById(id);
  },
  getVisitedProducts: () => {
    return db.products.getMostVisitedProducts();
  },
  getOneVisitedProducts: (id) => {
    return db.products.getVisitedProductsById(id);
  },
  updateVisit: (id) => {
    return db.products.findAndUpdateVisit(id);
  },
  findLastProductCreated: () => {
    return db.products.getLastProductCreated();
  },
};
module.exports = productService;
