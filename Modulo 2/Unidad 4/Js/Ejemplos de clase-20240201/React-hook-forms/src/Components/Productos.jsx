import { useState, useEffect } from "react";
import Producto from "./Producto.jsx";
import { getProductos } from "../Services/productosServices.js";

function Productos() {
  //Inicializar el estado
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [buscar, setBuscar] = useState("ipod");
  //componentDidMount
  useEffect(() => {
    const request = async () => {
      try {
        const data = await getProductos(buscar);
        setProductos(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    request();
  }, [buscar]);

  const handleClick = () => {
    setProductos([
      {
        title: "Moto G",
        price: "2000",
      },
    ]);
  };
  const handleBuscar = (event) => {
    const { value } = event.target;
    setBuscar(value);
  };

  if (loading) {
    return <div>Cargando ...</div>;
  } else {
    return (
      <div>
        <div>
          <label>Buscar</label>
          <input type="text" value={buscar} onChange={handleBuscar} />
        </div>
        {productos.map((producto) => (
          <Producto
            key={producto.id}
            id={producto.id}
            title={producto.title}
            price={producto.price}
            thumbnail={producto.thumbnail}
          />
        ))}
        <button onClick={handleClick}>Cambiar productos</button>
      </div>
    );
  }
}

export default Productos;
