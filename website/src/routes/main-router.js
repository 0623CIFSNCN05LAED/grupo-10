const { Router } = require("express");

const mainController = require("../controllers/main-controller");
const router = Router();
router.get("/", mainController.home);

const productRouter = require("./product-router");
router.use("/products", productRouter);

const userRouter = require("./user-router");
router.use("/users", userRouter);

const APIRouter = require("./api-router");
router.use("/api", APIRouter);

module.exports = router;
