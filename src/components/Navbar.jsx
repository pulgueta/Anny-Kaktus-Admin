import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full h-16 flex justify-around items-center bg-flora-base text-flora-white">
      <ul className="hidden md:flex font-medium">
        <motion.li
          initial={{
            y: -60,
            opacity: 0,
          }}
          animate={{
            y: 0,
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
            y: -60,
            opacity: 0,
          }}
          animate={{
            y: 0,
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
            ? "absolute top-[-100%] left-0 w-screen h-[50vh] bg-flora-base flex flex-col justify-center items-center rounded-b-2xl ease-in-out duration-1000"
            : "absolute top-[50px] left-0 w-screen h-[30vh] bg-flora-base shadow-sm flex flex-col justify-center items-center rounded-b-2xl ease-in-out duration-1000"
        }
      >
        <li className="mobile">
          <Link to={"/admin"} onClick={handleClick}>
            Crear producto
          </Link>
        </li>
        <li className="mobile">
          <Link to={"/añadidos"} onClick={handleClick}>
            Ver productos
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
