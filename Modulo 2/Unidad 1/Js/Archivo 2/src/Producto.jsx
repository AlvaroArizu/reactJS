// function Producto(props) {
//   return (
//     <div>
//       <h3>{props.title}</h3>
//       <p>$ {props.price}</p>
//     </div>
//   );
// }
// function Producto(props) {
//   const { title, price } = props;
//   return (
//     <div>
//       <h3>{title}</h3>
//       <p>$ {price}</p>
//     </div>
//   );
// }
function Producto({ title, price }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>$ {price}</p>
    </div>
  );
}

export default Producto;
