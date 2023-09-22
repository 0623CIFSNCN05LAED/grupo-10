const { Router } = require("express");
const productController = require("../controllers/product-controller");
const router = Router();
router.get("/products/", productController.products)
router.get("/cart/", productController.productCart);
router.get("/create/", productController.productCreate);
router.get("/:id/", productController.productDetail);
router.get("/edit/:id/", productController.productEdit);

module.exports = router;
