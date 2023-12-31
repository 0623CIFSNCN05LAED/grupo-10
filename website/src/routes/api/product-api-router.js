// ************ Require's ************
const { Router } = require("express");
const router = Router();

// ************ Controller Require ************
const APIController = require("../../controllers/api/api-products-controller");

//Rutas
router.get("/mostVisited", APIController.ApiMostVisited);
router.get("/last", APIController.ApiLastProduct);
router.get("/:id", APIController.ApiProductDetail);
router.get("/", APIController.ApiProducts);

module.exports = router;
