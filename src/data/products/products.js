const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const { Product } = require("../../database/models");

module.exports = {
  getProducts: async function () {
    //const productsFilePath = path.join(__dirname, "./productsDataBase.json");
    //const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    return await Product.findAll();
  },
  saveProducts: function (products) {
    const productsFilePath = path.join(__dirname, "./productsDataBase.json");
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
  },
  create: async function (product) {
    console.log(`Creating product ${product.name}`);
    //const products = this.getProducts();
    const newProduct = {
      id: uuidv4(),
      ...product,
    };
    // products.push(newProduct);
    // this.saveProducts(products);
    return await Product.create(newProduct);
  },
  findById: async function (id) {
    //const product = this.getProducts().find((producto) => producto.id == id);
    const product = await Product.findByPk(id, {
      include: ["productBrand", "productCategory"],
    });
    console.log("pase por findById");
    return product;
  },
  update: function (id, product) {
    console.log(`Actualizando producto ${product.name}`);
    // cargar todos los productos
    const products = this.getProducts();
    // buscar un producto por id
    const productToEdit = products.find((product) => product.id == id);
    // pisar las propiedades
    Object.assign(productToEdit, product);
    // guardar el producto editado
    this.saveProducts(products);
    return product;
  },
  delete: function (id) {
    console.log(`Deleting product with id ${id}`);
    const products = this.getProducts();
    const nonDeleteProducts = products.filter((product) => product.id != id);
    this.saveProducts(nonDeleteProducts);
  },
};
