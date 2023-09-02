const {Router} = require ("express");
const productController = require("../controllers/product-controller");
const router = Router ();
router.get("/productCart", productController.productCart);
router.get("/productDetail", productController.productDetail);

module.exports = router