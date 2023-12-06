const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const { Product } = require("../../database/models");
const { ProductBrand } = require("../../database/models");
const { ProductCategory } = require("../../database/models");

const Sequelize = require("sequelize");

module.exports = {
  getProducts: async function () {
    //const productsFilePath = path.join(__dirname, "./productsDataBase.json");
    //const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    return await Product.findAll({
      include: ["productBrand", "productCategory"],
    });
  },
  getPorudctsLimit: async (offset, limit) => {
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
  // saveProducts: function (products) {
  //   const productsFilePath = path.join(__dirname, "./productsDataBase.json");
  //   fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
  // },
  create: async function (product) {
    console.log(`Creating product ${product.name}`);
    //const products = this.getProducts();
    const newProduct = {
      id: uuidv4(),
      ...product,
    };
    // products.push(newProduct);
    // this.saveProducts(products);
    return await Product.create(newProduct);
  },
  findById: async function (id) {
    //const product = this.getProducts().find((producto) => producto.id == id);
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
