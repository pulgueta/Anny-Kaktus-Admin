import React, {useContext} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Admin from './components/Admin';
import Login from './components/Login';
import NotFound from './components/NotFound';

import { AuthContext, AuthContextProvider } from "./context/AuthContext";

const App = () => {
  const {currentUser} = useContext(AuthContext);

  const RequiredAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/admin' element={<Admin />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App