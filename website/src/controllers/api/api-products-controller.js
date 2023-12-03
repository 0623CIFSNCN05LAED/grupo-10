const productService = require("../../services/productService");

module.exports = {
  ApiProducts: async (req, res) => {
    //const categoriesinBD = await productService.getAllCategories();
    //const categoriesArray = Object.values(categoriesinBD);
    //const categories = categoriesArray.map((objeto) => objeto.dataValues.id);

    const prodsByCategory = {};

    const products = await productService.getAllProducts();
    function countProductsBycategory(products) {
      products.forEach((product) => {
        const category = product.category_id;
        if (!prodsByCategory[category]) {
          prodsByCategory[category] = 1;
        } else {
          prodsByCategory[category] += 1;
        }
      });
      return prodsByCategory;
    }

    const productsToApi = products.map(
      ({ id, name, description, brand_id, category_id }) => ({
        id,
        name,
        description,
        others: [{ brand: brand_id }, { category: category_id }],
        detail: req.originalUrl + "/" + id,
      })
    );

    let respuesta = {
      meta: {
        status: 200,
        count: products.length,
        countByCategory: countProductsBycategory(products),
        url: req.originalUrl,
      },
      data: productsToApi,
    };
    res.json(respuesta);
  },

  ApiProductDetail: async (req, res) => {
    const id = req.params.id;
    const product = await productService.getProduct(id);
    let respuesta = {
      meta: {
        status: 200,
        url: req.originalUrl,
      },
      data: product,
    };
    res.json(respuesta);
  },
};
