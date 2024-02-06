# Componentes y virtual DOM: Eventos
# Eventos con react
En React, los eventos tienen una interfaz similar a los eventos nativos del navegador, pero con la ventaja de tener un comportamiento compatible con la mayoría de los navegadores. Estos eventos son manejados por funciones, también conocidas como manejadores de eventos, que definen el comportamiento de la aplicación cuando ocurren ciertos eventos, como hacer clic en un botón o ingresar texto en un campo de entrada.

Es común en React declarar estos manejadores de eventos como funciones dentro de una clase. Sin embargo, al hacer esto, debemos tener cuidado, ya que el `this` no se conecta automáticamente a la clase. Para resolver este problema, existen tres opciones:

1. Conectar `this` en el método `render()`.
2. Conectar `this` en el constructor de la clase.
3. Utilizar funciones flecha (arrow functions), que automáticamente enlazan `this` a la clase en la que se definen.

Estas opciones aseguran que `this` dentro de las funciones de manejo de eventos se refiera correctamente a la instancia de la clase en la que se encuentran. Es importante elegir la opción más adecuada según las necesidades y la estructura del código.



- Cómo declarar los eventos
- Eventos disponibles en react
- Cómo recibir parámetros en los eventos
- Ejemplo aplicado a nuestro código
- Ejemplo aplicado a formularios
- React hook forms

# Cómo declarar los eventos
En javascript la declaración de eventos la realizamos de la siguiente manera:

```js
<div onclick="handleClick()">Click me</div>

<script>
  function handleClick() {
    alert('Clicked');
    return false;
  }
</script>
```
Como vemos utilizamos el onclick, en el cual hacemos referencia a una función declarada.

En react lo haremos de la siguiente manera:
```js
<div onClick="handleClick()">Click me</div>

<script>
function handleClick(event) {
  alert('Clicked');
  event.preventDefault();
  event.stopPropagation();
}
</script>
```
En React, podemos utilizar el evento `onClick`, pero a diferencia del enfoque en JavaScript puro, solo declaramos el nombre de la función sin invocarla con paréntesis.

La función asociada al evento `onClick` en React recibe un argumento `event`, que nos permite realizar acciones como detener la propagación del evento o prevenir el comportamiento por defecto.

Consideraciones importantes:
- El nombre del evento debe seguir la convención camelCase y no debe estar en minúsculas sostenidas.
- Al evento `onClick` se le pasa la función directamente, no una cadena de texto.
- En React, para prevenir un comportamiento por defecto o detener la propagación de un evento, debes llamar explícitamente a los métodos `preventDefault()` y `stopPropagation()`, respectivamente.

### Eventos sintéticos
En React, los eventos sintéticos son instancias de SyntheticEvents, que son una envoltura de los eventos nativos del navegador. Esto significa que los eventos sintéticos tienen la misma interfaz que los eventos nativos, como `preventDefault()` y `stopPropagation()`. La ventaja clave de los eventos sintéticos es que funcionan de manera idéntica en la mayoría de los navegadores, lo que garantiza una experiencia consistente en todas las plataformas.

# Eventos disponibles en react
React soporta una amplia gama de eventos, incluyendo:

- **Eventos de Mouse**: `onClick`, `onContextMenu`, `onDoubleClick`, `onMouseDown`, `onMouseEnter`, `onMouseLeave`, `onMouseMove`, `onMouseOut`, `onMouseOver`, `onMouseUp`.

- **Eventos de Arrastrar y Soltar (Drag & Drop)**: `onDrag`, `onDragEnd`, `onDragEnter`, `onDragExit`, `onDragLeave`, `onDragOver`, `onDragStart`, `onDrop`.

- **Eventos de Foco y Formularios**: `onFocus`, `onBlur`, `onChange`, `onInput`, `onSubmit`.

- **Eventos de Touch (Táctiles)**: `onTouchCancel`, `onTouchEnd`, `onTouchMove`, `onTouchStart`.

- **Eventos de Copiar y Pegar**: `onCopy`, `onCut`, `onPaste`.

- **Eventos de Scroll**: `onScroll`, `onWheel`.

| Evento           | Descripción                                                                                                                                                            |
|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| onClick          | Se dispara cuando se hace clic en un elemento.                                                                                                                          |
| onContextMenu    | Se dispara cuando se abre el menú contextual de un elemento (generalmente mediante clic derecho).                                                                      |
| onDoubleClick    | Se dispara cuando se hace doble clic en un elemento.                                                                                                                    |
| onMouseDown      | Se dispara cuando se presiona un botón del mouse sobre un elemento.                                                                                                     |
| onMouseEnter     | Se dispara cuando el cursor del mouse entra en el área de un elemento.                                                                                                  |
| onMouseLeave     | Se dispara cuando el cursor del mouse sale del área de un elemento.                                                                                                     |
| onMouseMove      | Se dispara cuando el cursor del mouse se mueve sobre un elemento.                                                                                                       |
| onMouseOut       | Se dispara cuando el cursor del mouse sale del área de un elemento o de sus hijos.                                                                                      |
| onMouseOver      | Se dispara cuando el cursor del mouse entra en el área de un elemento o de sus hijos.                                                                                   |
| onMouseUp        | Se dispara cuando se suelta un botón del mouse sobre un elemento.                                                                                                       |
| onDrag           | Se dispara cuando se inicia un arrastre de un elemento.                                                                                                                 |
| onDragEnd        | Se dispara cuando se termina un arrastre de un elemento.                                                                                                                |
| onDragEnter      | Se dispara cuando un elemento es arrastrado dentro de otro.                                                                                                             |
| onDragExit       | Se dispara cuando un elemento arrastrado sale de otro.                                                                                                                  |
| onDragLeave      | Se dispara cuando un elemento es arrastrado fuera de otro.                                                                                                              |
| onDragOver       | Se dispara cuando un elemento se arrastra sobre otro.                                                                                                                   |
| onDragStart      | Se dispara cuando se comienza a arrastrar un elemento.                                                                                                                  |
| onDrop           | Se dispara cuando un elemento se suelta en otro (después de un evento `onDragOver`).                                                                                    |
| onFocus          | Se dispara cuando un elemento recibe el foco.                                                                                                                            |
| onBlur           | Se dispara cuando un elemento pierde el foco.                                                                                                                            |
| onChange         | Se dispara cuando el valor de un elemento de formulario cambia.                                                                                                         |
| onInput          | Se dispara cuando se introduce texto en un elemento de formulario o en un elemento editable.                                                                            |
| onSubmit         | Se dispara cuando se envía un formulario.                                                                                                                               |
| onTouchCancel    | Se dispara cuando una interacción táctil es cancelada.                                                                                                                  |
| onTouchEnd       | Se dispara cuando una interacción táctil es finalizada.                                                                                                                 |
| onTouchMove      | Se dispara cuando un dedo se mueve en una pantalla táctil.                                                                                                              |
| onTouchStart     | Se dispara cuando un dedo toca una pantalla táctil.                                                                                                                     |
| onCopy           | Se dispara cuando se copia contenido en el portapapeles.                                                                                                                 |
| onCut            | Se dispara cuando se corta contenido en el portapapeles.                                                                                                                 |
| onPaste          | Se dispara cuando se pega contenido desde el portapapeles.                                                                                                              |
| onScroll         | Se dispara cuando se desplaza un elemento (por ejemplo, una barra de desplazamiento).                                                                                  |
| onWheel          | Se dispara cuando se hace girar la rueda del ratón sobre un elemento.                                                                                                   |

# Cómo recibir parámetros en los eventos
Para pasar parámetros a una función llamada en la ejecución de un evento en React, debemos utilizar funciones flecha de ES6. Por ejemplo:

```jsx
<button  onClick={(e) => this.deleteRow(id, e)} >Delete Row</button> 
```
En este caso, cuando se ejecuta onClick, se llama a la función flecha que toma como parámetro e. Luego, esta función llama a deleteRow, que debe estar declarada dentro del componente, y le pasa el evento e junto con cualquier otro parámetro necesario.

# Ejemplo aplicado a nuestro código
Aplicaremos la utilización de eventos en nuestro componente Login, quedando de la siguiente manera:
```js
import React, { Component } from 'react';

class Login extends Component {
  ingresar = (e) => {
    alert("¡Entré!");
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <label>Usuario</label>
            <input type="text" placeholder="Introduzca su usuario" />
          </div>
          <div>
            <label>Contraseña</label>
            <input type="password" placeholder="Introduzca su contraseña" />
          </div>
          <button onClick={this.ingresar}>Ingresar</button>
        </form>
      </div>
    );
  }
}

export default Login;
```
Como vemos en el onClick debemos utilizar el this si el método lo tenemos declarado a nivel clase.

Ahora si declaramos la función ingresar dentro del render, lo hacemos sin él this. Quedando de la siguiente manera:

```js
render() {
  const ingresar = (e) => {
    alert("¡Entré!");
  };

  return (
    <div>
      <form>
        <div>
          <label>Usuario</label>
          <input type="text" placeholder="Introduzca su usuario" />
        </div>
        <div>
          <label>Contraseña</label>
          <input type="password" placeholder="Introduzca su contraseña" />
        </div>
        <button onClick={ingresar}>Ingresar</button>
      </form>
    </div>
  );
}
```
En el caso de las funciones, el llamado se realiza sin this y la misma debe estar declara en el componente:

```html
<button onClick={handleClick}>Registrarse</button>
```
Función declarada en el componente
```js
const handleClick =(evet=>{
    console.log("handleSubmit", form)
    event.preventDefault()
})
```

# Ejemplo aplicado a formularios
En el siguiente ejemplo veremos como aplicar el uso de eventos a un formulario en un componente tipo función.

Vamos a declarar un hook para almacenar los datos introducidos en el formulario:
```js
const [form, setForm] = useState({
  nombre: '',
  apellido: '',
  email: '',
  password: ''
});
```
Por otro lado vamos a declarar una función que se ejecutara con el evento submit del formulario:
```js
const handleSubmit = (event) => {
  console.log("handleSubmit", form);
  event.preventDefault();
};
```
El console.log nos retornara los datos que el usuario introdujo en el formulario.

Vemos el formulario (jsx) desarrollado:
```js
return (
  <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre</label>
        <input 
          type="text" 
          name="nombre" 
          value={form.nombre} 
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Apellido</label>
        <input 
          type="text" 
          name="apellido" 
          value={form.apellido} 
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email</label>
        <input 
          type="email" 
          name="email" 
          value={form.email} 
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Contraseña</label>
        <input 
          type="password" 
          name="password" 
          value={form.password} 
          onChange={handleChange}
        />
      </div>
      <button type="submit">Registrarse</button>
    </form>
  </div>
);
```
En React, el flujo de datos es unidireccional, lo que significa que necesitamos establecer una relación bidireccional entre los datos y los elementos de la interfaz de usuario. En el contexto de formularios, esto se logra asociando el valor (`value`) de los elementos de entrada (`input`) con las propiedades correspondientes en el estado del componente.

Por ejemplo, al asociar el valor del input de nombre con `form.nombre`, cualquier cambio en la propiedad `form.nombre` del estado del componente actualizará automáticamente el valor del input.

Además, capturamos el evento `onChange` en los inputs y llamamos a una función, comúnmente llamada `handleChange`, que se encarga de actualizar el estado del componente con los nuevos valores ingresados por el usuario. Esta función modifica el estado del componente de la siguiente manera: cada propiedad del estado (`form`) se actualiza con el valor correspondiente al atributo `name` del elemento que generó el evento `onChange`.

Es importante destacar que para que esta asociación funcione correctamente, el nombre de cada propiedad en el estado (`form`) debe coincidir exactamente con el atributo `name` de los elementos de entrada en el formulario.

Este enfoque asegura que los datos del formulario se mantengan sincronizados con los elementos de la interfaz de usuario, facilitando la gestión de formularios en React.
```javascript
const handleChange = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  console.log("handleChange", name, value);
  setForm({ ...form, [name]: value });
};
```

En este código:

- `handleChange` es una función que toma un parámetro `event`, que representa el evento de cambio en un elemento del formulario.
- Dentro de la función, obtenemos el `name` y el `value` del elemento que generó el evento (`event.target`).
- Utilizamos `console.log()` para imprimir en la consola el mensaje "handleChange", junto con el `name` y el `value` del elemento.
- Luego, actualizamos el estado `form` utilizando la función `setForm`, donde `{ ...form, [name]: value }` se utiliza para actualizar el valor correspondiente a la propiedad `name` en el estado `form`.

Esta función `handleChange` se utiliza comúnmente en formularios en React para manejar los eventos de cambio y actualizar el estado del componente en consecuencia.

### El componente completo queda de la siguiente manera:
```js
import React, { useState } from "react";

function RegistroPage() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: ""
  });

  const handleSubmit = (event) => {
    console.log("handleSubmit", form);
    event.preventDefault();
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log("handleChange", name, value);
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label>
          <input type="text" name="nombre" value={form.nombre} onChange={handleChange} />
        </div>
        <div>
          <label>Apellido</label>
          <input type="text" name="apellido" value={form.apellido} onChange={handleChange} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} />
        </div>
        <div>
          <label>Contraseña</label>
          <input type="password" name="password" value={form.password} onChange={handleChange} />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default RegistroPage;
```
En este código:

- Se define un componente de función `RegistroPage` que utiliza el hook de estado `useState` para mantener el estado del formulario.
- Se define una función `handleSubmit` que se llama cuando se envía el formulario. Esta función imprime el estado del formulario en la consola y previene el comportamiento predeterminado del envío del formulario.
- Se define una función `handleChange` que se llama cuando cambia un campo de entrada en el formulario. Esta función actualiza el estado del formulario con los nuevos valores ingresados por el usuario.
- El formulario HTML contiene varios campos de entrada (`<input>`) que están vinculados al estado del formulario y manejan eventos de cambio (`onChange`) utilizando la función `handleChange`.
- El botón de envío del formulario (`<button>`) se utiliza para enviar el formulario y llama a la función `handleSubmit` cuando se hace clic en él.

Este componente `RegistroPage` representa un formulario de registro en React que maneja el estado del formulario y los eventos de cambio de manera efectiva.

# React hook forms
Es una biblioteca para react, en la cual nos permite realizar construcción y validaciones de formularios de manera sencilla.

https://react-hook-form.com/

En el siguiente video se puede observar como aplicar la misma:

https://www.youtube.com/watch?v=xjkzYyoz5k8&list=PLhA16iIUESxnCoaLz74beZ0fUDm1gemYk&index=14&t=14s
