const products = require("./products/products");
const db = {
  products: {
    getProducts: () => {
      const productsFilePath = path.join(
        __dirname,
        "../data/products/productsDataBase.json"
      );
      const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
      return products;
    },
  },
};

module.exports = db;
