import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  const navigate = useNavigate();

  const signOutUser = () => {
    localStorage.removeItem("user");
    window.location.reload();
    navigate("/");
  };

  return (
    <nav className="w-full z-20 px-10 h-16 flex justify-end items-center bg-flora-base text-flora-white">
      <ul className="hidden md:flex md:items-center font-medium">
        <motion.li
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 1,
              type: "spring",
            },
          }}
          className="nav-link"
        >
          <Link to={"/admin"}>Crear producto</Link>
        </motion.li>
        <motion.li
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 1,
              delay: 0.5,
              type: "spring",
            },
          }}
          className="nav-link"
        >
          <Link to={"/anadidos"}>Ver productos</Link>
        </motion.li>
        <motion.li
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 1,
              delay: 0.75,
              type: "spring",
            },
          }}
          className="nav-link"
        >
          <a href="https://annykactus.com/" target="_blank">
            Ir a Anny Kactus
          </a>
        </motion.li>
        <motion.li
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 1,
              delay: 0.5,
              type: "spring",
            },
          }}
        >
          <button
            onClick={signOutUser}
            className="bg-flora-second px-3 py-2 rounded-md hover:bg-red-600 transition-all duration-300"
          >
            Cerrar sesión
          </button>
        </motion.li>
      </ul>

      <motion.div
        className="text-xl md:hidden z-10"
        onClick={handleClick}
        animate={{
          y: [-100, 0],
          opacity: [0, 1],
          transition: {
            delay: 0.5,
            duration: 1.25,
          },
        }}
      >
        {isOpen ? (
          <CloseOutlined className="cursor-pointer" />
        ) : (
          <MenuOutlined className="cursor-pointer" />
        )}
      </motion.div>

      <ul
        className={
          !isOpen
            ? "absolute top-[-100%] left-0 w-screen h-[40vh] bg-flora-base flex flex-col justify-center items-center rounded-b-2xl ease-in-out duration-1000"
            : "absolute top-[50px] left-0 w-screen h-[50vh] bg-flora-base shadow-sm flex flex-col justify-center items-center rounded-b-2xl ease-in-out duration-1000"
        }
      >
        <li className="mobile">
          <Link to={"/admin"} onClick={handleClick}>
            Crear producto
          </Link>
        </li>
        <li className="mobile">
          <Link to={"/anadidos"} onClick={handleClick}>
            Ver productos
          </Link>
        </li>
        <motion.li className="mobile">
          <a
            href="https://annykactus.com/"
            target="_blank"
            onClick={handleClick}
          >
            Ir a Anny Kactus
          </a>
        </motion.li>
        <li>
          <button
            onClick={signOutUser}
            className="bg-flora-second px-3 py-2 my-4 rounded-md hover:bg-red-600 transition-all duration-300"
          >
            Cerrar sesión
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
