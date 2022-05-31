import React, { useId, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { HelmetProvider, Helmet } from "react-helmet-async";
import toast, { Toaster } from "react-hot-toast";

import { auth } from "../../firebase";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const id = useId();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    if (data.email.length === 0 || data.password.length === 0) {
      toast.error("¡Debes llenar todos los campos!");
      return false;
    }

    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        toast.success("Bienvenido(a) admin");
        navigate("/admin");
      })
      .catch((err) => {
        toast.error("Error al iniciar sesión");
      });
  };
  return (
    <HelmetProvider>
      <Helmet>
        <title>Iniciar sesión</title>
      </Helmet>

      <Toaster />
      <div className="bg-flora-base">
        <form onSubmit={handleLogin}>
          <div className="p-4 flex flex-col items-center h-screen">
            <h1 className="text-2xl font-bold my-4 uppercase text-flora-white">
              Panel administrador
            </h1>
            <div className="bg-neutral-100 border[1px] border-neutral-500 rounded-xl px-5 py-8 shadow-xl w-80">
              <label
                htmlFor={id}
                className="block text-md font-bold text-flora-black"
              >
                Correo
              </label>
              <input
                type="email"
                placeholder="correo@correo.com"
                id={id}
                autoComplete="off"
                onChange={(e) => setData({ ...data, email: e.target.value })}
                className="rounded-md shadow-md border-2 w-full outline-flora-base border-neutral-500/5 p-2 my-4"
              />
              <label
                htmlFor={id + 1}
                className="block text-md font-bold text-flora-black"
              >
                Contraseña
              </label>
              <input
                type="password"
                placeholder="********"
                id={id + 1}
                autoComplete="off"
                onChange={(e) => setData({ ...data, password: e.target.value })}
                className="rounded-md shadow-md border-2 w-full outline-flora-base border-neutral-500/5 p-2 my-4"
              />
              <div className="flex flex-col justify-center w-full">
                <button
                  type="submit"
                  className="bg-flora-second my-3 px-4 py-2 outline-none text-flora-white font-semibold rounded-lg transition-colors duration-300 hover:bg-red-700"
                >
                  Iniciar sesión
                </button>
                <Link to={'/restablecer'} className="my-2 text-center text-black font-normal rounded-lg transition-colors duration-300 hover:text-red-600">
                  Olvidé mi contraseña
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </HelmetProvider>
  );
};
export default Login;
