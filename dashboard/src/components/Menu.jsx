import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logoHX from "../assets/img/logo3-HX.png";
import Sidebar from "./Sidebar";

const figcaptionStyle = {
  fontSize: "20px",
  fontStyle: "italic",
  textDecoration: "none",
};

export default function Menu() {
  return (
    <header className="menu-wrap">
      <figure className="user">
        <div className="user-avatar">
          <img src={logoHX} alt="Logo HorizonX" />
        </div>
        <Link to="/" style={figcaptionStyle}>
          <figcaption>HorizonX</figcaption>
        </Link>
      </figure>
      <Sidebar />
    </header>
  );
}
