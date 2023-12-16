// ************ Require's ************
const { Router } = require("express");
const router = Router();
const path = require("path");
const userGuard = require("../middlewares/user-guard");
const userAdmin = require("../middlewares/user_admin");
const validationsProduct = require("../validations/product-validations");
const validateFormProductCreate = require("../middlewares/validate-form-productCreate");
const validateFormProductEdit = require("../middlewares/validate-form-product-edit");
const upload = require("../middlewares/multer-products");

// ************ Controller Require ************
const productController = require("../controllers/product-controller");

//PRODUCTOS EN GENERAL
router.get("/", productController.products);
router.get("/search", productController.search);

//PRODUCTOS POR MARCA
router.get("/brand/:id/", productController.productsByBrand);

//PRODUCTO POR CATEGORIA
router.get("/category/:id/", productController.productsByCategory);

//CARRITO DE PRODUCTO
router.get("/cart/", userGuard, productController.productCart);

//CREACION
router.get(
  "/create/",
  userGuard,
  userAdmin,
  productController.productCreateForm
);
router.post(
  "/",
  upload.single("image"),
  validationsProduct,
  validateFormProductCreate,
  productController.createProduct
);

//OBTENER UN PRODUCTO
router.get("/:id/", productController.productDetail);

//EDICION DE PRODUCTO
router.get("/edit/:id/", userGuard, userAdmin, productController.productEdit);
router.put(
  "/:id/",
  upload.single("image"),
  validationsProduct,
  validateFormProductEdit,
  productController.productUpdate
);

//ELIMINAR UN PRODUCTO
router.delete("/:id", userGuard, userAdmin, productController.destroy);

module.exports = router;
