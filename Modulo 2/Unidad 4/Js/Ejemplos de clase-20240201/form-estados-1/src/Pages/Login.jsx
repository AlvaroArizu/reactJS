import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChangeEmail = (event) => {
    const { value } = event.target;
    console.log("🚀 ~ handleChangeEmail ~ event.target:", event.target);
    console.log("🚀 ~ handleChangeEmail ~ value:", value);
    setEmail(value);
  };
  const handleChangePassword = (event) => {
    const { value } = event.target;
    setPassword(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
  };
  // const handleClick = () => {
  //   //Logica para validar usuario
  //   //redireccionamos home
  //   navigate("/");
  // };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={handleChangeEmail}></input>
      </div>
      <div>
        <label>Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={handleChangePassword}
        ></input>
      </div>
      <button type="submit">Ingresar</button>
    </form>
  );
}

export default Login;
