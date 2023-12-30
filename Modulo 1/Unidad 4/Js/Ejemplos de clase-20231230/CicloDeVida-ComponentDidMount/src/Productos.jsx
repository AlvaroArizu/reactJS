import { Component } from "react";
import Producto from "./Producto.jsx";

class Productos extends Component {
  constructor() {
    super();
    this.state = {
      productos: [],
      loading: true,
    };
  }
  componentDidMount() {
    //Leer la BD
    setTimeout(() => {
      //Obtengo productos
      this.setState({
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
        loading: false,
      });
    }, 2000);
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
    if (this.state.loading) {
      return <div>Cargando ...</div>;
    } else {
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
}

export default Productos;

// producto=><Producto key={producto.title} title={producto.title} price={producto.price} />
// function(producto){
//   return (
//     <Producto key={producto.title} title={producto.title} price={producto.price} />
//   )
// }
