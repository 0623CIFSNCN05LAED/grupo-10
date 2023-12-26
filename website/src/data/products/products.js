const { v4: uuidv4 } = require("uuid");
const { Product } = require("../../database/models");
const { ProductBrand } = require("../../database/models");
const { ProductCategory } = require("../../database/models");
const { MostVisitedProducts } = require("../../database/models");

const Sequelize = require("sequelize");

module.exports = {
  getProducts: async function () {
    return await Product.findAll({
      include: ["productBrand", "productCategory", "mostVisitedProducts"],
    });
  },
  getProductsLimit: async (offset, limit) => {
    const products = await Product.findAll({
      include: ["productBrand", "productCategory", "mostVisitedProducts"],
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
      include: ["productBrand", "productCategory", "mostVisitedProducts"],
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
      include: ["productBrand", "productCategory", "mostVisitedProducts"],
    });
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
  delete: async function (id) {
    console.log(`Deleting product with id ${id}`);
    await MostVisitedProducts.destroy({ where: { product_id: id } });
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
      include: ["productBrand", "productCategory", "mostVisitedProducts"],
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
      include: ["productBrand", "productCategory", "mostVisitedProducts"],
    });
    return productsByCategory;
  },
  getMostVisitedProducts: async function () {
    const mostVisitedProducts = await MostVisitedProducts.findAll({
      order: [["visits", "DESC"]],
      limit: 4,
    });
    const mostVisitedProductIds = mostVisitedProducts.map(
      (product) => product.product_id
    );
    const mostVisitedProductsData = await Product.findAll({
      where: { id: mostVisitedProductIds },
      include: ["productBrand", "productCategory", "mostVisitedProducts"],
    });
    return mostVisitedProductsData;
  },
  getVisitedProductsById: async function (id) {
    const visitedProduct = await MostVisitedProducts.findByPk(id);
    return visitedProduct;
  },
  findAndUpdateVisit: async function (id) {
    try {
      const visitedProduct = await MostVisitedProducts.findOne({
        where: { product_id: id },
      });

      if (visitedProduct) {
        visitedProduct.visits += 1;
        await visitedProduct.save();
      } else {
        await MostVisitedProducts.create({
          id: uuidv4(),
          visits: 1,
          product_id: id,
        });
      }
    } catch (error) {
      console.error("Error en findAndUpdateVisit: ", error);
    }
  },
  getLastProductCreated: async function () {
    try {
      const lastProductCreated = await Product.findOne({
        order: [["created_at", "DESC"]],
        limit: 1,
        include: ["productBrand", "productCategory", "mostVisitedProducts"],
      });
      return lastProductCreated;
    } catch (error) {
      console.error("Error al obtener el último producto:", error);
      throw error;
    }
  },
};
