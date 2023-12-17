const path = require("path");
const productService = require("../services/productService");
const { log } = require("console");

module.exports = {
  productCart: (req, res) => {
    res.render("products/productCart");
  },
  //Detalle de un producto
  productDetail: async (req, res) => {
    const id = req.params.id;
    console.log(id);
    console.log("id recibido ", req.params.id);
    const product = await productService.getProduct(id);
    console.log(product);
    if (product) {
      const updateVisit = await productService.updateVisit(product.id);
      res.render("products/productDetail", { product });
    } else {
      res.status(404).send("Producto no encontrado");
    }
  },

  // VISTA FORMULARIO DE CREACION PRODUCTO
  productCreateForm: async (req, res) => {
    const brands = await productService.getAllBrands();
    const categories = await productService.getAllCategories();
    res.render("products/productCreate", { brands, categories });
  },
  //METODO DE CREACION DE PRODUCTOS
  createProduct: async (req, res) => {
    const product = {
      name: req.body.name,
      price: Number(req.body.price),
      brand_id: req.body.brand_id,
      category_id: req.body.category_id,
      description: req.body.description,
      image: req.file ? req.file.filename : "default.png",
    };
    productService.productCreating(product);
    res.redirect("products");
  },
  // Update - Form to edit one product
  productEdit: async (req, res) => {
    const id = req.params.id;
    const product = await productService.getProduct(id);
    const brands = await productService.getAllBrands();
    const categories = await productService.getAllCategories();
    res.render("products/productEdit", { product, brands, categories });
  },
  // Update - Method to update
  productUpdate: (req, res) => {
    const product = {
      name: req.body.name,
      price: Number(req.body.price),
      brand_id: req.body.brand_id,
      category_id: req.body.category_id,
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
      res.render("products/productsList", { products });
    });
  },
  productsByBrand: async (req, res) => {
    const brand_id = req.params.id;
    console.log("brand_id :" + brand_id);
    const productsByBrand = await productService.getAllProductsByBrand(
      brand_id
    );
    res.render("products/brand", { productsByBrand });
  },

  productsByCategory: async (req, res) => {
    const category_id = req.params.id;
    console.log("category_id :" + category_id);
    const productsByCategory = await productService.getAllProductsByCategory(
      category_id
    );
    res.render("products/category", { productsByCategory });
  },

  search: async (req, res) => {
    const query = req.query.keywords;
    const productsByKeyword = await productService.searchProducts(query);
    if (productsByKeyword.length > 0) {
      res.render("products/search", { products: productsByKeyword });
    } else {
      res.redirect("/");
    }
  },
};
