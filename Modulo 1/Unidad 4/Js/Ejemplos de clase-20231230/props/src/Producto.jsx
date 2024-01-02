import { Component } from "react";

class Producto extends Component {
  render() {
    console.log(this.props);
    const { title, price } = this.props;
    return (
      <div>
        <h2>{title}</h2>
        <h3>{this.props.title}</h3>
        <p>$ {price}</p>
        <p>$ {this.props.price}</p>
      </div>
    );
  }
}

//
export default Producto;
