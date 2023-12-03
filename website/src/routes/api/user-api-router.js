// ************ Require's ************
const { Router } = require("express");
const router = Router();
const path = require("path");

// ************ Controller Require ************
const APIController = require("../../controllers/api/api-users-controller");

//Rutas
//Listado de todos los usuarios
router.get("/users/:id", APIController.APiUserDetail);
router.get("/users", APIController.ApiUsers);

module.exports = router;
