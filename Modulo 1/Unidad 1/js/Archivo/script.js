function registrarse() {
  var nombre = document.form_registro.nombre.value;
  var apellido = document.form_registro.apellido.value;
  var email = document.getElementById("email_id").value;
  var password = document.getElementById("password_id").value;
  if (nombre === "") {
    document.getElementById("error_nombre").innerHTML =
      "El campo nombre es obligatoria";
  } else {
    document.getElementById("error_nombre").innerHTML = "";
  }
  console.log(nombre, apellido, email, password);
}

function updateValorCurso() {
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
}

//== -> 1=="1" -> true //igualidad
//=== -> 1=="1" -> false //estrictamente igual
