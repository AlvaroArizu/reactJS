import { useState, useEffect } from "react";
import Producto from "./Producto.jsx";
import { getProductos } from "./Services/productosServices.js";

function Productos() {
  //Inicializar el estado
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  //componentDidMount
  useEffect(() => {
    const request = async () => {
      try {
        const data = await getProductos();
        setProductos(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    request();
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
            key={producto.id}
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
