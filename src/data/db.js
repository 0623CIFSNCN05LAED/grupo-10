const products = require("./products/products");
const db = {
  products: {
    getProducts: function () {
      const productsFilePath = path.join(
        __dirname,
        "../data/products/productsDataBase.json"
      );
      const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
      return products;
    },
    findById: function (id) {
      const product = this.getProducts().find((producto) => producto.id == id);
      return product;
    },
  },
};

module.exports = db;
