// ************ Require's ************
const express = require("express");
const path = require("path");
const methodOverride = require("method-override"); // para usar los metodos PUT y DELETE

// ************ express() ************
const app = express();

// ************ Template Engine ************
app.set("view engine", "ejs");
app.set("views", "./src/views");

// ************ Middlewares ************
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));
app.use(methodOverride("_method"));

// ************ Route System require and use() ************
const mainRoute = require("./routes/main-router");
app.use(mainRoute);

// ************ Server creates ************
const PORT = 4001;
app.listen(PORT, function () {
  console.log(`servidor corriendo en el puerto ${PORT}`);
});
