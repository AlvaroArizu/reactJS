import { Component } from "react";
import Producto from "./Producto.jsx";

class Productos extends Component {
  constructor() {
    super();
    this.state = {
      productos: [
        {
          title: "Moto G",
          price: "1000",
        },
        {
          title: "Moto X",
          price: "1500",
        },
        {
          title: "iPhone",
          price: "2000",
        },
      ],
    };
  }
  handleClick = () => {
    this.setState({
      productos: [
        {
          title: "Moto G",
          price: "2000",
        },
      ],
    });
  };
  // handleClick() {
  //   this.setState({
  //     productos: [
  //       {
  //         title: "Moto G",
  //         price: "2000",
  //       },
  //     ],
  //   });
  // }
  render() {
    return (
      <div>
        {this.state.productos.map((producto) => (
          <Producto
            key={producto.title}
            title={producto.title}
            price={producto.price}
          />
        ))}
        <button onClick={this.handleClick}>Cambiar productos</button>
      </div>
    );
  }
}

export default Productos;

// producto=><Producto key={producto.title} title={producto.title} price={producto.price} />
// function(producto){
//   return (
//     <Producto key={producto.title} title={producto.title} price={producto.price} />
//   )
// }
