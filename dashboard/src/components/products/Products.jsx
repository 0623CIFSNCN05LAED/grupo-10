import { Component } from "react";
import ProductItem from "./ProductItem";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:4001/api/products")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const products = json.data;
        console.log("products", products);
        this.setState({
          products: products,
        });
      });
  }

  render() {
    console.log("productos :" + this.state.products);
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
          {this.state.products.length === 0
            ? "Cargando..."
            : this.state.products.map((product) => (
                <ProductItem key={product.id} name={product.name} />
              ))}
        </div>
      </section>
    );
  }
}

export default Products;
