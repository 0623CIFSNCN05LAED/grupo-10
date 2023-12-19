const { validationResult } = require("express-validator");
const productService = require("../services/productService");

module.exports = async (req, res, next) => {
  const brandsPromise =  productService.getAllBrands();
  const categoriesPromise =  productService.getAllCategories();
  const [brands, categories] = await Promise.all([brandsPromise, categoriesPromise]);
  const resultValidation = validationResult(req);
  const id = req.params.id;
  const product = await productService.getProduct(id);
  if (resultValidation.errors.length > 0) {
    return res.render("products/productEdit", {
      errors: resultValidation.mapped(),
      oldData: req.body,
      product: product,
      brands,
      categories,
    });
  }
  next();
};
