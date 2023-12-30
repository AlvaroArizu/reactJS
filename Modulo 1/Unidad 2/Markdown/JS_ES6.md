 # Unidad 2 - Modulo 1
En esta unidad podrán conocer:

- Sintaxis
- Variables
- Operadores
- Estructuras
- Funciones – Arrays
- Formularios
- Campos de texto
- Checkbox
- Select
- Eventos
- Seleccionar elemento e imprimir en html
- Definir una constante
- Let
- Función Arrow
- Clases
- Template Strings
- Valores por defecto
- Módulos

# ES6 - ECMAScript 6

ECMAScript, el estándar que define las características del lenguaje JavaScript, evoluciona con ES6. Antes, ES5 era la versión más ampliamente utilizada. Con la llegada de ES6, se introdujeron nuevas características y mejoras significativas al lenguaje.

**Resumen:**
- **ECMAScript:** Estándar que define JavaScript.
- **ES6:** Versión que introdujo nuevas características y mejoras al lenguaje.

En ES6 se añadieron muchas funcionalidades nuevas y mejoras significativas al lenguaje JavaScript, permitiendo escribir un código más claro, eficiente y fácil de mantener. Esto incluye mejoras en la sintaxis, nuevas estructuras de datos, como las clases, y nuevas formas de trabajar con funciones, entre otras características.

### Javascript - Template Strings

En ES6, los "Template Strings" ofrecen una forma más sencilla de interpolar strings. A diferencia del método convencional de concatenación, los "Template Strings" facilitan la inclusión de variables dentro de un string.

**Características clave:**
- Utilizan backticks (`) en lugar de comillas simples o dobles.
- Permiten la interpolación de variables usando ${...}.

Con los "Template Strings", se evita la necesidad de concatenar manualmente strings y variables, lo que hace que el código sea más legible y fácil de mantener.
```js
// Declaración de variables
let nombre = "Juan";
let edad = 30;
let profesion = "ingeniero";

// Uso de Template Strings para interpolar variables en un string
let mensaje = `Hola, me llamo ${nombre}, tengo ${edad} años y soy ${profesion}.`;

console.log(mensaje);
```

En ES6, `const` se utiliza para declarar constantes que no pueden ser redefinidas después de su inicialización.

El alcance de `var` abarca toda la función en la que está definida. Por ejemplo:

```javascript
function ejemplo() {
  for (var i = 0; i < 3; i++) {
    // Código
  }
  console.log(i); // Accede al último valor de "i" del bucle
}
```
Con `let`, el alcance de la variable se limita al bloque en el que está definida:
```js
function ejemplo() {
  for (let j = 0; j < 3; j++) {
    // Código
  }
  console.log(j); // Genera un error ya que "j" no está definida fuera del bucle
}
```
Tanto `let` como `const` no crean propiedades globales si se utilizan en el nivel superior del código.

### Javascript – Función Arrow
Las funciones de flecha son una simplificación sintáctica de las funciones en ES5.

En ES6, su declaración se simplifica, eliminando la palabra reservada `function`:

```javascript
const add = () => {} // La flecha (=>) define la función de flecha
```

### ES5
```JS
// ES5
var sum = function(a, b) {
  return a + b;
};

console.log(sum(5, 3)); // Salida: 8
```

### ES6
```JS
// ES6 - Función de flecha
const sum = (a, b) => {
  return a + b;
};

console.log(sum(5, 3)); // Salida: 8
```
**SIMPLIFICADA**
```JS
// ES6 - Función de flecha con una única sentencia (return implícito)
const sum = (a, b) => a + b;

console.log(sum(5, 3)); // Salida: 8
```
### Javascript – Deconstructor
El deconstructor es una expresión que facilita la extracción de propiedades de un objeto o elementos de un array.

Para objetos:

```javascript
const person = {
  name: 'John Doe',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA'
  }
};

const { street, city, state } = person.address; //ESTO ES EL DESCONTRUCTOR, ENTRE {PROPIEDADES DEL OBJETO LITERAL}
console.log(street, city, state); // Salida: 123 Main St Anytown CA
```
El deconstructor es una forma eficiente de asignar valores de propiedades de objetos o elementos de arrays a variables individuales para un manejo más sencillo.

### Javascript – Valores por defecto
Con ES6, podemos asignar valores por defecto a los parámetros de las funciones. Anteriormente, debíamos verificar si la variable tenía un valor asignado. Ahora, en ES6, podemos asignar valores por defecto directamente al definir la función.

Ejemplo:
```JS
const sumar =(a, b=100)=>{
  return a + b;
}
sumar(10) //a=10 por parametro y b=100 por defecto
```


### Javascript – Import && Export
Con la introducción de import y export en JavaScript (ES6), se permite la importación y exportación de módulos entre archivos JavaScript. Esto permite modularizar el código y acceder a funciones o clases definidas en otros archivos sin la necesidad de importarlos directamente en el HTML cuando se utiliza JavaScript en el navegador.

Ejemplo de Export:

En el archivo "MyClass.js":

```javascript
export class MyClass {
  // Código de la clase
}
import { MyClass } from './MyClass.js';
// Código que utiliza la clase MyClass

```
### Javascript – Rest y Spread
JavaScript – Rest y Spread

`Rest`: Permite representar un número indefinido de argumentos como un array. Se denota con tres puntos suspensivos (...) seguidos del nombre del array.

Ejemplo de Rest en una función:

```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
```
`Spread`: Propaga los elementos de un array de forma individual

### Javascript – Promises
Una Promise representa la terminación o el fracaso de una operación asíncrona. Generalmente se consume a través de funciones devueltas que ya manejan Promesas en lugar de pasar funciones de retorno.

Ejemplo de creación de una Promesa:

```javascript
let p = new Promise((resolve, reject) => {
  // Código asíncrono o tarea
  if (/* tarea completada exitosamente */) {
    resolve("Valor de retorno"); // Se resuelve la promesa con un valor
  } else {
    reject("Causa del error"); // Se rechaza la promesa con un error
  }
});
```
Para consumir una Promesa, se utilizan los métodos `then` y `catch`:
```JS
p.then((valor) => {
  // Manejar el valor resuelto
}).catch((error) => {
  // Manejar el error o excepción
});
```
Características clave:

- Las funciones callback añadidas con `.then` son llamadas después del éxito o fracaso de la operación asíncrona.
- Puedes añadir múltiples funciones callback con `.then` para ejecutarse independientemente en el orden de inserción.
- Se garantiza que las funciones callback nunca serán llamadas antes de la terminación de la ejecución actual del bucle de eventos de JavaScript.
- El encadenamiento es una de las ventajas más inmediatas de las Promesas.

### Async / Awai
- `async` se utiliza antes de la declaración de una función para convertirla en asincrónica. Estas funciones saben cómo esperar la palabra clave `await`.
- `await` solo trabaja dentro de funciones `async`. Detiene la ejecución del código en esa línea hasta que se resuelva la promesa, devolviendo el valor resultante. Mientras tanto, permite que otro código en espera se ejecute.
- Estas características hacen que el código asíncrono sea más legible, pareciéndose al código síncrono tradicional.

### Javascript – Clases
- JavaScript introduce clases, similar al paradigma de funciones constructoras pero bajo una sintaxis de clases, facilitando la implementación de la herencia y otros conceptos orientados a objetos.
- La variable "this" se refiere al contexto actual en JavaScript. En versiones anteriores, se solía almacenar "this" en otra variable para mantener su referencia. Con ECMAScript 5, se utilizaba el método "bind" para establecer explícitamente el contexto de "this". En ES6, las funciones Arrow (=>) simplifican aún más la referencia a "this" al hacerla más visual y sencilla.

**ES5**
```JS
function CounterES5() {
  var self = this;
  self.count = 0;

  document.addEventListener('click', function() {
    self.count++;
    console.log("ES5 Count:", self.count);
  });
}

var counterES5 = new CounterES5();
```
En el ejemplo de ES5, se usa self para mantener una referencia al contexto de this de la función exterior dentro de la función del evento. 
**ES6**
```JS
class CounterES6 {
  constructor() {
    this.count = 0;

    document.addEventListener('click', () => {
      this.count++;
      console.log("ES6 Count:", this.count);
    });
  }
}

const counterES6 = new CounterES6();
```
En ES6, con la función Arrow (=>), this está ligado al contexto de la clase, por lo que no se necesita un truco adicional para mantener la referencia.

