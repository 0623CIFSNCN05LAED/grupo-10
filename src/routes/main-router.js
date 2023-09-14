const { Router } = require("express");

const mainController = require("../controllers/main-controller");
const router = Router();
router.get("/", mainController.home);

const productRouter = require("../routes/product-router");
router.use(productRouter);

const userRouter = require("./user-router");
router.use(userRouter);

module.exports = router;
