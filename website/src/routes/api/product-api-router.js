// ************ Require's ************
const { Router } = require("express");
const router = Router();
const path = require("path");

// ************ Controller Require ************
const APIController = require("../../controllers/api/products-API-controller");

//Rutas
//Listado de todos los generos
router.get("/products/:id", APIController.ApiProductDetail);
router.get("/products", APIController.ApiProducts);

module.exports = router;
