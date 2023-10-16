// ************ Require's ************
const { Router } = require("express");
const router = Router();
const path = require("path");
const userGuard = require("../middlewares/user-guard");
const validationsProduct = require("../validations/product-validations");
const validationFormProductCreate = require("../middlewares/validate-form-productCreate");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../public/images/products"),
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

// ************ Controller Require ************
const productController = require("../controllers/product-controller");
const validateFormProductCreate = require("../middlewares/validate-form-productCreate");

//PRODUCTOS EN GENERAL
router.get("/", productController.products);

//CARRITO DE PRODUCTO
router.get("/cart/", userGuard, productController.productCart);

//CREACION
router.get("/create/", userGuard, productController.productCreateForm);
router.post(
  "/",
  upload.single("imagen"),
  validationsProduct,
  validateFormProductCreate,
  productController.createProduct
);

//OBTENER UN PRODUCTO
router.get("/:id/", productController.productDetail);

//EDICION DE PRODUCTO
router.get("/edit/:id/", userGuard, productController.productEdit);
router.put("/:id/", upload.single("imagen"), productController.productUpdate);

//ELIMINAR UN PRODUCTO
router.delete("/:id", productController.destroy);

module.exports = router;
