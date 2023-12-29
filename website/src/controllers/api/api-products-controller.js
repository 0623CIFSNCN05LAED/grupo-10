const productService = require("../../services/productService");

module.exports = {
  ApiProducts: async (req, res) => {
    try {
      const perPage = 10;
      const page = req.query.page || 1; // Obtén el número de página de la solicitud
      const totalProductsCount = await productService.getCountTotalProducts();
      const offset = (page - 1) * perPage; // Calcula el valor de offset
      const totalProducts = await productService.getAllProducts();
      const allProducts = await productService.getProductsLimit(
        offset,
        perPage
      );
      // Calcular la cantidad total de páginas
      const totalPages = Math.ceil(totalProductsCount / perPage);

      function countProductsByCategory(allProducts) {
        const prodsByCategory = {};
        allProducts.forEach((product) => {
          const category = product.category_id;
          if (!prodsByCategory[category]) {
            prodsByCategory[category] = 1;
          } else {
            prodsByCategory[category] += 1;
          }
        });
        return prodsByCategory;
      }

      function countProductsByBrand(allProducts) {
        const prodsByBrand = {};
        allProducts.forEach((product) => {
          const brand = product.brand_id;
          if (!prodsByBrand[brand]) {
            prodsByBrand[brand] = 1;
          } else {
            prodsByBrand[brand] += 1;
          }
        });
        return prodsByBrand;
      }

      const productsToApi = allProducts.map(
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
          countByCategory: countProductsByCategory(totalProducts),
          countByBrand: countProductsByBrand(totalProducts),
          url: req.headers.host + req.originalUrl,
        },
        products: productsToApi,
      };
      respuesta.meta.pagination = respuesta.meta.pagination || {};
      if (page < totalPages) {
        respuesta.meta.pagination.next =
          req.headers.host + req.baseUrl + `?page=${parseInt(page) + 1}`;
      }

      if (page > 1) {
        respuesta.meta.pagination.previous =
          req.headers.host + req.baseUrl + `?page=${parseInt(page) - 1}`;
      }
      res.json(respuesta);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener los productos" });
    }
  },

  ApiProductDetail: async (req, res) => {
    try {
      const id = req.params.id;
      const product = await productService.getProductById(id);
      const imagesPath = "http://localhost:4001/images/products/";
      const imageUrl = `${imagesPath}${product.image}`;
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
        urlImage: imageUrl,
      };
      let respuesta = {
        meta: {
          status: 200,
          url: req.headers.host + req.originalUrl,
        },
        data: productToApi,
      };
      res.json(respuesta);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error al obtener los detalles del producto" });
    }
  },
  ApiLastProduct: async (req, res) => {
    const lastProduct = await productService.findLastProductCreated();
    const imagesPath = "http://localhost:4001/images/products/";
    const imageUrl = `${imagesPath}${lastProduct.image}`;

    const productToApi = {
      id: lastProduct.id,
      name: lastProduct.name,
      price: lastProduct.price,
      description: lastProduct.description,
      image: lastProduct.image,
      brand_id: lastProduct.brand_id,
      category_id: lastProduct.category_id,
      others: [
        { brand: lastProduct.productBrand.name },
        { category: lastProduct.productCategory.name },
      ],
      urlImage: imageUrl,
    };

    let respuesta = {
      data: productToApi,
    };
    res.json(respuesta);
  },
  ApiMostVisited: async (req, res) => {
    const mostVisitedProducts = await productService.getVisitedProducts();
    let mostVisitedProduct = mostVisitedProducts[0];
    const perPage = 1;
    const offset = 0;
    const defaultProducts = await productService.getProductsLimit(
      offset,
      perPage
    );
    let defaultProduct = defaultProducts[0];
    mostVisitedProducts.length == 0
      ? (mostVisitedProduct = defaultProduct)
      : "";

    const imagesPath = "http://localhost:4001/images/products/";
    const imageUrl = `${imagesPath}${mostVisitedProduct.image}`;

    const productToApi = {
      id: mostVisitedProduct.id,
      name: mostVisitedProduct.name,
      price: mostVisitedProduct.price,
      description: mostVisitedProduct.description,
      image: mostVisitedProduct.image,
      brand_id: mostVisitedProduct.brand_id,
      category_id: mostVisitedProduct.category_id,
      others: [
        { brand: mostVisitedProduct.productBrand.name },
        { category: mostVisitedProduct.productCategory.name },
      ],
      urlImage: imageUrl,
    };

    let respuesta = {
      data: productToApi,
    };
    res.json(respuesta);
  },
};
