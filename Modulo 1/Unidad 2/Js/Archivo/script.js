//IMPORTANTE
//Template string
//arrow
//const y let
//parseInt(), Number. Operador + es suma y concatenacion
//"1"+"2" -> "12"
//const a = document.getElementById("op1").value
//parseInt(a)+2 -> 3
//1+2 -> 3

// var registrarse = function(){}
//arrow
// var registrarse = ()=>{}

//es5
// var registrarse = function(usuario){}
//arrow
// var registrarse = (usuario)=>{}
//Podemos omitir parentesis cuando la funcion recibe un solo parametro
// var registrarse = usuario=>{}

//es5
// var registrarse = function(usuario){return "hola mundo"}
//arrow
// var registrarse = usuario=>{return "hola mundo"}
// var registrarse = usuario=>"hola mundo"

//Valor por defecto
const sumar = (a, b = 100) => {
  return a + b;
};
// sumar(10,20) -> 30
// sumar(10)->110
const pi = "3,14545";

const registrarse = () => {
  //no se modifica el valor
  //const pi = 3,14545
  //variable -> modificamos valor
  //var total = 0
  //total = 1000

  const nombre = document.form_registro.nombre.value;
  const apellido = document.form_registro.apellido.value;
  const email = document.getElementById("email_id").value;
  const password = document.getElementById("password_id").value;

  let mensajeError = "";
  const test = "hola";
  if (nombre === "") {
    document.getElementById("error_nombre").innerHTML =
      "El campo nombre es obligatorio";
    mensajeError = "error_nombre";
  } else {
    document.getElementById("error_nombre").innerHTML = "";
  }

  console.log(mensajeError, test);
  // document.getElementById("mensaje").innerHTML =
  //   "Gracias " + nombre + ", por" +
  //   +"registrarse";
  document.getElementById("mensaje").innerHTML = `Gracias ${nombre} ${apellido} 
  por registrarse`;
  console.log(nombre, apellido, email, password);
};

var updateValorCurso = () => {
  var seleccionado = document.getElementById("curso_id").value;
  console.log("updateValorCurso", seleccionado);
  // if(seleccionado==="1"){

  // }else if(seleccionado==="2"){

  // }else{

  // }
  switch (seleccionado) {
    case "1":
      document.getElementById("valor_seguro").innerHTML = "$500";
      break;
    case "2":
      document.getElementById("valor_seguro").innerHTML = "$1000";
      break;
    case "3":
      document.getElementById("valor_seguro").innerHTML = "$1500";
      break;
    default:
      document.getElementById("valor_seguro").innerHTML = "No Aplica";
  }
};

// function test(){
//   console.log(x) -> undefined
//   var x = 5
//   console.log(x)
// }
// function test(){
//   console.log(x) -> ReferenceError
//   let x = 5
//   console.log(x)
// }

//== -> 1=="1" -> true //igualidad
//=== -> 1=="1" -> false //estrictamente igual

const getAlumno = () => {
  return {
    nombre: "Leandro",
    apellido: "Gil",
    dni: "31231231",
    curso: "React",
    direccion: {
      calle: "dasdas",
    },
    asistir: () => {},
  };
};

const getPaises = () => {
  return ["Argentina", "Uruguay", "Paraguay"];
};

const init = () => {
  const alumno = getAlumno();
  console.log(alumno.nombre, alumno.apellido, alumno.dni);
  console.log(alumno);
  //Copiando los elementos del objeto
  const alumnoCopy = { ...alumno };
  //Asignando el mismo puntero
  // const alumnoCopy = alumno;
  alumnoCopy.nombre = "Matias";
  console.log("Alumno", alumno);
  const alumno2 = { ...alumno, edad: 36 };
  console.log(alumno2);
  const nombre = "React";
  const { nombre: nombreAlumno, apellido, dni } = getAlumno();
  console.log(nombreAlumno, apellido, dni);

  const paises = getPaises();
  console.log(paises[0], paises[1]);

  const [primero, segundo] = getPaises();
  console.log(primero, segundo);
};

init();
