import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const handleClick = () => {
    //Logica para validar usuario
    //redireccionamos home
    navigate("/");
  };
  return (
    <form>
      <div>
        <label>Email</label>
        <input type="email"></input>
      </div>
      <div>
        <label>Contraseña</label>
        <input type="password"></input>
      </div>
      <button onClick={handleClick}>Ingresar</button>
    </form>
  );
}

export default Login;
