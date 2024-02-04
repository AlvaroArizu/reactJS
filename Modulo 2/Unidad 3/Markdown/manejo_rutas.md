# Manejo de rutas
- React router
- Configurar ruteo en app.js
- Configurar enlaces de dirección
- Recibir parámetros por URL
- useHistory
- NavLink
- Redirect
- Not Found

# React Router

El componente Router no es un módulo oficial de React, pero es esencial para crear aplicaciones web navegables al permitir la navegación entre distintas páginas.

### Instalación

Para instalar el componente Router, utiliza el siguiente comando en el directorio de tu aplicación:

```bash
npm install react-router-dom
```
# Configurar ruteo en app.js

En el archivo app.js, configura el ruteo de la siguiente manera:
```js
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RegistroPage from './Pages/RegistroPage';
import Menu from './Components/Menu';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Switch>
          <Route path="/registro">
            <RegistroPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
```
# Configurar enlaces de dirección

Utiliza el componente Link para crear enlaces:
```js
import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <ul>
        <li></li>
        <li></li>
      </ul>
      <Link to="/">Home</Link>
      <Link to="/registro">Registro</Link>
    </div>
  );
}

export default Menu;
```
# Recibir parámetros por URL

Para recibir parámetros por URL, indica en el componente Route lo siguiente:
```js
<Route path="/detalle/:id">
  <DetallePage />
</Route>
```
En el componente de clase, el parámetro se enviará así:
```js
constructor(props) {
  super(props);
  console.log(this.props.params.id);
}
```
En el componente de función, puedes usar el hook `useParams()`:
```js
import React from "react";
import { useParams } from "react-router-dom";

function DetallePage() {
  const { id } = useParams();
  console.log(id);
  return <div>DetallePage</div>;
}

export default DetallePage;
```
# useHistory

El hook useHistory permite acceder al historial de navegación y realizar redirecciones desde la lógica del componente:
```jsimport React from "react";
import { useHistory } from "react-router-dom";

function RegistroPage() {
  let history = useHistory();
  
  function handleClick() {
    history.push("/home");
  }

  return (
    <div>
      Registro
      <button type="button" onClick={handleClick}>
        Go home
      </button>
    </div>
  );
}

export default RegistroPage;
```
# NavLink

NavLink es útil para armar barras de navegación. Ejemplo de uso en el componente Menu:
```js
function Menu() {
  return (
    <div>
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/registro">Registro</NavLink>
    </div>
  );
}

export default Menu;
```
Consulta todas las propiedades en https://reactrouter.com/web/api/NavLink.

# Redirect

Redirect permite realizar redirecciones en la lógica de ruteo. Puedes aplicarlo en el Switch para comparar direcciones:
```js
<Switch>
  <Redirect from="/home" to="/" />
  <Route path="/">
    <HomePage />
  </Route>
  <Route path="/">
    <HomePage />
  </Route>
</Switch>
```
Consulta más en https://reactrouter.com/web/api/Redirect

# Not Found

Para manejar páginas 404, utiliza la siguiente regla en el Switch:
```js
<Switch>
  <Route path="/" exact>
    <HomePage />
  </Route>
  <Route path="/registro" exact>
    <RegistroPage />
  </Route>
  <Route path="/detalle/:id" exact>
    <DetallePage />
  </Route>
  <Redirect from="/home" to="/" exact />
  <Route path="*">
    <NotFoundPage />
  </Route>
</Switch>
```
Esta configuración manejará cualquier URL no identificada en reglas anteriores