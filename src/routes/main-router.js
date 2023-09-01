const {Router} = require ("express");

const mainController = require( "../controllers/main-controller");

const router = Router();
router.get("/", mainController.home);
router.get("/login", mainController.login);
router.get("/register", mainController.register);
router.get("/productCart", mainController.productCart);
router.get("/productDetail", mainController.productDetail);


module.exports = router;