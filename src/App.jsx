import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Admin from "./views/Admin";
import Login from "./views/Login";
import Anadidos from "./views/Anadidos";
import NotFound from "./views/NotFound";

import { AuthContext } from "./context/AuthContext";
import Forgot from "./views/Forgot";

const App = () => {
  const { currentUser } = useContext(AuthContext);

  const RequiredAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/" />; // si no esta autenticado, redirige a la pagina de inicio, si sí, muestra el contenido
  };

  return (
    <BrowserRouter>
      {currentUser ? <Navbar /> : null} {/* Si hay usuario, muestra navbar, si no hay, la borra */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/admin"
          element={
            <RequiredAuth>
              <Admin />       {/* Ruta protegida */}
            </RequiredAuth>
          }
        />
        <Route
          path="/anadidos"
          element={
            <RequiredAuth>
              <Anadidos />    {/* Ruta protegida */}
            </RequiredAuth>
          }
        />
        <Route path="/restablecer" element={<Forgot />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
