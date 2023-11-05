// ************ Require's ************
const { Router, urlencoded } = require("express");
const router = Router();
const validationsRegister = require("../validations/register-validations");
const validateFormRegister = require("../middlewares/validate-form-register");
const validationsLogin = require("../validations/login-validations");
const validateFormLogin = require("../middlewares/validate-form-login");
const path = require("path");
const guestGuard = require("../middlewares/guest-guard");
const userGuard = require("../middlewares/user-guard");
const userAuth = require("../middlewares/user_auth");
const upload = require("../middlewares/multer-users");

// const multer = require("multer");

// const storage = multer.diskStorage({
//   destination: path.join(__dirname, "../../public/images/users"),
//   filename: function (req, file, cb) {
//     cb(
//       null,
//       file.fieldname + "-" + Date.now() + path.extname(file.originalname)
//     );
//   },
// });

// const upload = multer({ storage: storage });

// ************ Controller Require ************
const userController = require("../controllers/user-controller");

//USUARIOS EN GENERAL
router.get("/login/", guestGuard, userController.login);
router.post(
  "/login/",
  urlencoded({
    extended: false,
  }),
  validationsLogin,
  validateFormLogin,
  userController.loginProcess
);

//CREACION DE USUARIO
router.get("/register/", guestGuard, userController.register);
router.post(
  "/register/",
  upload.single("avatar"),
  validationsRegister,
  validateFormRegister,
  userController.createUser
);

//CERRAR SESION
router.get("/logout/", userGuard, userController.logout);

//VISTA DE USUARIO
router.get("/:id/", userGuard, userAuth, userController.userProfile);

module.exports = router;
