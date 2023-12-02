//alert("Hola mundo 2");
/*alert("Hola mundo 2");
alert("Hola mundo 2");*/
// alert("Hola mundo 2");
//ES5
function holaMundo() {
  var saludo = "";
  //   alert("Hola mundo 3");
}
// var holaMundo2 = function () {
//   alert("Hola mundo 4");
// };
function sumar(a, b) {
  return a + b;
}
//declaracion e inicializacion
var total = sumar(10, 20);
//declaracion
var monto;
//inicializacion
monto = 100;

console.log(total);

//Arrays
var array = new Array();
var arrayCantidad = new Array(8);
var arrayRapida = [];
//incializacion
var arrayInicialiazacion = ["leandro", "matias", 100];
console.log(arrayInicialiazacion);
//Leer posicion 1
console.log(arrayInicialiazacion[1]);
//Modificar valor posicion 1
arrayInicialiazacion[1] = "Pedro";
console.log(arrayInicialiazacion);

for (var i = 0; i < arrayInicialiazacion.length; i++) {
  console.log(arrayInicialiazacion[i]);
}
//i++ -> i = i + 1
