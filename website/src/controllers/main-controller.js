const path = require("path");
const productService = require("../services/productService");

module.exports = {
  home: async (req, res) => {
    let mostVisitedProducts = await productService.getVisitedProducts();
    const perPage = 4;
    const offset = 1;
    const defaultProducts = await productService.getProductsLimit(
      offset,
      perPage
    );
    mostVisitedProducts.length == 0
      ? (mostVisitedProducts = defaultProducts)
      : "";

    return res.render("index", { mostVisitedProducts });
  },

  //   if (mostVisitedProducts.length > 0) {
  //     res.render("index", { mostVisitedProducts });
  //   } else {
  //     res.render("index", { mostVisitedProducts: defaultProducts });
  //   }
  // },
};
