const productService = require("../services/productService");
const { Product } = require("../database/models");
const Sequelize = require("sequelize");

module.exports = {
  ApiProducts: (req, res) => {
    Product.findAll().then((products) => {
      let respuesta = {
        meta: {
          status: 200,
          total: products.length,
          url: "api/products",
        },
        data: products,
      };
      res.json(respuesta);
    });
  },
};
