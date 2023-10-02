// ************ Require's ************
const { Router } = require("express");
const router = Router();
const validationsRegister = require("../validations/register-validations");
const validateFormRegister = require("../middlewares/validate-form-register");
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

//CREACION DE USUARIO
router.get("/register/", userController.register);
router.post(
  "/register/",
  upload.single("avatar"),
  validationsRegister,
  validateFormRegister,
  userController.createUser
);

module.exports = router;
