const productService = require("../../services/productService");
const path = require("path");

module.exports = {
  ApiProducts: async (req, res) => {
    
    const perPage = 4;
    const page = req.query.page || 1; // Obtén el número de página de la solicitud
    const totalProductsCount = await productService.getCountTotalProducts();
    const offset = (page - 1) * perPage; // Calcula el valor de offset
    const products = await productService.getPorudctsLimit(offset, perPage);
    // Calcular la cantidad total de páginas
    const totalPages = Math.ceil(totalProductsCount / perPage);


    function countProductsByCategory(products) {
      const prodsByCategory = {};
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
        detail: req.headers.host + "/api/products/" + id,
      })
    );

    let respuesta = {
      meta: {
        status: 200,
        count: totalProductsCount,
        countByCategory: countProductsByCategory(products),
        url: req.headers.host + req.originalUrl,
      },
      data: productsToApi,
    };
    respuesta.meta.pagination = respuesta.meta.pagination || {};
    if (page < totalPages) {
      respuesta.meta.pagination.next = req.headers.host + req.baseUrl + `/products?page=${parseInt(page) + 1}`;
    }

    if (page > 1) {
      respuesta.meta.pagination.previous = req.headers.host + req.baseUrl + `/products?page=${parseInt(page) - 1}`;
    }
    res.json(respuesta);


  },

  ApiProductDetail: async (req, res) => {
    const id = req.params.id;
    const product = await productService.getProductById(id);
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
