import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function OneProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:4001/api/products/${productId}`
      );
      const result = await response.json();
      setProduct(result.data);
    };
    fetchData();
  }, [productId]);

  const formatNumber = (number) => {
    return new Intl.NumberFormat("es-ES", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(number);
  };

  return (
    <div className="container mt-4">
      <h2>Detalle del Producto</h2>

      {product && (
        <div className="card">
          <img
            src={product.urlImage}
            className="card-img-top"
            alt={`imagen de ${product.name}`}
            style={{ width: "250px", height: "auto" }}
          />
          <div className="card-body">
            <h4 className="card-title">{product.name}</h4>
            <p className="card-text">{product.description}</p>

            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Precio:</strong> ${formatNumber(product.price)}
              </li>
              <li className="list-group-item">
                <strong>Marca:</strong> {product.others[0].brand}
              </li>
              <li className="list-group-item">
                <strong>Categoría:</strong> {product.others[1].category}
              </li>
            </ul>
          </div>
          <div className="card-footer">
            <small className="text-muted">ID: {product.id}</small>
          </div>
        </div>
      )}
    </div>
  );
}
