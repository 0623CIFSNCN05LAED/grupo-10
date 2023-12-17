const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const { Product } = require("../../database/models");
const { ProductBrand } = require("../../database/models");
const { ProductCategory } = require("../../database/models");

const Sequelize = require("sequelize");

module.exports = {
  getProducts: async function () {
    return await Product.findAll({
      include: ["productBrand", "productCategory", "mostVisitedProducts"],
    });
  },
  getProductsLimit: async (offset, limit) => {
    const products = await Product.findAll({
      include: ["productBrand", "productCategory"],
      offset,
      limit,
    });

    return products;
  },
  getCountTotalProducts: async () => {
    const count = await Product.count();
    return count;
  },
  getProductsByQuery: async function (query) {
    const productsByQuery = await Product.findAll({
      where: {
        name: {
          [Sequelize.Op.like]: "%" + query + "%",
        },
      },
      include: ["productBrand", "productCategory"],
    });
    return productsByQuery;
  },

  create: async function (product) {
    console.log(`Creating product ${product.name}`);
    const newProduct = {
      id: uuidv4(),
      ...product,
    };

    return await Product.create(newProduct);
  },
  findById: async function (id) {
    const product = await Product.findByPk(id, {
      include: ["productBrand", "productCategory"],
    });
    console.log("pase por findById");
    return product;
  },
  update: function (id, product) {
    console.log(`Actualizando producto ${product.name}`);

    return Product.update(
      {
        name: product.name,
        price: product.price,
        brand_id: product.brand_id,
        category_id: product.category_id,
        description: product.description,
        image: product.image,
      },
      { where: { id } }
    );
  },
  delete: function (id) {
    console.log(`Deleting product with id ${id}`);
    return Product.destroy({ where: { id } });
  },
  getBrands: async function () {
    return await ProductBrand.findAll();
  },

  getProductsByBrand: async function (brand) {
    const productsByBrand = await Product.findAll({
      where: {
        brand_id: brand,
      },
      include: ["productBrand", "productCategory"],
    });
    return productsByBrand;
  },

  getCategories: async function () {
    return await ProductCategory.findAll();
  },
  getProductsByCategory: async function (category) {
    const productsByCategory = await Product.findAll({
      where: {
        category_id: category,
      },
      include: ["productBrand", "productCategory"],
    });
    return productsByCategory;
  },
};
