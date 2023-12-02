const productService = require("../../services/productService");

module.exports = {
  ApiProducts: (req, res) => {
    productService.getAllProducts().then((products) => {
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
  ApiProductDetail: async (req, res) => {
    const id = req.params.id;
    const product = await productService.getProduct(id);
    let respuesta = {
      meta: {
        status: 200,
        url: "api/products",
      },
      data: product,
    };
    res.json(respuesta);
  },
};
