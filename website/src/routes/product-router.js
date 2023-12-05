// ************ Require's ************
const { Router } = require("express");
const router = Router();
const path = require("path");
const userGuard = require("../middlewares/user-guard");
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
router.get("/lenovo/", productController.lenovo);
router.get("/apple/", productController.apple);
router.get("/asus/", productController.asus);
router.get("/corsair/", productController.corsair);
router.get("/razer/", productController.razer);

//PRODUCTO POR CATEGORIA
router.get("/pcs/", productController.productsCategoryPcs);
router.get("/celulares/", productController.productsCategoryCelulares);
router.get("/accesorios/", productController.productsCategoryAccesosrios);
//CARRITO DE PRODUCTO
router.get("/cart/", userGuard, productController.productCart);

//CREACION
router.get("/create/", userGuard, productController.productCreateForm);
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
router.get("/edit/:id/", userGuard, productController.productEdit);
router.put(
  "/:id/",
  upload.single("image"),
  validationsProduct,
  validateFormProductEdit,
  productController.productUpdate
);

//ELIMINAR UN PRODUCTO
router.delete("/:id", productController.destroy);

module.exports = router;
