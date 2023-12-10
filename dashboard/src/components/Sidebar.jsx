import { Link } from "react-router-dom";

export default function Sidebar() {
  const iconStyle = {
    fontSize: "1.5rem",
    color: "cornflowerblue",
  };

  return (
    <nav>
      <section className="dicover">
        <h3>Opciones</h3>
        <ul>
          <li>
            <Link to="/search">
              <i className="bi bi-search" style={iconStyle}></i>- Buscar
            </Link>
          </li>
          <li>
            <Link to="/statistics">
              <i className="bi bi-graph-up-arrow" style={iconStyle}></i>-
              Estadísticas
            </Link>
          </li>
          <li>
            <Link to="/products">
              <i className="bi bi-laptop" style={iconStyle}></i>- Productos
            </Link>
          </li>
        </ul>
      </section>
    </nav>
  );
}
