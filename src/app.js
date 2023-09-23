const express = require("express");
const path = require("path");

const mainRoute = require("./routes/main-router");

const app = express();


app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));
app.use(mainRoute);

const PORT = 4001;
app.listen(PORT, function () {
  console.log(`servidor corriendo en el puerto ${PORT}`);
});


