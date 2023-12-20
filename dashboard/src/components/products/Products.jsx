import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";
import OneProduct from "../Content/OneProduct";

function Products() {
  const [allProducts, setAllProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:4001/api/products?page=${page}`);
      const result = await response.json();
      setAllProducts(result.products);
    };

    fetchData();
  }, [page]); 

  const handleProductClick = (productId) => {
    setSelectedProductId(productId);
  };

  const handlePagination = async (newPage) => {
    setPage(newPage);
  };
  const proxima = async ()=>{
    const proximaPagina = page +1;
    handlePagination(proximaPagina)
  }
  const previa = async ()=>{
    const paginaPrevia = page === 1 ? page : page -1
    handlePagination(paginaPrevia)
  }

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
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                onClick={() => handleProductClick(product.id)}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ProductItem key={product.id} name={product.name} />
              </Link>
            ))}
      </div>
      <hr></hr>
      <div className="d-flex justify-content-between">
        <button
          onClick={previa}
          type="button"
          className="btn btn-primary mr-2"
        >
          Página Anterior
        </button>

        <button onClick={proxima} type="button" className="btn btn-primary">
          Siguiente Página
        </button>
      </div>
      {selectedProductId && <OneProduct productId={selectedProductId} />}
    </section>
  );
}

export default Products;
