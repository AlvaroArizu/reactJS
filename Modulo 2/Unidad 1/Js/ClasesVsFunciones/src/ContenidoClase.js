import React, { Component } from "react";

class ContenidoClase extends Component {
  constructor() {
    super();
    this.state = {
      texto: "",
      titulo: "Clase React",
    };
  }

  //Despues de que el componente se muestre en pantalla por primera vez
  componentDidMount() {
    console.log("componentDidMount");
  }
  //Despues de actualizar estado o propiedad
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", prevProps, prevState, this.state);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  /*handleClick = ()=>{
        this.setState({texto:'HOLA'})
    }*/

  render() {
    return (
      <div>
        <h1>{this.state.titulo}</h1>
        <p>Contenido Clase {this.state.texto}</p>

        <button onClick={() => this.setState({ titulo: "Titulo Modificado" })}>
          Modificar titulo
        </button>
        <button onClick={() => this.setState({ texto: "HOLA" })}>
          Agregar hola
        </button>
        <button onClick={() => this.setState({ texto: "" })}>
          Quitar hola
        </button>
      </div>
    );
  }
}
/*
()=>this.setState({texto:'HOLA'}
function(){
    return this.setState({texto:'HOLA'})
}
*/
export default ContenidoClase;
