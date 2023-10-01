// ************ Require's ************
const { Router } = require("express");
const router = Router();
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
router.post("/register/", upload.single("avatar"), userController.createUser);

module.exports = router;
