import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Admin from "./components/Admin";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Anadidos from "./components/Anadidos";
import NotFound from "./components/NotFound";

import { AuthContext } from "./context/AuthContext";

const App = () => {
  const { currentUser } = useContext(AuthContext);

  const RequiredAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/admin"
          element={
            <RequiredAuth>
              <Admin />
            </RequiredAuth>
          }
        />
        <Route path="/anadidos" element={<Anadidos />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
