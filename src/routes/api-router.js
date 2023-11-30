// ************ Require's ************
const { Router } = require("express");
const router = Router();
const path = require("path");

// ************ Controller Require ************
const APIController = require("../controllers/api-controller");

//Rutas
//Listado de todos los generos
router.get("/", APIController.ApiProducts);

module.exports = router;
