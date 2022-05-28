import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Admin from "./views/Admin";
import Login from "./views/Login";
import Anadidos from "./views/Anadidos";
import NotFound from "./views/NotFound";

import { AuthContext } from "./context/AuthContext";

const App = () => {
  const { currentUser } = useContext(AuthContext);
  
  const RequiredAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/" />;
  };

  return (
    <BrowserRouter>
     {currentUser ? <Navbar /> : null}
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
        <Route
          path="/anadidos"
          element={
              <Anadidos />
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
