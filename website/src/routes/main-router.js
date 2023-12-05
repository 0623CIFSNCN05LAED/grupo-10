const { Router } = require("express");

const mainController = require("../controllers/main-controller");
const router = Router();
router.get("/", mainController.home);

const productRouter = require("./product-router");
router.use("/products", productRouter);

const userRouter = require("./user-router");
router.use("/users", userRouter);

const APIProductRouter = require("./api/product-api-router");
router.use("/api", APIProductRouter);

const APIUserRouter = require("./api/user-api-router");
router.use("/api", APIUserRouter);

module.exports = router;
