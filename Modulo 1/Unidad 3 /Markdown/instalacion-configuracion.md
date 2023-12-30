# Unidad 3
- React JS
- Virtual DOM
- Ventajas de utilizar React JS
- Node JS
- Crear una aplicación utilizando el CLI

# React JS: ¿Qué es?

ReactJS es una librería de código abierto desarrollada por Facebook, conocida por su uso en plataformas como Instagram. Aunque tiene controversias, ofrece ventajas significativas en rendimiento, modularidad y promueve un claro flujo de datos y eventos, facilitando el desarrollo de aplicaciones complejas.

Está centrada en la visualización. Puede integrarse con la arquitectura Flux en proyectos nuevos o funcionar junto a frameworks MVC como AngularJS, ocupándose de las vistas gracias a su alto rendimiento en la manipulación del DOM, especialmente en listas largas con cambios frecuentes.

### ¿Cómo funciona?

React.js se basa en funciones que traducen actualizaciones de estado a una representación virtual de la página. Ante cambios de estado, ejecuta estas funciones para crear una nueva representación, luego traduce esos cambios mínimos al DOM, logrando actualizaciones eficientes.

Aunque parece más lento que el enfoque tradicional de actualización directa de elementos, React.js tiene un algoritmo eficiente para identificar las diferencias entre la representación virtual actual y la nueva, realizando los cambios mínimos necesarios en el DOM. Utiliza un DOM virtual para seleccionar subárboles de nodos basándose en cambios de estado, minimizando la manipulación del DOM y manteniendo actualizados los componentes.

### Características de React JS

- **JSX:** Extensión sintáctica de JavaScript, no obligatoria pero recomendada con React JS.
- **Componentes:** En React, todo se piensa como un componente, lo que permite crear aplicaciones escalables y fáciles de mantener.
- **Flujo de datos unidireccional:** A diferencia de otros frameworks, React JS sigue un flujo de datos unidireccional, lo que facilita la depuración y el mantenimiento.
- **Licencia:** Bajo la licencia "the Facebook Inc. Documentation is licensed under CC BY 4.0."


# Virtual DOM
### La clave de react js
El rendimiento superior de ReactJS se debe a su implementación del Virtual DOM. En lugar de renderizar todo el DOM en cada cambio, ReactJS realiza modificaciones en una copia en memoria. Utiliza un algoritmo para comparar las propiedades de esta copia con las del DOM, aplicando cambios únicamente en las partes que difieren. Aunque pueda parecer más trabajo, en la práctica es más eficiente. Por ejemplo, si se tienen 2000 elementos y solo hay 10 cambios, es más efectivo aplicar solo esos 10 cambios y renderizarlos, en lugar de modificar los 2000 elementos. Aunque requiere una planificación más detallada, ofrece una experiencia de usuario mejorada y una planificación más lineal.

ReactJS promueve el flujo de datos unidireccional en lugar del bidireccional común en otros frameworks modernos. Esta metodología simplifica la planificación y la detección de errores en aplicaciones complejas. Al mantener un flujo de información más simple, se reducen los errores difíciles de diagnosticar que pueden surgir en flujos de información complejos.

### Funcionamiento del Virtual DOM en React

React emplea un enfoque de Virtual DOM para gestionar los cambios en la interfaz de usuario de manera eficiente:

- **Identificación de Cambios (Diffing):** React ejecuta un algoritmo para detectar las diferencias entre el estado anterior y el nuevo.

- **Reconciliación (Actualización del DOM):** Luego, actualiza el DOM solo con los cambios identificados, evitando reconstrucciones completas.

Este proceso es similar a tener un objeto que representa a una persona y solo modificaría partes específicas, como añadir un bigote o músculos, sin reconstruir todo el objeto. De esta forma, React optimiza las actualizaciones minimizando los cambios aplicados en cada actualización.

### Ventajas de React JS

- **Performance con DOM Virtual:** Utiliza un Virtual DOM para optimizar las actualizaciones del DOM, mejorando el rendimiento al reducir la manipulación directa del mismo.

- **Flujo Unidireccional de Datos y Eventos:** Proporciona un flujo unidireccional de datos y eventos a través de componentes modulares, simplificando la programación reactiva.

- **Binding Unidireccional:** Mantiene un vínculo unidireccional entre la vista y el modelo, evitando la complejidad y dificultades en el debugging al minimizar eventos complejos.

- **Apoyo de sus Creadores:** Respaldado y utilizado por sus creadores, lo que garantiza su desarrollo continuo y mejoras constantes.

- **Integración con Implementaciones de Flux:** Se integra directamente con implementaciones de Flux, como Redux, que gestionan los datos de la aplicación y ofrecen un modelo jerárquico de componentes para manejar datos y funciones de manera predecible.

- **Renderización en el Lado del Servidor:** Facilita la renderización en el lado del servidor para lograr aplicaciones universales (isomórficas) mediante funciones sencillas, permitien


# Node JS
## ¿Qué es NPM?

NPM, o Node Package Manager, es una herramienta esencial en el ecosistema de Node.js. Se utiliza para gestionar los paquetes y las dependencias de un proyecto. Algunas de sus funciones principales incluyen:

- **Instalación de paquetes:** Permite buscar, descargar e instalar paquetes de código JavaScript para utilizar en un proyecto.
  
- **Gestión de dependencias:** Facilita la gestión de las dependencias de un proyecto, lo que significa que puedes especificar qué paquetes necesita tu proyecto y en qué versiones.

- **Publicación de paquetes:** Los desarrolladores pueden publicar sus propios paquetes para que otros puedan utilizarlos.

- **Administración de versiones:** Permite actualizar, desinstalar y administrar diferentes versiones de los paquetes instalados.

En resumen, NPM simplifica el proceso de trabajar con paquetes y dependencias en Node.js, lo que hace que sea más fácil desarrollar aplicaciones utilizando este entorno.

### Instalación
Para poder instalar una aplicación de react js desde el CLI, debemos previamente instalar node js.
1. Ingresara: https://nodejs.org/en/
2. Descargar la última versión de nodeJs
3. Ejecutar el archivo descargado

# Crear una Aplicación con Vite

Existen herramientas como Vite que facilitan la configuración inicial para proyectos de React al proporcionar una estructura predefinida. Esto agiliza considerablemente el proceso de configuración.

Para crear una aplicación con Vite y React, puedes ejecutar el siguiente comando:
```bash
npm create vite
```
1. Vite necesita instalar algunos paquetes. Le damos a sí (y).
2. Ingresamos un nombre para nuestro proyecto
3. Seleccionamos React
4. Agregamos nuestro lenguaje JavaScript

**Ahora ya está todo preparado para hacer la instalación de las dependencias.**

Lo que tenemos que hacer es seguir los pasos indicados, entrar a la carpeta que se acaba de generar, hacer las instalaciones de dependencias y ya podremos ejecutar nuestra aplicación.

### Ejecutar aplicación en el navegador
Para ejecutar una aplicación y poder acceder desde el navegador debemos ejecutar (dentro del directorio de la aplicación creada) 
```bash
npm run dev
```
**Ingresamos al localhost indicado**

# Componentes en React: Fundamentos

En React, el desarrollo se centra en la creación de aplicaciones a través de componentes. Estos componentes, anidados entre sí, forman una estructura modular que facilita el mantenimiento incluso en aplicaciones complejas.

En esta librería, se destacan dos categorías principales de componentes: los componentes de presentación y los componentes contenedores.

- **Componentes de Presentación:** Se enfocan en mostrar datos y tienen una mínima lógica relacionada con la manipulación del estado. En general, se recomienda que la mayoría de los componentes de una aplicación sean de este tipo debido a su facilidad para comprender y analizar.

- **Componentes Contenedores:** Estos componentes encapsulan otros componentes y les proporcionan las propiedades necesarias. También se encargan de modificar el estado de la aplicación, por ejemplo, utilizando Flux o Redux para despachar acciones y reflejar cambios en los datos al usuario.

### Ventajas del Enfoque de Componentes en React

- **Separación de Responsabilidades:** Cada componente se enfoca en una tarea única, fomentando una estructura modular y organizada.

- **Reutilización Mejorada:** La separación entre la lógica de estado y los elementos visuales facilita la reutilización de componentes.

- **Facilita las Pruebas Unitarias:** La modularidad simplifica la tarea de realizar pruebas unitarias en los componentes.

- **Posible Mejora de Rendimiento:** Puede contribuir a mejorar el rendimiento general de la aplicación al renderizar solo componentes específicos.

- **Facilidad de Comprensión:** La aplicación se vuelve más comprensible al tener componentes independientes y especializados.


### Composición de Componentes en React

En ReactJS, la composición de componentes es similar al concepto de composición funcional en programación, donde se combinan funciones para resolver problemas más complejos.

Las aplicaciones en React se construyen mediante la composición de varios componentes, cada uno encapsulando comportamiento, vista y estado. Aunque pueden ser complejos internamente, al desarrollar, nos enfocamos en componentes más pequeños, facilitando su comprensión y solución.

En síntesis, al trabajar con React, creamos componentes para abordar problemas pequeños y luego los utilizamos como bloques de construcción para resolver problemas más grandes. Esta metodología ofrece ventajas en mantenibilidad, depuración, escalabilidad, entre otras.

```js
function Welcome(props){
    retunr <h1>Hello, {props.name}</h1>
}

function App(){
    return(
        <div>
        <Welcome name="Sara"/>
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
```
**`En este caso vemos como el componente app inyecta al componente welcome`**

## Tipos de componentes
### Características de los componentes de presentación
- Orientados al aspecto visual
- No tienen dependencia con fuentes de datos (e.g. Flux)
- Reciben callbacks por medio de props
- Pueden ser descritos como componentes funcionales.
- Normalmente no tienen estado

Los componentes de presentación en React carecen de estado y se enfocan únicamente en mostrar información. Se crean utilizando funciones en lugar de clases, simplificando el código. Estos componentes reciben las propiedades necesarias de sus componentes padres.

La escritura de estos componentes puede realizarse de manera funcional, utilizando funciones simples en lugar de clases. Con esta sintaxis, las propiedades se reciben como parámetros de la función, permitiendo incluso la aplicación de destructuring para obtener las variables deseadas de forma individual.

### Características de los componentes contenedores
- Orientados al funcionamiento de la aplicación
- Contienen componentes de presentación y/o otros contenedores
- Se comunican con las fuentes de datos
- Usualmente tienen estado para representar el cambio en los datos

Por otra parte el componente contenedor define los datos contenidos en la aplicación y también los manipula, después crea los componentes hijos y los muestra en el método render.

No hay una diferencia sintáctica entre ambos componentes, la misma es 100% conceptual


# JSX en React
### ¿Por qué usar JSX?
JSX es una extensión de JavaScript utilizada con React para definir la interfaz de usuario. Aunque se asemeja a la mezcla de HTML y JavaScript, en realidad es un preprocesador que transforma el código a JavaScript.

A pesar de su apariencia de lenguaje de plantillas, JSX aprovecha el poder total de JavaScript. Al basar el desarrollo en componentes, React fusiona la lógica de renderizado con la lógica de la interfaz de usuario dentro de "componentes".

Aunque React no exige JSX, su uso resulta útil visualmente al trabajar con la interfaz de usuario dentro del código JavaScript, además de permitir mensajes de error más descriptivos.

JSX permite utilizar comillas para strings literales como atributos, y llaves para insertar expresiones JavaScript en atributos, aunque es importante no usar ambos simultáneamente en un mismo atributo.

Debido a que JSX se asemeja más a JavaScript que a HTML, React DOM emplea camelCase en lugar de la nomenclatura de atributos HTML.

`Puedes utilizar comillas para especificar strings literales como atributos:`
```JS
const element = <div tabIndex="0"></div>;
```
`También puedes usar llaves para insertar una expresión JavaScript en un atributo:`
```js
const element = <img src={user.avatarUrl}></img>;
```
# Componentes con clases
Son componentes declarados como clases. Al declarar estos componentes los mismos deben heredar de la clase `component`
```js
import React, { Component } from 'react';

class MiComponente extends Component {
  render() {
    return <h1>Hola, soy un componente de clase</h1>;
  }
}

export default MiComponente;
```
`En este ejemplo, MiComponente es una clase que extiende Component de React. La función render() define lo que se renderizará en pantalla cuando este componente se utilice.`
## Render
Render
El método `render()` de un componente de clase en React es responsable de renderizar el HTML correspondiente en el navegador.

Este método se invoca automáticamente al crearse el componente y cuando su estado se actualiza. Empleamos JSX dentro de este método para simplificar la creación de elementos HTML. Por ejemplo:

```javascript
import React, { Component } from 'react';

class MiComponente extends Component {
  render() {
    return <h1>Hola, soy un componente de clase</h1>;
  }
}
```
React DOM compara el elemento y sus hijos con la versión anterior y solo aplica las actualizaciones necesarias en el DOM para lograr el estado deseado.

# Componentes con funciones
Componentes con funciones
Los componentes de React declarados como funciones son una forma alternativa de crear componentes. Por defecto, el componente `App` suele declararse como un componente funcional.

A diferencia de los componentes de clase, las funciones en React no disponen de un método específico para el renderizado. En su lugar, lo que se encuentra dentro del `return` es lo que se renderiza. Por ejemplo:

```javascript
import React from 'react';

function MiComponenteFuncional() {
  return <h1>Hola, soy un componente funcional</h1>;
}
```
Estos componentes son más simples, ya que carecen de estado interno y métodos de ciclo de vida como `componentDidMount` o `componentDidUpdate`, pero son una manera concisa de crear componentes más simples.
# Estructura de directorio
### index.js
En este archivo, se observa que se está renderizando el componente `<App />` en el elemento del DOM con el id "root". Para entender qué contiene el componente `<App />`, se debe ir al archivo `App.js`.

### App.js
En este archivo, se encuentra la estructura del componente `<App />`. Se puede observar que este componente renderiza una imagen y un párrafo. La ruta de la imagen se obtiene mediante la importación en JavaScript, en lugar de definirse como una ruta absoluta o relativa en el código.

### index.html
Este archivo contiene el HTML que se renderiza en el navegador. A través de React, el contenido del componente `<App />` se renderiza en el elemento con id "root". Si se desean realizar modificaciones en las etiquetas meta de la página, se deben hacer en el archivo index.html.
