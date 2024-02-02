import React, { useState } from 'react';

function Detalle() {
  // Estado para manejar la visibilidad del mensaje
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  // Función para manejar el clic en el botón "Comprar"
  const handleCompraClick = () => {
    // Cambiar el estado para mostrar el mensaje
    setMostrarMensaje(true);
  };

  return (
    <div>
      <p>Nombre: Moto G</p>
      <p>Descripción: Smartphone de última generación.</p>
      <p>Precio: $1000</p>
      <p>SKU: SKU123456</p>
      <p>Cantidad disponible: 10</p>

      {/* Botón "Comprar" con evento onClick */}
      <button onClick={handleCompraClick}>Comprar</button>

      {/* Mostrar el mensaje si mostrarMensaje es verdadero */}
      {mostrarMensaje && <p>Gracias por su compra</p>}
    </div>
  );
}

export default Detalle;
