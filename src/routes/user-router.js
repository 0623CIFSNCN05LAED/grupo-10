// ************ Require's ************
const { Router, urlencoded } = require("express");
const router = Router();
const validationsRegister = require("../validations/register-validations");
const validateFormRegister = require("../middlewares/validate-form-register");
const validationsLogin = require('../validations/login-validations');
const validateFormLogin = require('../middlewares/validate-form-login')
const path = require("path");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../public/images/users"),
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

// ************ Controller Require ************
const userController = require("../controllers/user-controller");

//USUARIOS EN GENERAL
router.get("/login/", userController.login);
router.post(
  "/login/",
  urlencoded({
    extended: false,
  }),
  validationsLogin,
  validateFormLogin.correo,
  validateFormLogin.password,
  userController.loginProcess,
);

//CREACION DE USUARIO
router.get("/register/", userController.register);
router.post(
  "/register/",
  upload.single("avatar"),
  validationsRegister,
  validateFormRegister.campo,
  validateFormRegister.correo,
  userController.createUser
);

module.exports = router;
