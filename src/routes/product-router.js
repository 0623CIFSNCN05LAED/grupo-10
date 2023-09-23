const { Router } = require("express");
const productController = require("../controllers/product-controller");
const router = Router();
//PRODUCTOS EN GENERAL
router.get("/products/", productController.products)

//CARRITO DE PRODUCTO
router.get("/cart/", productController.productCart);

//CREACION
router.get("/create/", productController.productCreateForm);
router.post("/", productController.createProduct);

//EDICION DE PRODUCTO
router.get("/:id/", productController.productDetail);
router.get("/edit/:id/", productController.productEdit);

module.exports = router;
