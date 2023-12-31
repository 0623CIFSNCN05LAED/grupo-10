const { Router } = require("express");

const mainController = require("../controllers/main-controller");
const router = Router();
router.get("/", mainController.home);

const productRouter = require("./product-router");
router.use("/products", productRouter);

const userRouter = require("./user-router");
router.use("/users", userRouter);

const APIRouter = require("./api/main-api-router");
router.use("/api", APIRouter);

// Ruta para manejar errores 404
router.use(mainController.notFound);

module.exports = router;
