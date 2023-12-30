import { Component } from "react";
import Producto from "./Producto.jsx";

class Productos extends Component {
  render() {
    return (
      <div>
        <Producto title="Moto G" price="1000" />
        <Producto title="Moto X" price="1500" />
        <Producto title="iPhone" price="2000" />
      </div>
    );
  }
}

export default Productos;
