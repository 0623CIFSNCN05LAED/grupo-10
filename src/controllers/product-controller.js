const path = require("path");
const productService = require("../services/productService");

module.exports = {
    productCart: (req, res) => {
    res.render("products/productCart");
  },
  //Detalle de un producto
  productDetail: (req, res) => {
    const id = req.params.id;
    const product = productService.getProduct(id);

    res.render("products/productDetail", { product });
  },

  // VISTA FORMULARIO DE CREACION PRODUCTO
  productCreateForm: (req, res) => {
    res.render("products/productCreate");
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
      image: req.file ? req.file.filename : "default.png",
    };
    productService.produtcCreating(product);
    res.redirect("products");
  },
  // Update - Form to edit one product
  productEdit: (req, res) => {
    const id = req.params.id;
    const product = productService.getProduct(id);
    res.render("products/productEdit", { product });
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
    const image = req.file
      ? req.file.filename
      : productService.getProduct(id).image;
    product.image = image;
    productService.updateProduct(id, product);
    res.redirect("/products");
  },

  // Delete - Delete one product from DB
  destroy: (req, res) => {
    const id = req.params.id;
    productService.deleteProduct(id);
    res.redirect("/products");
  },
          //--------- TRABAJANDO CON LA BASE DE DATOS---------------

  products: (req, res) => {
    productService.getAllProducts().then((products) => {
      res.render('products/productsList', { products })
     })
  },
  lenovo: (req, res) => {
    productService.getLenovoProducts().then((products) => {
      res.render('products/lenovo', { products })
     })
  },
  apple: (req, res) => {
    productService.getAppleProducts().then((products) => {
      res.render('products/apple', { products })
     })
  },
  corsair: (req, res) => {
    productService.getCorsairProducts().then((products) => {
      res.render('products/corsair', { products })
     })
  },
  asus: (req, res) => {
    productService.getAsusProducts().then((products) => {
      res.render('products/asus', { products })
     })
  },
  razer: (req, res) => {
    productService.getRazerProducts().then((products) => {
      res.render('products/razer', { products })
     })
  },
  productsCategoryPcs: (req, res)=>{
    productService.pcsCategory().then((products)=>{
      res.render('products/pcs', {products})
    })
  },
  productsCategoryCelulares: (req, res)=>{
    productService.celularesCategory().then((products)=>{
      res.render('products/celulares', {products})
    })
  },
  productsCategoryAccesosrios: (req, res)=>{
    productService.accesoriosCategory().then((products)=>{
      res.render('products/accesorios', {products})
    })
  },


};




              
