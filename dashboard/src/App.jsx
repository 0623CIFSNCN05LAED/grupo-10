import "./App.css";
import Products from "./components/products/Products";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Products />
    </BrowserRouter>
  );
}

export default App;
