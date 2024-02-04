import { useState, useEffect } from "react";
function Contador() {
  const [cantidad, setCantidad] = useState(0);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    if (cantidad > 0) {
      setMensaje("Positivo");
    } else if (cantidad < 0) {
      setMensaje("Negativo");
    } else {
      setMensaje("");
    }
  }, [cantidad]);

  const handleDecrementar = () => {
    setCantidad(cantidad - 1);
  };
  const handleIncrementar = () => {
    setCantidad(cantidad + 1);
  };
  const handleOperacion = (tipo) => {
    if (tipo === "incrementar") {
      handleIncrementar();
    } else {
      handleDecrementar();
    }
  };
  return (
    <>
      <button onClick={handleDecrementar}>Decrementar</button>
      <div>{cantidad}</div>
      <div>{mensaje}</div>
      <button onClick={handleIncrementar}>Incrementar</button>
      <button onClick={() => handleOperacion("incrementar")}>Ambos</button>
    </>
  );
}

export default Contador;
