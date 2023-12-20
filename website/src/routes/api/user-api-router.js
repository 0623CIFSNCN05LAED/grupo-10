// ************ Require's ************
const { Router } = require("express");
const router = Router();
const path = require("path");

// ************ Controller Require ************
const APIController = require("../../controllers/api/api-users-controller");

//Rutas
//Listado de todos los usuarios
router.get("/last", APIController.ApiLastUser);
router.get("/:id", APIController.APiUserDetail);
router.get("/", APIController.ApiUsers);

module.exports = router;
