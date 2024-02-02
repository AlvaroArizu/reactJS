# Componetes Parte 2

## Hooks
Hooks son una nueva característica en React 16.8. Estos te permiten usar el estado y otras características de React sin escribir una clase

-  `useState` y `useEffect`: son los dos hooks mas comunes que se utiliz
-  useState es un hook en react, y el mismo lo utilizaremos para el manejo de estados.

```js
import React,  { useState } from 'react';
Function Example(){
    const [count, setCount]= useState(0);

    return(
        <div>
            <p>You cliked{count} times</p>
            <button onClick={()=>setCount(count+1)} >Click me </button>
        </div>
    );
}
```
Este ejemplo en ReactJS muestra un contador que se incrementa al hacer clic en un botón. Se utiliza el método useState en un componente funcional para agregar y gestionar un estado local. La función useState devuelve el valor actual del estado y una función para actualizarlo. A diferencia de this.setState en clases, no combina el estado antiguo y nuevo. El estado inicial, en este caso, es 0. No es necesario que el estado sea un objeto, aunque puede serlo. Este argumento de estado inicial solo se utiliza en el primer renderizado.

### Diferencia entre `hooks` y `clases`
La principal diferencia entre el uso de hooks y el uso de clases en React radica en cómo manejan y gestionan el estado y el ciclo de vida.

#### Estado y Hokks

- En componentes funcionales, los hooks, como useState, permiten agregar y gestionar el estado local.
- El estado se declara usando el hook useState, y React se encarga de manejarlo entre re-renderizaciones.
- No hay necesidad de crear una clase para tener estado, lo que simplifica el código y mejora la legibilidad.
```js
import React, { useState } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
    </div>
  );
}
```
#### Ciclo de vida y hooks
- Con el hook useEffect, puedes replicar el comportamiento del ciclo de vida en componentes funcionales.
- `useEffect` se ejecuta después de cada renderizado y puede realizar operaciones como efectos secundarios, suscripciones a datos, etc.
```js
import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Lógica de efecto secundario, similar a componentDidMount y componentDidUpdate en clases
    fetchData();
  }, []); // El segundo argumento [] indica que el efecto se ejecuta solo una vez al montar el componente

  return (
    // Renderizado del componente
  );
}
```
En resumen, el uso de hooks en componentes funcionales simplifica la gestión del estado y los efectos, eliminando la necesidad de clases para muchos casos. Esto hace que el código sea más conciso y fácil de entender.

**`Al contrario que en una clase, actualizar una variable de estado siempre la reemplaza en lugar de combinarla.`**

### Hooks de estados
```js
import React,  { useState } from 'react';
Function Example(){
    const [count, setCount]= useState(0);

    return(
        <div>
            <p>You cliked{count} times</p>
            <button onClick={()=>setCount(count+1)} >Click me </button>
        </div>
    );
}
```

En este ejemplo de React, se implementa un contador en un componente funcional utilizando el Hook useState. Al hacer clic en el botón, el valor del contador se incrementa. useState se utiliza para agregar y gestionar un estado local en el componente. Devuelve un par que consiste en el valor actual del estado y una función para actualizarlo, similar a this.setState en clases, pero sin combinar el estado antiguo y nuevo. El estado inicial se establece en 0, ya que el contador comienza desde cero. A diferencia de this.state, el estado no necesita ser un objeto. Este argumento de estado inicial solo se usa en el primer renderizado.

### Hooks de efectos
El Hook de efecto, `useEffect`, agrega la capacidad de realizar efectos secundarios desde un componente funcional. Tiene el mismo propósito que c`omponentDidMount`,`componentDidUpdate` y `componentWillUnmount` en las clases React, pero unificadas en una sola API.

#### Ej con clases
```js
class ExampleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            count:0
        };
    }
  componentDidMount() {
    // Lógica de montaje
    document.title=`You cliked ${this.state.count} times`
  }

  componentDidUpdate() {
    // Lógica de actualización
    document.title=`You cliked ${this.state.count} times`
  }

  componentWillUnmount() {
    // Lógica de desmontaje
  }

  render() {
    // Renderizado del componente
    return(
        <div>
            <p>Clicked {this.state.count} times</p>
            <button onClick={ () => this.setState({count: this.state.count +1})}>
                Click me!
            </button>
        </div>
    );
  }
}
```
#### Ejemplo con Hooks
```js
import React,  { useState } from 'react';
Function Example(){
    const [count, setCount]= useState(0);

    return(
        <div>
            <p>You cliked{count} times</p>
            <button onClick={()=>setCount(count+1)} >Click me </button>
        </div>
    );
}
```
En el ejemplo, se declara la variable de estado count y se utiliza el Hook useEffect para realizar un efecto secundario. Se pasa una función al useEffect, la cual actualiza el título del documento mediante la API document.title. El valor más reciente de count se puede leer dentro del efecto debido al ámbito de la función. React recordará y ejecutará este efecto después de cada renderizado, incluyendo el primero, asegurando que el título refleje el estado actual.

### Equivalencias entre Hooks de efectos y Ciclos de Vida
#### componentDidMount
```js
useEffect(()=>{
    // Código a ejecutar al montarse el componente
}, []);
```
En este caso, el efecto se ejecutará una vez después de que el componente se haya montado. El array vacío [] como segundo argumento indica que el efecto no depende de ninguna variable y, por lo tanto, se ejecutará solo en el montaje inicial.
#### componentDidUpdate
```js
useEffect(()=>{
    // Código a ejecutar cuando cambia un valor observado (segundo parámetro)
}, [var1, var2]);
```
Este efecto se ejecutará cada vez que el componente se monte y también cuando las variables var1 o var2 se actualicen. El array [var1, var2] especifica las dependencias del efecto.
#### componentWillUnmount
```js
useEffect(()=>{
    return ()=>{
        //Código a ejecutar antes de desmontarse el componente
    }
}, []);
```
Aquí, el efecto se ejecutará una vez, justo antes de que el componente se desmonte. La función de retorno dentro de useEffect actúa como la lógica equivalente a componentWillUnmount en clases.

Estas equivalencias permiten realizar acciones similares a los ciclos de vida de los componentes de clase, pero con la simplicidad y la flexibilidad que ofrecen los Hooks en los componentes funcionales de React.
### Construir nuestros propios hooks
Al construir tus propios Hooks en React, puedes modularizar y reutilizar la lógica del componente de manera eficiente. 

Ejemplo tenemos un chat con un componente para mostrar el status de un amigo y otro para mostrar la lista de amigos:
### FriendStatus
```js
import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  }, []);

  if (isOnline === null) {
    return 'Loading...';
  }

  return isOnline ? 'Online' : 'Offline';
}
```

Este código define un componente `FriendStatus` que muestra el estado en línea (online/offline) de un amigo. Breve explicación:

#### Estado y Efecto:
- Usa `useState` para el estado `isOnline`.
- Utiliza `useEffect` para manejar la suscripción y desuscripción al servicio `ChatAPI`.

#### handleStatusChange:
- La función `handleStatusChange` actualiza `isOnline` basándose en el estado recibido.

#### Subscripción y Desubscripción:
- Se suscribe a actualizaciones de estado del amigo usando `ChatAPI.subscribeToFriendStatus`.
- Se desuscribe al desmontarse el componente con `ChatAPI.unsubscribeFromFriendStatus` en el retorno de `useEffect`.

#### Renderizado Condicional:
- Muestra 'Loading...' si `isOnline` es `null`.
- Muestra 'Online' si `isOnline` es `true`, de lo contrario, muestra 'Offline'.

### FriendListItem
```js
import React, { useState, useEffect } from 'react';

function FriendListItem(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  }, []);

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  );
}
```
### Estado y Efecto:
- Utiliza `useState` para declarar el estado `isOnline`.
- Utiliza `useEffect` para gestionar la suscripción y desuscripción al servicio `ChatAPI` al cambiar el estado del amigo.

### `handleStatusChange`:
- Define una función `handleStatusChange` que actualiza el estado `isOnline` basándose en el estado recibido.

### Subscripción y Desubscripción:
- Se suscribe a actualizaciones de estado del amigo usando `ChatAPI.subscribeToFriendStatus`.
- Se desuscribe al desmontarse el componente con `ChatAPI.unsubscribeFromFriendStatus` en la función de retorno de `useEffect`.

### Renderizado:
- Renderiza un elemento `<li>` con el nombre del amigo (`props.friend.name`).
- El color del texto se establece en verde si el amigo está en línea (`isOnline === true`), de lo contrario, es negro.

Este componente encapsula la lógica de suscripción y desuscripción a un servicio externo (`ChatAPI`) para obtener y mostrar el estado en línea (online/offline) de un amigo en un elemento de lista (`<li>`).


### Uso de `useReducer` en React

`useReducer` es un hook de React que acepta un `reducer` de tipo `(state, action) => newState` y devuelve el estado actual emparejado con un método `dispatch`. Este enfoque es preferido sobre `useState` cuando la lógica del estado es compleja, implica múltiples subvalores o cuando el próximo estado depende del anterior.

Además, `useReducer` permite optimizar el rendimiento para componentes que activan actualizaciones profundas, ya que se puede pasar `dispatch` hacia abajo en lugar de callbacks.

```js
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error('Acción no reconocida');
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </div>
  );
}
```

En este ejemplo, el componente `Counter` utiliza `useReducer` con una función `reducer` para manejar el estado del contador. Cada clic en los botones de incremento y decremento realiza un `dispatch` con un tipo de operación, y la función `reducer` determina la lógica de actualización del estado en función de la acción.

## Preguntas Frecuentes sobre Hooks en React

### Nombrar Hooks Personalizados
Es recomendable nombrar los Hooks personalizados comenzando con "use". Esta convención es crucial para verificar automáticamente las reglas de los Hooks y asegurar su correcto funcionamiento.

### Compartir Estado entre Componentes
No, dos componentes que utilizan el mismo Hook no comparten estado. Los Hooks personalizados permiten reutilizar la lógica de estado, pero cada llamada a un Hook obtiene un estado completamente aislado.

### Obtención de Estado Aislado en un Hook Personalizado
Cada llamada a un Hook personalizado obtiene un estado aislado. Al llamar directamente a un Hook personalizado, como `useFriendStatus`, React considera que el componente está utilizando `useState` y `useEffect` de manera aislada para gestionar su propio estado y efectos.