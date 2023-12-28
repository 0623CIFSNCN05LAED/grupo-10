import { useEffect, useState } from "react";

export default function MostVisited() {
  const [mostVisited, setMostVisited] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:4001/api/products/mostVisited"
      );
      const result = await response.json();
      setMostVisited(result.data);
    };
    fetchData();
  }, []);
  console.log("product ", mostVisited);
  const formatNumber = (number) => {
    return new Intl.NumberFormat("es-ES", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(number);
  };

  return (
    <div className="container mt-4">
      <h2>Producto más visitado</h2>

      {mostVisited && (
        <div className="card">
          <img
            src={mostVisited.urlImage}
            className="card-img-top"
            alt={`imagen de ${mostVisited.name}`}
            style={{ width: "250px", height: "auto" }}
          />

          <div className="card-body">
            <h4 className="card-title">{mostVisited.name}</h4>
            <p className="card-text">{mostVisited.description}</p>

            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Precio:</strong> ${formatNumber(mostVisited.price)}
              </li>
              <li className="list-group-item">
                <strong>Marca:</strong> {mostVisited.others[0].brand}
              </li>
              <li className="list-group-item">
                <strong>Categoría:</strong> {mostVisited.others[1].category}
              </li>
            </ul>
          </div>

          <div className="card-footer">
            <small className="text-muted">ID: {mostVisited.id}</small>
          </div>
        </div>
      )}
    </div>
  );
}
