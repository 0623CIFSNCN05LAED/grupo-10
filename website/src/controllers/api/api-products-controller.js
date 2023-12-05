const productService = require("../../services/productService");
const path = require("path");

module.exports = {
  ApiProducts: async (req, res) => {
    const prodsByCategory = {};

    const products = await productService.getAllProducts();
    function countProductsBycategory(products) {
      products.forEach((product) => {
        const category = product.category_id;
        if (!prodsByCategory[category]) {
          prodsByCategory[category] = 1;
        } else {
          prodsByCategory[category] += 1;
        }
      });
      return prodsByCategory;
    }

    const productsToApi = products.map(
      ({ id, name, description, brand_id, category_id }) => ({
        id,
        name,
        description,
        others: [{ brand: brand_id }, { category: category_id }],
        detail: req.headers.host + req.originalUrl + "/" + id,
      })
    );

    let respuesta = {
      meta: {
        status: 200,
        count: products.length,
        countByCategory: countProductsBycategory(products),
        url: req.headers.host + req.originalUrl,
      },
      data: productsToApi,
    };
    res.json(respuesta);
  },

  ApiProductDetail: async (req, res) => {
    const id = req.params.id;
    const product = await productService.getProduct(id);
    const imagesPath = path.resolve(
      __dirname,
      "../../../public/images/products"
    );
    const imageUrl = imagesPath + "\\" + product.image;
    console.log(imageUrl);
    const productToApi = {
      id: product,
      id,
      name: product.name,
      price: product.price,
      description: product.description,
      image: product.image,
      brand_id: product.brand_id,
      category_id: product.category_id,
      others: [
        { brand: product.productBrand.name },
        { category: product.productCategory.name },
      ],
      urlImage: imageUrl.replace(/\\/g, "/"),
    };
    let respuesta = {
      meta: {
        status: 200,
        url: req.headers.host + req.originalUrl,
      },
      data: productToApi,
    };
    res.json(respuesta);
  },
};
