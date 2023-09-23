const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require('uuid');



module.exports={
    getProducts: function() {
      const productsFilePath = path.join(__dirname, "./productsDataBase.json");
      const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
      return products;
    },
    saveProducts: function (products) {
      const productsFilePath = path.join(__dirname, "./productsDataBase.json");
      fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
    },
    create: function (product) {
      console.log(`Creating product ${product.nombre}`);
      const products = this.getProducts();
      const lastProduct = [products.length - 1];
      const bigIdProduct = lastProduct.id;
      const newProduct = {
     
        id:
        uuidv4(),
         ...product
      };
      products.push(newProduct);
      this.saveProducts(products)
      },
  }
