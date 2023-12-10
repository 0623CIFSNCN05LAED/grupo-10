import logoHX from "../assets/img/logo3-HX.png";
import Sidebar from "./Sidebar";

export default function Menu() {
  return (
    <header className="menu-wrap">
      <figure className="user">
        <div className="user-avatar">
          <img src={logoHX} alt="Logo HorizonX" />
        </div>
        <figcaption>HorizonX</figcaption>
      </figure>
      <Sidebar />
    </header>
  );
}
