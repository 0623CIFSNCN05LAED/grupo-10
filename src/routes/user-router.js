const { Router } = require("express");
const userController = require("../controllers/user-controller");
const router = Router();

router.get("/login/", userController.login);

//CREACION DE USUARIO
router.get("/register/", userController.register);
router.post(
  "/register/",
  /*upload.single("imagen"),*/ userController.createUser
);

module.exports = router;
