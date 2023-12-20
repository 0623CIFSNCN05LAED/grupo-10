const { Router } = require("express");
const router = Router();

const APIProductRouter = require("./product-api-router");
router.use("/products", APIProductRouter);

const APIUserRouter = require("./user-api-router");
router.use("/users", APIUserRouter);

module.exports = router;
