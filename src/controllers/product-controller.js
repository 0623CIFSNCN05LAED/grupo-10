const path = require("path");
const productService = require("../services/productService");
module.exports = {
  products: (req, res) => {
    let user_name = null;
    const data = req.session.userData;
    if (data) {
      user_name = data.user_name;
    }
    const productsLenovo = productService.getProductsLenovo();
    const productsApple = productService.getProductsApple();
    const productsAsus = productService.getProductsAsus();

    res.render("products/products", {
      productsLenovo,
      productsApple,
      productsAsus,
      user_name,
    });
  },
  productCart: (req, res) => {
    let user_name = null;
    const data = req.session.userData;
    if (data) {
      user_name = data.user_name;
    }
    res.render("products/productCart", { user_name });
  },
  //Detalle de un producto
  productDetail: (req, res) => {
    const id = req.params.id;
    const product = productService.getProduct(id);

    let user_name = null;
    const data = req.session.userData;
    if (data) {
      user_name = data.user_name;
    }
    res.render("products/productDetail", { product, user_name });
  },

  // VISTA FORMULARIO DE CREACION PRODUCTO
  productCreateForm: (req, res) => {
    let user_name = null;
    const data = req.session.userData;
    if (data) {
      user_name = data.user_name;
    }
    res.render("products/productCreate", { user_name });
  },
  //METODO DE CREACION DE PRODUCTOS
  createProduct: (req, res) => {
    const product = {
      name: req.body.name,
      price: Number(req.body.price),
      brand: req.body.brand,
      category: req.body.category,
      description: req.body.description,
      masBuscado: req.body.masBuscado,
      imagen: req.file ? req.file.filename : "default.png",
    };
    productService.produtcCreating(product);
    res.redirect("products");
  },
  // Update - Form to edit one product
  productEdit: (req, res) => {
    let user_name = null;
    const data = req.session.userData;
    if (data) {
      user_name = data.user_name;
    }

    const id = req.params.id;
    const product = productService.getProduct(id);
    res.render("products/productEdit", { product, user_name });
  },
  // Update - Method to update
  productUpdate: (req, res) => {
    const product = {
      name: req.body.name,
      price: Number(req.body.price),
      brand: req.body.brand,
      category: req.body.category,
      description: req.body.description,
    };
    const id = req.params.id;
    const imagen = req.file
      ? req.file.filename
      : productService.getProduct(id).imagen;
    product.imagen = imagen;
    productService.updateProduct(id, product);
    res.redirect("/products");
  },

  // Delete - Delete one product from DB
  destroy: (req, res) => {
    const id = req.params.id;
    productService.deleteProduct(id);
    res.redirect("/products");
  },
};
