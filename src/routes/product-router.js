const { Router } = require("express");
const productController = require("../controllers/product-controller");
const router = Router();
router.get("/productCart", productController.productCart);
router.get("/productDetail", productController.productDetail);
router.get("/productCreate", productController.productCreate);
router.get("/productEdit", productController.productEdit);

module.exports = router;
