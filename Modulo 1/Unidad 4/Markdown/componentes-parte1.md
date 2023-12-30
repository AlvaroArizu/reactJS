# Unidad 4
- Componentes
- Tipos de componentes
- Más sobre componentes
- Desarrollando sobre nuestra aplicación
# Componentes
### Propiedades

En React, los componentes pueden recibir propiedades como parámetros desde un componente padre, lo que permite insertar valores y eventos en su HTML.

Imagina un componente que representa un menú con varias opciones, pasadas como parámetros en una propiedad llamada "options". Para acceder a estas propiedades en el componente hijo al renderizarlo, utilizamos las "props". Por ejemplo, en el componente <Menu />:

```javascript
class Menu extends React.Component {
  render() {
    const options = this.props.options; // Accedemos a las propiedades mediante this.props
    // Resto del código...
  }
}
```
En el caso de un componente funcional, las propiedades se reciben como parámetros de la función:
```js
function Menu(props) {
  // Podemos acceder directamente a las propiedades como parámetros
  const options = props.options;
  // Resto del código...
}
```

Esto resume cómo se manejan las propiedades en los componentes de React, ya sea en componentes de clase o en componentes funcionales.

### Estados en React y Uso de setState()

En React, además de las props, los componentes pueden tener estados. Una característica clave de los estados es que si estos cambian, el componente se renderiza automáticamente.

Supongamos que tenemos el componente <App /> y queremos almacenar las opciones del menú en su estado. El código de App se vería así:

```javascript
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOptions: ['Inicio', 'Perfil', 'Configuración']
    };
  }

  // ...resto del código
}
```
Aquí, las "opciones" están en el estado de la aplicación (App) y se pueden pasar a componentes hijos (como Menú) a través de las props.

Si queremos modificar este estado, por ejemplo, añadiendo una nueva opción al menú desde un componente hijo, podemos usar la función `setState:`
```JS
class App extends Component {
  // ...código anterior

  handleAddOption = (newOption) => {
    this.setState((prevState) => ({
      menuOptions: [...prevState.menuOptions, newOption]
    }));
  }

  render() {
    return (
      <div>
        <Menu options={this.state.menuOptions} onAddOption={this.handleAddOption} />
        {/* Otros componentes y lógica */}
      </div>
    );
  }
}
```
En este caso, `handleAddOption` es una función en el componente padre que recibe la nueva opción como argumento y utiliza `setState` para actualizar el estado, añadiendo la nueva opción al menú. Esta función puede ser pasada como prop al componente hijo para ser ejecutada allí, permitiendo que el componente hijo actualice el estado del padre.

De esta manera, se aprovecha `setState` para modificar el estado a través de un evento disparado desde el componente hijo hacia el padre.

### Eventos en React

En React, mientras las propiedades se transmiten de padres a hijos, los eventos se propagan en dirección contraria, de hijos a padres. Un evento que se dispare en un componente hijo puede ser capturado por el componente padre.

Vamos a ilustrar esto con un ejemplo utilizando el componente <Menu />, que tendrá una nueva propiedad llamada `onAddOption`. Esta propiedad se configurará para llamar a la función `handleAddOption` en <App />, permitiendo así la modificación del estado:

```javascript
// En el componente Menu
import React from 'react';

const Menu = ({ onAddOption }) => {
  return (
    <div>
      <button onClick={() => onAddOption('Nueva Opción')}>
        Añadir Opción
      </button>
      {/* Resto del código del menú */}
    </div>
  );
};
```
En este fragmento, el botón en el componente <Menu /> está configurado con un evento onClick que, al ser activado, llamará a la función onAddOption pasada como propiedad desde el padre (<App /> en este caso).

En el componente padre <App />, la función handleAddOption se encargará de modificar el estado cada vez que se invoque:
```js
// En el componente App
class App extends Component {
  // ...código anterior

  handleAddOption = (newOption) => {
    this.setState((prevState) => ({
      menuOptions: [...prevState.menuOptions, newOption]
    }));
  }

  render() {
    return (
      <div>
        <Menu onAddOption={this.handleAddOption} />
        {/* Otros componentes y lógica */}
      </div>
    );
  }
}
```

ChatGPT
Aquí tienes un resumen en formato Markdown sobre cómo los eventos en React se disparan desde los hijos hacia los padres y cómo se pueden manejar en el componente padre:

markdown
Copy code
## Eventos en React: Comunicación de Hijos a Padres

En React, mientras las propiedades se transmiten de padres a hijos, los eventos se propagan en dirección contraria, de hijos a padres. Un evento que se dispare en un componente hijo puede ser capturado por el componente padre.

Vamos a ilustrar esto con un ejemplo utilizando el componente <Menu />, que tendrá una nueva propiedad llamada `onAddOption`. Esta propiedad se configurará para llamar a la función `handleAddOption` en <App />, permitiendo así la modificación del estado:

```javascript
// En el componente Menu
import React from 'react';

const Menu = ({ onAddOption }) => {
  return (
    <div>
      <button onClick={() => onAddOption('Nueva Opción')}>
        Añadir Opción
      </button>
      {/* Resto del código del menú */}
    </div>
  );
};
```
En este fragmento, el botón en el componente <Menu /> está configurado con un evento onClick que, al ser activado, llamará a la función onAddOption pasada como propiedad desde el padre (<App /> en este caso).

En el componente padre <App />, la función handleAddOption se encargará de modificar el estado cada vez que se invoque:

```javascript
Copy code
// En el componente App
class App extends Component {
  // ...código anterior

  handleAddOption = (newOption) => {
    this.setState((prevState) => ({
      menuOptions: [...prevState.menuOptions, newOption]
    }));
  }

  render() {
    return (
      <div>
        <Menu onAddOption={this.handleAddOption} />
        {/* Otros componentes y lógica */}
      </div>
    );
  }
}
```
Aquí, `handleAddOption` es una función definida en el componente <App />, pasada como prop `onAddOption` al componente hijo <Menu />, y se encarga de modificar el estado de la aplicación al agregar una nueva opción al menú cada vez que se dispare el evento desde el botón.

Esta interacción permite que un evento disparado desde un componente hijo sea capturado por el componente padre, facilitando la comunicación entre componentes en la jerarquía de React.

La vinculación de` handleAddOption` con `this` asegura que la función pueda acceder al contexto de la clase y utilizar `setState` para modificar el estado, desencadenando así una nueva representación de los elementos afectados en el navegador.

De esta manera, cada clic en el botón dispara una llamada a la función en el componente padre, que actualiza el estado y provoca un nuevo renderizado de los componentes.

# Ciclo de Vida de un Componente en React

El ciclo de vida de un componente en React describe una serie de estados por los cuales pasa durante su existencia. Estos estados tienen correspondencia con diversos métodos que podemos implementar para realizar acciones en momentos específicos del ciclo.

En React, comprender el ciclo de vida es fundamental, ya que ciertas acciones deben realizarse en momentos específicos para garantizar el funcionamiento adecuado de un componente. Es esencial aprender las distintas etapas por las que pasa la ejecución de un componente React.

### Clasificaciones de Estados en el Ciclo de Vida:
- **Montaje**: Ocurre la primera vez que un componente se genera e se incluye en el DOM.
- **Actualización**: Sucede cuando un componente ya generado se está actualizando debido a cambios en el estado o las props.
- **Desmontaje**: Se produce cuando el componente se elimina del DOM.

### Fases del Ciclo de Vida y Métodos Principales:
- **Constructor**: Inicializa el estado y enlaza métodos antes del montaje en el DOM.
- **componentDidMount()**: Se ejecuta inmediatamente después del montaje, útil para realizar tareas como solicitudes a servidores o inicialización de librerías externas.
- **componentDidUpdate()**: Se llama después de una actualización, útil para realizar operaciones después de que se actualice el DOM debido a cambios en el estado o las props.
- **componentWillUnmount()**: Se ejecuta justo antes de que se elimine el componente del DOM, ideal para limpiar recursos como cancelar peticiones AJAX o eliminar event listeners.

Estos métodos permiten controlar y realizar acciones específicas en diferentes momentos del ciclo de vida de un componente React, lo que es crucial para desarrollar aplicaciones eficientes y funcionales.

`Este resumen resume las principales etapas del ciclo de vida de los componentes en React y los métodos más importantes asociados con cada fase. Si necesitas más detalles sobre alguna etapa específica o métodos adicionales del ciclo de vida, no dudes en preguntar.`

## Descripción de los Métodos del Ciclo de Vida en React
### Montaje
- **componentWillMount()**: Se ejecuta justo antes del primer renderizado del componente. Si se actualiza el estado con `setState()`, el primer render mostrará el dato actualizado y se renderizará una sola vez.
- **componentDidMount()**: Ocurre inmediatamente después del primer renderizado. Ideal para realizar tareas como llamadas Ajax o configuraciones que requieren acceso a los elementos del DOM.

### Actualización
- **componentWillReceiveProps(nextProps)**: Se invoca cuando las propiedades se van a actualizar, excepto en el primer renderizado. Recibe las próximas props como parámetro.
- **shouldComponentUpdate(nextProps, nextState)**: Devuelve un booleano indicando si el componente debería renderizarse de nuevo. Oportunidad para optimizar evitando renderizados innecesarios. Por defecto, devuelve true.
- **componentWillUpdate(nextProps, nextState)**: Se llama justo antes de que el componente se actualice. Útil para preparar la próxima renderización.

### Post-Actualización
- **componentDidUpdate(prevProps, prevState)**: Se ejecuta después de que se produce la actualización del componente. Permite operaciones con el DOM o acciones basadas en los cambios.
  
### Desmontaje
- **componentWillUnmount()**: Se ejecuta cuando el componente se retira del DOM. Importante para limpiar recursos como temporizadores o event listeners que no deben persistir.

Estos métodos permiten controlar las acciones en diferentes etapas del ciclo de vida de un componente en React, lo que facilita la optimización y la gestión adecuada de recursos.
