import React, { useId, useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { sendPasswordResetEmail } from "firebase/auth";

import { auth } from "../../firebase";
import { validateEmail } from "../functions/validateEmail";
import { Link } from "react-router-dom";

const Forgot = () => {
  const id = useId();

  const form = useRef();

  const [email, setEmail] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (email === "") {
      toast("¡Debes ingresar un email!", {
        type: "error",
        duration: 1000,
      });
    } else if (!validateEmail(email)) {
      toast("¡El email no es válido!", {
        type: "error",
        duration: 1000,
      });
    } else {
      await sendPasswordResetEmail(auth, email)
        .then(() => {
          toast("¡Revisa tu correo!", {
            type: "success",
            duration: 1000,
          });
          setEmail("");
          form.current.reset();
        })
        .catch(() => {
          toast("¡No eres admin!", {
            duration: 1250,
            icon: "🤨",
          });
          setEmail("");
          form.current.reset();
        });
    }
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Recuperar contraseña</title>
      </Helmet>
      <div className="h-screen bg-flora-base">
        <Toaster />
        <div className="py-10 flex justify-center">
          <motion.form
            initial={{
              opacity: 0,
              x: -100,
            }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 1.25,
              },
            }}
            ref={form}
            className="bg-white shadow-md rounded-lg w-96 py-8 px-3 flex flex-col"
            onSubmit={handleResetPassword}
          >
            <h1 className="text-xl font-medium mb-6 text-center">
              Recuperar contraseña
            </h1>

            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              htmlFor="email"
              name="email"
              className="contactinput w-full"
              onChange={(e) => setEmail(e.target.value)}
              id={id}
            />

            <button
              type="submit"
              className="bg-flora-second text-white font-medium p-2 w-full rounded-md transition-all duration-300 hover:bg-red-600"
            >
              Recuperar contraseña
            </button>
            <Link to={"/"} className="text-center mt-4 hover:text-red-600 transition-all duration-300">Volver</Link>
          </motion.form>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Forgot;
