import { useState, useEffect } from "react";
import Producto from "./Producto.jsx";

function Productos() {
  //Inicializar el estado
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  //componentDidMount
  useEffect(() => {
    setTimeout(() => {
      setProductos([
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
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  const handleClick = () => {
    setProductos([
      {
        title: "Moto G",
        price: "2000",
      },
    ]);
  };

  if (loading) {
    return <div>Cargando ...</div>;
  } else {
    return (
      <div>
        {productos.map((producto) => (
          <Producto
            key={producto.title}
            title={producto.title}
            price={producto.price}
          />
        ))}
        <button onClick={handleClick}>Cambiar productos</button>
      </div>
    );
  }
}

export default Productos;
