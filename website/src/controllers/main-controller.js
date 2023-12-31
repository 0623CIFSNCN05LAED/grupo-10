const productService = require("../services/productService");

module.exports = {
  home: async (req, res) => {
    let mostVisitedProducts = await productService.getVisitedProducts();
    const perPage = 4;
    const offset = 0;
    const defaultProducts = await productService.getProductsLimit(
      offset,
      perPage
    );
    mostVisitedProducts.length == 0
      ? (mostVisitedProducts = defaultProducts)
      : "";

    return res.render("index", { mostVisitedProducts });
  },
  notFound: (req, res) => {
    res.status(404).render("404");
  },
};
