import React from 'react';
import './App.css';
import ContenidoClase from './ContenidoClase';
import ContenidoFuncion from './ContenidoFuncion';

function App() {  
  return (
    <div className="App">
      <header className="App-header">
        <ContenidoClase/>
        <br />
        <div>----------------------------------------</div>
        <ContenidoFuncion/>
      </header>
    </div>
  );
}

export default App;
