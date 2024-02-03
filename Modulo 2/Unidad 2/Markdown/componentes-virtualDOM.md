# Componentes y Virtual DOM
- Map
- Trabajando con nuestra aplicación
- API REST
- Promise
- Aplicando una consulta API a nuestro código
- Aplicando axios en lugar de fetch


# Map
El método map() crea un nuevo array con los resultados de la llamada a la función
indicada aplicados a cada uno de sus elementos. Por ejemplo:

```js
{this.props.cervezas.map(cerveza=><li>{cerveza}</li>)}
```
Cervezas es un array enviado como propiedad desde el llamado al componente:
```js
class App extends Component{
    render(){
        return (
            <div className="App">
                <h1>Cervezas</h1>
                <ListaCervezas cervezas={['Pilsner', 'Eisenhower', 'Lager']}/>
            </div>  
        );
    }
}
```
Podemos ver que el primer parámetro recibido por la función dentro de map hace referencia a cada objeto devuelto por la iteración del array.

# Trabajando con nuestra aplicación
Para mejorar la organización de nuestro código, podemos crear dos directorios:
- Pages
  - En este directorio ubicamos los componetes que sean una pagina completa, ej:
    - Home.js
    - DetallePage.js
    - InicioPage.js
    - RegistroPage.js
    
- Components
  - En este directorio  ubicamos todos los componentes más pequeños, que pueden ser usados en diferentes páginas, ej:
    - Menu.js
    - Productos.js 

# API REST
REST (Representational State Transfer) es una interfaz entre sistemas que utiliza el protocolo HTTP para obtener datos o realizar operaciones sobre esos datos. Se destaca por su simplicidad en comparación con otros protocolos como SOAP (Simple Object Access Protocol), ofreciendo una alternativa más sencilla para el intercambio de datos, utilizando formatos como XML y JSON.

### Ventajas de REST

- **Separación entre el cliente y el servidor:** REST separa la interfaz de usuario del servidor y el almacenamiento de datos, mejorando la portabilidad, la escalabilidad y permitiendo la evolución independiente de los componentes del desarrollo.

- **Visibilidad, fiabilidad y escalabilidad:** La separación entre cliente y servidor facilita el escalado del producto sin problemas, permitiendo cambios en el servidor o la base de datos, siempre que los datos se envíen correctamente. Esto hace que las aplicaciones sean más flexibles.

- **Independencia de plataformas o lenguajes:** La API REST siempre se adapta al tipo de sintaxis o plataformas utilizadas, ofreciendo libertad para cambiar o probar nuevos entornos de desarrollo. Puede tener servidores en PHP, Java, Python o Node.js, siempre que las respuestas se realicen en el lenguaje de intercambio de información, generalmente XML o JSON.

# Promise
Una `Promise` (promesa en castellano) es un objeto que representa la terminación o el fracaso eventual de una operación asíncrona. Se puede crear usando su constructor, pero generalmente se consumen promesas ya creadas devueltas desde funciones.

Esencialmente, una promesa es un objeto al que se le pueden adjuntar funciones de retorno en lugar de pasar funciones de retorno a una función. A diferencia de las funciones callback pasadas al estilo antiguo, una promesa proporciona garantías, como:

- Las funciones callback nunca serán llamadas antes de la terminación de la ejecución actual del bucle de eventos de JavaScript.
- Las funciones callback añadidas con `.then` se llamarán después del éxito o fracaso de la operación asíncrona.
- Se pueden añadir múltiples funciones callback llamando a `.then` varias veces, ejecutándose en el orden de inserción.

El beneficio más inmediato de las promesas es el encadenamiento.

```js
function exitoCallback(resutado){
    console.log("Exito en callback", resultado);
}
function errorCallback(error) {
    console.log("Error en callback", error);
}
hazAlgo(exitoCallback, errorCallback);
```
### Function moderna
```js
hazAlgo().then(exitoCallback, errorCallback);
```
### Function viejo
```js
hazAlgo().then(function(resultad){
    return hazAlgoMas(resultado):
})
.then(function(nuevoResultaado){
    return hazLaTerceraCosa(nuevoResultado);
})
.catch(function(error);
```

# Aplicando una consulta API a nuestro código
Para realizar consultas a una API REST en nuestro código, adaptaremos el código anterior para obtener datos de usuarios desde una API. Hay dos enfoques: uno utilizando un componente de función y otro utilizando un componente de clase

### Componente Función:
En el componente Home, creamos los siguientes hooks:
```js
const [loading, setLoading] = useState(true);
const [productos, setProductos] = useState([]);
```
Luego, aplicamos el hook useEffect para la ejecución de la consulta al servicio al renderizarse el componente:
```js
useEffect(() => {
    const obtenerDatos = () => {
        // Llamada a la API con axios
        axios.get('https://api.mercadolibre.com/sites/MLB/search?q=camiseta')
            .then(response => {
                setProductos(response.data.results);
                setLoading(false);
            })
            .catch(error => {
                console.error("Hubo un error:", error);
                setLoading(false);
            });
    };

    obtenerDatos();
}, []);
```
Agregamos condiciones para mostrar el listado de productos solo si se ha completado la respuesta desde la API. En caso contrario, mostramos el loader o un mensaje de error:
```js
if (loading) {
    return <Loader />;
} else if (error) {
    return <div>Hubo un error</div>;
} else {
    return <ListadoDeProductos productos={productos} />;
}
```

### Componente de Clase:
En el componente Home, agregamos el constructor y el método componentDidMount donde llamaremos a la API y asignaremos los resultados a las variables correspondientes:

```js
constructor(props) {
    super(props);
    this.state = {
        loading: true,
        error: null,
        isLoaded: false,
        perfiles: []
    };
}

componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result);
                this.setState({ isLoaded: true, perfiles: result });
            },
            (error) => {
                console.error(error);
                this.setState({ isLoaded: true, error });
            }
        );
}
```
En el render, agregamos condiciones para mostrar el listado de perfiles solo si se ha completado la respuesta desde la API. En caso contrario, mostramos el loader o un mensaje de error:
```js
render() {
    const { error, isLoaded, perfiles } = this.state;
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ul>
                {perfiles.map(perfil => (
                    <Perfil datos={perfil} />
                ))}
            </ul>
        );
    }
}
```
Este enfoque utiliza el método fetch para la llamada a la API REST, manejando la respuesta con promises (then).

# Aplicando Axios en lugar de Fetch
Axios es una librería JavaScript que simplifica las operaciones como cliente HTTP, permitiéndonos configurar y realizar solicitudes a un servidor y procesar fácilmente las respuestas. Al utilizar Axios, obtenemos varias ventajas:

- API unificada para solicitudes Ajax.
- Optimizado para el consumo de servicios web, API REST y datos JSON.
- Fácil de usar y complemento ideal para páginas convencionales.
- Peso ligero, apenas 13KB minimizado y aún menos si se envía comprimido al servidor.
- Compatibilidad con todos los navegadores en sus versiones actuales.

### Instalación de Axios
Para instalar Axios, ejecutamos el siguiente comando en el directorio raíz de nuestro proyecto:

```bash
npm install axios
```
Una vez instalado, podemos consumir directamente sus métodos. A continuación, se describen los pasos para organizar el código:

### 1. Creación de un directorio y archivo para configuración:
Creamos un directorio llamado `config` y dentro de él un archivo llamado `axios.js`. En este archivo, requerimos la biblioteca Axios y creamos una instancia que exportaremos.
```js
// En axios.js
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.ejemplo.com',  // URL base, puede variar según la API
});

export default instance;
```
### 2. Creación de directorio "services" y archivos para entidades:
Dentro del directorio `src`, creamos un directorio llamado `services`. Dentro de este directorio, creamos un archivo JavaScript por cada entidad que queremos consultar. Por ejemplo, si consultamos ítems, creamos `items.js`. Si la entidad es compras, creamos `compras.js`.
```js
// En itemsServices.js
import axios from '../config/axios';

export const getAllItems = () => {
    return axios.get('/items').then(response => response.data);
};

export const getItemById = (itemId) => {
    return axios.get(`/items/${itemId}`).then(response => response.data);
};
```
### 3. Uso en componentes:
En el componente donde queremos utilizar estos métodos, importamos la función correspondiente y realizamos el llamado al método.
```js
// En algún componente
import { getAllItems, getItemById } from '../services/itemsServices';

// Uso del método para obtener todos los ítems
getAllItems().then(items => {
    console.log(items);
});

// Uso del método para obtener un ítem por su ID
getItemById('123').then(item => {
    console.log(item);
});
```
Axios ofrece funcionalidades adicionales en comparación con Fetch, como la definición de la URL base o el uso de interceptors. Aunque no es necesario su uso, proporciona comodidades adicionales para la construcción de aplicaciones React. Para obtener más información sobre Axios, puedes consultar:

https://github.com/axios/axios