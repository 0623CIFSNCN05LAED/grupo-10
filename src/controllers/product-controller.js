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
    res.render("products/productDetail", { product });
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
    res.render("products/productEdit", { product });
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
  lenovo: (req, res) => {
    productService.getLenovoProducts().then((products) => {
      res.render("products/lenovo", { products });
    });
  },
  apple: (req, res) => {
    productService.getAppleProducts().then((products) => {
      res.render("products/apple", { products });
    });
  },
  corsair: (req, res) => {
    productService.getCorsairProducts().then((products) => {
      res.render("products/corsair", { products });
    });
  },
  asus: (req, res) => {
    productService.getAsusProducts().then((products) => {
      res.render("products/asus", { products });
    });
  },
  razer: (req, res) => {
    productService.getRazerProducts().then((products) => {
      res.render("products/razer", { products });
    });
  },
  productsCategoryPcs: (req, res) => {
    productService.pcsCategory().then((products) => {
      res.render("products/pcs", { products });
    });
  },
  productsCategoryCelulares: (req, res) => {
    productService.celularesCategory().then((products) => {
      res.render("products/celulares", { products });
    });
  },
  productsCategoryAccesosrios: (req, res) => {
    productService.accesoriosCategory().then((products) => {
      res.render("products/accesorios", { products });
    });
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
