# Unidad 1
## En esta unidad podrán conocer:

### ¿Qué es HTML?
- Un nuevo estándar para una nueva Web, HTML 5
- Cuáles son las novedades de HTML 5
- Un poco mas de HTML
- CSS (Hojas de estilo en cascada)
- Clases CSS
- Javascript
- Javascript – DOM

# HTML
El HTML es el lenguaje base para crear páginas web, definido por el World Wide Web Consortium (W3C). Sirve para estructurar y crear contenido en la web, incluyendo texto, imágenes, videos y más. Es esencial para el funcionamiento de la World Wide Web y es el estándar fundamental para la visualización en los navegadores.

## HTML 5
- **Nueva Estructura:**
  - Introduce etiquetas para partes comunes de las páginas, como encabezados, pies de página, entre otros.

- **Etiquetas Específicas para Contenido:**
  - Ofrece etiquetas dedicadas para diferentes tipos de contenido como audio, video, etc., antes agrupados en una sola etiqueta.

- **Canvas:**
  - Permite dibujar formas interactivas y animadas en la página utilizando JavaScript, sin necesidad de plugins como Flash.

- **Bases de Datos Locales:**
  - Habilita el uso de bases de datos locales en el navegador, permitiendo almacenar grandes cantidades de información para aplicaciones web sin conexión.

- **Web Workers:**
  - Procesos que pueden ejecutarse en segundo plano, evitando que el usuario espere a que finalicen para usar la página.

- **Aplicaciones Web Offline:**
  - Posibilidad de desarrollar aplicaciones web que funcionen sin conexión a internet.

- **Geolocalización:**
  - Permite a las páginas web identificar la ubicación geográfica del usuario a través de un API de geolocalización.

### Metadatos del Documento:
- `<title>`: Define el título del documento, visible en la barra de título del navegador o en las pestañas de la página. Solo contiene texto.
- `<base>`: Establece la URL base para las URLs relativas en la página.
- `<link>`: Enlaza JavaScript y CSS externos al documento HTML actual.
- `<meta>`: Define metadatos que no pueden ser especificados con otros elementos HTML, como la codificación del archivo.

### Codificación y Estilo:
- Ejemplo de `<meta>`: Define la codificación del archivo, como UTF-8 o ANSI, que afecta la representación de caracteres. UTF-8 es más eficiente para idiomas con caracteres más complejos.
- `<style>`: Etiqueta usada para escribir CSS en línea, aplicando estilos a elementos específicos.

### Scripting:
- `<script>`: Define scripts internos o enlaces a scripts externos, principalmente en JavaScript.
- `<noscript>`: Define contenido alternativo si el navegador no admite scripting, importante para la accesibilidad de los usuarios con lectores de pantalla que no interpretan JavaScript.

### Secciones en HTML

- `<body>`: Representa el contenido principal de un documento HTML. Hay solo un elemento `<body>` en un documento.
- `<section>` (HTML 5): Define una sección en un documento.
- `<nav>` (HTML 5): Define una sección que contiene enlaces de navegación, comúnmente utilizado para los menús en los sitios.
- `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`: Los elementos de cabecera tienen seis niveles de importancia. `<h1>` es la más importante y `<h6>` la menos. Describen brevemente el tema de la sección que introducen y se utilizan para marcar las diferentes secciones de acuerdo a su importancia en una página web.
- `<header>` (HTML 5): Define la cabecera de una página o sección. Usualmente contiene un logotipo, el título del sitio Web y una tabla de navegación de contenidos.
- `<footer>` (HTML 5): Define el pie de una página o sección. Generalmente contiene un mensaje de derechos de autoría, enlaces a información legal o direcciones para dar retroalimentación.

### Formularios en HTML

- `<form>`: Representa un formulario que contiene controles que pueden ser enviados a un servidor para procesamiento.
- `<label>`: Representa la etiqueta descriptiva de un control de formulario.
- `<input>`: Crea un campo de entrada que permite al usuario editar datos, como campos de texto, casillas de verificación, botones de radio, etc.
- `<button>`: Crea un botón en un formulario.
- `<select>`: Crea un menú desplegable que permite la selección entre un conjunto de opciones.
- `<option>`: Define una opción en un elemento `<select>` o proporciona sugerencias para un `<datalist>`.
- `<textarea>`: Crea un área de texto multilínea para que el usuario pueda editar texto.


# CSS
CSS, que significa Cascading Style Sheets, es un lenguaje para definir la presentación de documentos HTML o XML. Su propósito principal es separar la estructura del documento de su presentación. Los estilos pueden definirse en un documento separado o en el mismo documento HTML, utilizando el elemento `<style>` para estilos generales o el atributo `style` en etiquetas individuales para estilos específicos.

Para incluir una hoja de estilo CSS en un documento HTML, se utiliza el elemento <link>. 

```HTML
<link rel="stylesheet" type="tet/css" href="theme.css">
```

### Clases CSS y Uso del Inspector de Elementos

En CSS, los elementos HTML pueden ser referenciados mediante clases (usando un punto) o IDs (usando un numeral). También es posible referenciar directamente elementos específicos, como todos los inputs del documento.

El inspector de elementos es una herramienta crucial para maquetar. Puedes acceder a ella presionando F12 o haciendo clic derecho y seleccionando "Inspeccionar elemento" en el navegador. Esta herramienta permite modificar propiedades como el `background-color` de un elemento en tiempo real, sin necesidad de recargar la página.

# JavaScript y su Inclusión en HTML

JavaScript, conocido como JS, es un lenguaje interpretado utilizado principalmente del lado del cliente en navegadores web para mejorar la interfaz de usuario.

Tipos de ejecución:
- **Ejecución directa:** Las instrucciones dentro de `<script>` se ejecutan secuencialmente al cargar la página.
- **Respuesta a un evento:** JavaScript responde a acciones del usuario, como clics, movimientos del ratón o selección de texto.

Inclusión en HTML:
- Puede incluirse en el `<head>` o al final del `<body>` para garantizar la carga de todos los elementos antes de su ejecución.
- El código JavaScript también puede ir entre las etiquetas `<script></script>`.

### Modo estricto y Comentarios en JavaScript

El modo estricto de ECMAScript 5 es una variante restringida de JavaScript que elimina errores silenciosos, corrige problemas para optimizar el código y prohíbe cierta sintaxis futura.

Cambios en el modo estricto:
- Elimina errores silenciosos, convirtiéndolos en errores explícitos.
- Corrige problemas para facilitar la optimización del código.
- Prohíbe cierta sintaxis futura.

Además, introduce cambios como la imposibilidad de crear variables globales por accidente y la obligación de que los nombres de parámetros de funciones sean únicos.

Los comentarios pueden ser de una línea (`//`) o multilínea (`/* ... */`). Para incluir un archivo JS en un HTML, se usa la etiqueta `<script>` o se carga externamente.

Actividad propuesta:
1. Crear un archivo HTML con código JS embebido y ejecutarlo en un navegador.
2. Quitar el código embebido, crear un archivo JS con el mismo código y vincularlo al HTML.
3. Utilizar la herramienta de consola del navegador (F12) para ejecutar el mismo código JS y comprender su utilidad.

El código JS para usar es:

### Instrucciones, Variables y Ámbito en JavaScript

JavaScript separa instrucciones con punto y coma o saltos de línea.

Variables almacenan datos en memoria. Los nombres deben ser alfanuméricos, comenzar con carácter alfabético o subrayado, y no usar caracteres especiales o palabras reservadas.

Declarar variables con "var" antes de usarlas. El "strict mode" se activa con `"use strict"`.

Ejemplo:

```js
"use strict";
variable1 = 10; // Error en modo estricto
function f1() {
    "use strict";
    var variable2 = 20; // Declaración correcta en modo estricto
}
```

### Ámbito de las Variables

El ámbito determina dónde están disponibles las variables:

- Variables Globales: disponibles en todo el script.
- Variables Locales: accesibles solo dentro del bloque donde se declaran.
```js
var variableGlobal = 10; // Variable global
function miFuncion() {
    var variableLocal = 20; // Variable local
}

var variableGlobal = 10; // Variable global
function miFuncion() {
    var variableLocal = 20; // Variable local
}
```

### Operadores de Cadenas en JavaScript

JavaScript utiliza el operador "+" para concatenar cadenas de texto. Este mismo operador se usa para sumar valores numéricos. Asegúrate de manejar los tipos de datos apropiados para evitar concatenaciones no deseadas al sumar.

Ejemplo:
```javascript
var cadena1 = "Hola";
var cadena2 = "Mundo";
var resultadoConcatenacion = cadena1 + cadena2; // Concatenación de cadenas

var operador1 = "10";
var operador2 = "5";
var suma = parseInt(operador1) + parseInt(operador2); // Suma de números
```
### Operador `typeof` en JavaScript

El operador `typeof` en JavaScript se utiliza para verificar el tipo de un dato. Al emplearlo, devuelve una cadena de texto que describe el tipo del operando evaluado.

Ejemplo:
```javascript
var numero = 10;
var texto = "Hola";
var booleano = true;

var tipoNumero = typeof numero; // Devuelve "number"
var tipoTexto = typeof texto; // Devuelve "string"
var tipoBooleano = typeof booleano; // Devuelve "boolean"
```
### Operadores de asignación
![](Sin%20título%202.png)

### Operadores de comparación
![](Sin%20título%204.png)

### Funciones en JavaScript

Las funciones en JavaScript se definen con la palabra reservada `function`, seguida por el nombre de la función y paréntesis que pueden contener parámetros. No es necesario especificar el tipo de dato de los parámetros. Por ejemplo:

```javascript
function suma(a, b) {
    return a + b;
}
```

### Arrays en JavaScript
Los arrays en JavaScript son objetos que representan listas y permiten almacenar múltiples elementos. Se crean utilizando el objeto predefinido en el navegador. A diferencia de PHP, en JavaScript no se pueden tener vectores asociativos (arrays con claves como strings). Ejemplo:

```JS
var frutas = ["manzana", "banana", "naranja"];
var numeros = [1, 2, 3, 4, 5];
```
### Longitud de un array
Para obtener la longitud de un array utilizaremos el método length
```html
<script>
document.write("Longitud de un arrar: " + miArray.length)
</script>
```
### Bucle For en JavaScript

La estructura `for` en JavaScript permite recorrer arrays. Cada elemento recorrido representa una iteración y el bucle se detiene cuando la condición se vuelve falsa.

- **Inicialización:** Se establecen las variables iniciales. Por ejemplo: `i = 0`.
- **Condición:** Mientras la condición sea verdadera, se realizarán iteraciones. Por ejemplo: `i < 5`.
- **Actualización:** Se actualiza la variable de la condición. Por ejemplo: `i++`.
```JS
// Supongamos un array de números
let numeros = [1, 2, 3, 4, 5];

// Recorriendo el array con un bucle for
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]); // Imprime cada elemento del array
}
```
### While
La estructura while es similar a la for, nos permite realizar iteraciones sobre un array

Como vemos no cuenta con el elemento de inicialización ni el de actualización.

```JS
// Inicializamos una variable contador
let contador = 0;

// Ejemplo de bucle while que se ejecuta mientras el contador sea menor que 5
while (contador < 5) {
  console.log("El contador es: " + contador);
  contador++; // Incrementa el contador en cada iteración
}
```
### Condicional IF
La estructura if nos permitirá mediante el uso de operadores de comparación tomar una decisión a partir de si dicha comparación o valor de una expresión es verdadera o falsa (en este caso entra por el else)
```JS
let edad = 18;

// Verificamos si la edad es mayor o igual a 18 para determinar si es mayor de edad o no
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}
```

# JavaScript - DOM
### El DOM en JavaScript

El DOM (Document Object Model) en JavaScript es la representación estructurada de un documento HTML, permitiéndonos acceder y manipular los componentes de una página web. Aquí tienes un resumen:

### Jerarquía del DOM:
- **Window**: Objeto raíz que controla la ventana del navegador y ofrece acceso a otros objetos como el documento, historial y frames.

### Propiedades importantes:
- `document`: Contiene la página web actual.
- `Frame`: Objeto frame de una página web, accesible por su nombre.
- `history`: Historial de páginas visitadas.
- `location`: URL del documento actual, modificable para cambiar de página.
- `name`: Nombre asignado a la ventana.

### Métodos útiles:
- `alert(texto)`: Muestra una ventana de alerta con el texto proporcionado.
- `blur()`: Remueve el foco de la ventana actual.
- `close()`: Cierra la ventana actual.
- `forward()`: Navega una página adelante en el historial.
- `open()`: Abre una nueva ventana del navegador.

### Ejemplo de uso:

```javascript
// Acceder al documento actual
const miDocumento = window.document;

// Mostrar una alerta
window.alert("¡Hola desde el DOM!");

// Cambiar la URL
window.location.href = "https://www.ejemplo.com";

// Abrir una nueva ventana
const nuevaVentana = window.open("https://www.otraurl.com", "_blank");
```
### Document en JavaScript

El objeto Document contiene propiedades y métodos para interactuar con el documento HTML cargado en el navegador. Aquí tienes los detalles:

### Propiedades:
- `bgColor`: Define el color de fondo del documento.
- `cookie`: Accede a una cookie específica del navegador.
- `domain`: Nombre del dominio del servidor de la página.
- `fgColor`: Establece el color del texto en la página.
- `ids`: Permite acceder a los estilos CSS.
- `title`: Representa el título de la página.

### Métodos:
- `close()`: Cierra el flujo del documento.
- `open()`: Abre el flujo del documento.
- `write()`: Escribe contenido dentro de la página web, permitiendo la inserción de etiquetas HTML y texto normal.
- `writeln()`: Similar al método `write()`, pero agrega un salto de línea al final del contenido.

## Javascript – Formularios
### Acceder a formularios con document
```JS
// Acceder al formulario por su nombre
const formByName = document.forms['nombre_del_formulario'];

// Acceder al formulario por su índice
const formByIndex = document.forms[0];
```
### Acceder a campos dentro del formulario
```JS
// Acceder al valor de un campo por su nombre
const fieldValueByName = formByName.elements['nombre_del_campo'].value;

// Acceder al valor de un campo por su índice
const fieldValueByIndex = formByIndex.elements[0].value;
```

### Evento onclick
Con este evento definimos una acción (función) a ejecutar cuando se hace click en un elemento (un botón)

```HTML
<input> type="Button" name="enviar" value=""enviar
 onclick=""enviar()
 ```

### Evento onclick
El evento `onclick` permite definir una acción, generalmente una función, que se ejecuta cuando se hace clic en un elemento, como un botón.

### Métodos:

#### `submit()`
Este método se utiliza para enviar un formulario al servidor, aunque no se haya presionado el botón de enviar (`submit`).

#### `reset()`
El método `reset()` se emplea para restablecer o reiniciar todos los campos de un formulario, borrando cualquier dato ingresado y restaurando los valores predeterminados.

Ejemplo de uso del evento onclick en un botón:

HTML:
```html
<button id="miBoton">Haz click</button>
```

### Campos de texto en JavaScript

#### Propiedades:
- **defaultValue:** Valor por defecto del campo.
- **form:** Referencia al formulario al que pertenece.
- **name:** Nombre del campo de formulario.
- **type:** Tipo de campo de formulario.
- **value:** Texto actualmente escrito en el campo.

#### Métodos:
- **blur():** Retira el foco del campo de texto.
- **focus():** Pone el foco en el campo de texto.
- **select():** Selecciona todo el texto del campo.

Ejemplo de uso de propiedades y métodos:
```html
<input type="text" id="miCampo" value="Texto inicial">

<script>
  const campo = document.getElementById('miCampo');

  // Obtener el valor por defecto
  console.log(campo.defaultValue);

  // Poner el foco en el campo al cargar la página
  campo.focus();

  // Seleccionar todo el texto al hacer click en el campo
  campo.onclick = function() {
    this.select();
  };
</script>
```
### Checkbox en JavaScript

#### Propiedades:

- **checked:** Estado del checkbox (true o false).
- **defaultChecked:** Estado chequeado por defecto o no.
- **value:** Valor actual del checkbox.

#### Métodos:

- **click():** Cambia el estado del checkbox como si se hiciera clic.
- **blur():** Retira el foco del checkbox.
- **focus():** Coloca el foco en el checkbox.

Ejemplo de uso de propiedades y métodos:
```JS
<input type="checkbox" id="miCheckbox" checked>
<label for="miCheckbox">Mi Checkbox</label>

<script>
  const checkbox = document.getElementById('miCheckbox');

  // Verificar si está chequeado
  console.log(checkbox.checked);

  // Hacer click en el checkbox al cargar la página
  checkbox.click();

  // Colocar el foco en el checkbox al hacer click en él
  checkbox.onclick = function() {
    this.focus();
  };
</script>
```

### Javascript – Select

#### Propiedades

- **length:** Cantidad de opciones en el campo `select`.
- **Option:** Referencia a cada opción, son objetos individuales.
- **Options:** Un array con todas las opciones del `select`.
- **selectedIndex:** Índice de la opción seleccionada.

#### Métodos

- **blur():** Retira el foco del elemento del formulario.
- **focus():** Pone el foco en el elemento.
- **Objeto option:**
  - **defaultSelected:** Indica si la opción es la predeterminada.
  - **index:** Índice de la opción dentro del `select`.
  - **selected:** Indica si la opción está seleccionada o no.
  - **text:** Texto visible de la opción.
  - **value:** Valor de la opción.

Ejemplo de uso:

```html
<select id="mySelect">
  <option value="1">Opción 1</option>
  <option value="2">Opción 2</option>
  <option value="3">Opción 3</option>
</select>

<script>
  const select = document.getElementById('mySelect');

  // Obtener la cantidad de opciones
  console.log(select.length);

  // Obtener la opción seleccionada
  console.log(select.options[select.selectedIndex].text);

  // Poner foco en el select al cargar la página
  select.focus();
</script>
```

### Javascript – Eventos

#### Manejadores

- **onblur:** Desencadenado cuando un elemento pierde el foco de la aplicación.
- **onchange:** Se desata al cambiar el estado de un elemento de formulario. A veces se activa al quitar el foco del elemento.
- **onclick:** Se produce al hacer clic en un elemento de la página, generalmente un botón o un enlace.
- **onload:** Evento desencadenado cuando la página, o en JavaScript 1.1 las imágenes, ha terminado de cargarse.
- **onsubmit:** Ocurre cuando se presiona el botón de enviar el formulario, antes del envío propiamente dicho.

#### Ejemplo de Uso:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Eventos en JavaScript</title>
</head>
<body>

<input type="text" id="myInput" onblur="handleBlur()">
<button onclick="handleClick()">Click me</button>

<script>
  // Manejador para onblur
  function handleBlur() {
    console.log('El campo ha perdido el foco');
  }

  // Manejador para onclick
  function handleClick() {
    console.log('Se ha hecho clic en el botón');
  }
</script>

</body>
</html>
```

### Javascript – Seleccionar Elemento e Imprimir en HTML

#### getElementById

Permite seleccionar un elemento del documento mediante el valor del atributo `id` que se le haya asignado.

#### innerHTML

- **Set:** Modifica el HTML para mostrar el valor en pantalla.
- **Get:** Obtiene el valor que tiene el elemento en pantalla.

Cuando el elemento es de formulario (input, select, textarea, etc.), obtenemos o modificamos el valor del mismo con la propiedad `value`. Si el elemento es HTML (div, span, label, etc.), utilizamos la propiedad `innerHTML`.

#### Ejemplo de Uso:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Seleccionar Elemento e Imprimir en HTML</title>
</head>
<body>

<p id="output">Este párrafo será modificado con JavaScript</p>

<script>
  // Seleccionar el párrafo mediante su id y modificar su contenido
  var paragraph = document.getElementById('output');
  paragraph.innerHTML = '¡Este párrafo ha sido modificado con JavaScript!';
</script>

</body>
</html>
```

### Validar un entero en javascript
Creamos un archivo llamado “script.js” el cual contiene la siguiente función:
```js
fuction validarEnteroEnCampo(id_campo){
    var field = document.getElementById(id_campo);
    var valueInt = parseInt(field.value)

    if(!Number.isInterger(valueInt)){
        alert("El campo "+id_campo+" debe contener solo numeros enteros");
    }else{
        field.value=valueInt;
    }
}
```
- `parseInt`: Parsea el valor que pasamos como parámetro a un entero. Es decir, js por
ejemplo tomara los valores que introducimos en un input como string, aplicando parseInt
transforma los mismos a un tipo de dato Number.
- `Number.isInteger`: Retorna true si el valor que pasamos como parámetro es un entero y
false si no lo es.

### Comprobar si dos claves son iguales
Creamos un archivo llamado “script.js” el cual contiene la siguiente función:
```js
function comprobarClave(){
    calve1=document.f1.clave1.value;
    clave2=document.f1.clave2.value;
    if (calve1==clave2) {
        alert("Ambas claves son iguales");
    }else{
        alert("Las claves no son iguales");
    }
}
```
Como vemos con la utilización del DOM podemos acceder al elemento y su propiedad value con lo cual obtenemos lo que el usuario escribió en ambos campos.

### Inhibir un campo de texto en JavaScript

Inhibir un campo de texto implica controlar el enfoque y desenfoque del mismo. Utilizamos los eventos `onfocus` y `onblur` para manejar el foco del campo y el método `blur()` para retirar el foco.

**Resumen:**
- **onfocus:** Se activa cuando un elemento gana el foco de la aplicación.
- **onblur:** Se activa cuando un elemento pierde el foco de la aplicación.
- **blur():** Método que hace que un elemento pierda el foco.
```javascript
const campoTexto = document.getElementById('miCampoTexto');

campoTexto.addEventListener('focus', () => {
  campoTexto.blur();
});
```

### Contar caraceteres en un textarea
```js
function contarCaracteres() {
    const formulario = document.forms[0]; // Acceder al primer formulario
    const texto = formulario.elements["texto"].value; // Obtener el valor del textarea
    const cantidadCaracteres = texto.length; // Contar caracteres

    formulario.elements["caracteres"].value = cantidadCaracteres; // Actualizar el valor en el input "caracteres"
}
```

### HTML
- onKeyDown: Captura la escritura de cualquier carácter mediante el teclado al momento
de ser presionada la tecla
- onKeyUp: Captura la escritura de cualquier carácter mediante el teclado al momento de
ser soltada la tecla