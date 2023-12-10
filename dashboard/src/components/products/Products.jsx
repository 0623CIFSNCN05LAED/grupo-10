import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

function Products() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4001/api/products");
      const result = await response.json();
      setAllProducts(result.products);
    };

    fetchData();
  }, []);

  return (
    <section className="content">
      <h2 className="mt-3">Productos</h2>
      <div className="list-group shadow-sm p-3 mb-5 bg-body-tertiary rounded">
        <button
          type="button"
          className="list-group-item list-group-item-action active text-center"
          aria-current="true"
        >
          Listado de Productos
        </button>
        {allProducts.length === 0
          ? "Cargando..."
          : allProducts.map((product) => (
              <ProductItem key={product.id} name={product.name} />
            ))}
      </div>
    </section>
  );
}

export default Products;
