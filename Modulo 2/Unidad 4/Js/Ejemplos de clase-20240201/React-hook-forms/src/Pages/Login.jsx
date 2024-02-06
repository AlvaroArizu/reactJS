import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
function Login() {
  const onSubmit = (data) => {
    console.log(data);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email</label>
        <input
          type="email"
          {...register("correo", {
            required: true,
            pattern:
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
          })}
        ></input>
        {errors?.correo?.type === "required" && (
          <span>El campo es obligatorio</span>
        )}
        {errors?.correo?.type === "pattern" && <span>Formato incorrecto</span>}
      </div>
      <div>
        <label>Contraseña</label>
        <input
          type="password"
          {...register("clave", {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
        ></input>
        {errors?.clave?.type === "required" && (
          <span>El campo es obligatorio</span>
        )}
        {errors?.clave?.type === "minLength" && (
          <span>Debe escribir al menos 6 caractres</span>
        )}
        {errors?.clave?.type === "maxLength" && (
          <span>Debe escribir como maximo 12 caractres</span>
        )}
      </div>
      <button type="submit">Ingresar</button>
    </form>
  );
}

export default Login;
