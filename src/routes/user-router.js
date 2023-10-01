// ************ Require's ************
const { Router } = require("express");
const router = Router();
const path = require("path");

const { body } = require("express-validator");

const validations = [
  body("name").notEmpty().withMessage("Tienes que escribir un nombre"),
  body("last_name").notEmpty().withMessage("Tienes que escribir un apellido"),
  body("email")
    .notEmpty()
    .withMessage("Tienes que escribir un correo eléctrónico")
    .bail()
    .isEmail()
    .withMessage("Debes ingresar un formato de correo válido"),
  body("password").notEmpty().withMessage("Tienes que escribir una contraseña"),
  body("password_repeat")
    .notEmpty()
    .withMessage("Tienes que repetir la contraseña"),
  body("avatar").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpg", ".png", ".gif"];

    if (!file) {
      return true;
      /*throw new Error("Tienes que subir una imagen");*/
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `Las extensiones aceptadas son ${acceptedExtensions.join(", ")}`
        );
      }
    }
    return true;
  }),
];

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
  validations,
  userController.createUser
);

module.exports = router;
