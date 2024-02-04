import Home from "./Pages/Home.jsx";
import Detalle from "./Pages/Detalle.jsx";
import NavBar from "./Components/NavBar.jsx";
import Contador from "./Pages/Contador.jsx";
import Login from "./Pages/Login.jsx";
import Registro from "./Pages/Registro.jsx";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import NotFound from "./Pages/NotFound.jsx";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contador" element={<Contador />} />
          <Route path="/ingresar" element={<Login />} />
          <Route path="/alta" element={<Registro />} />
          <Route path="/producto/:id" element={<Detalle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <div>Footer</div>
      </Router>
    </>
  );
}

export default App;
