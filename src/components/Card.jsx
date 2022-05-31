import React from "react";

const Card = (props) => {
  return (
    <div className="h-96 w-80 rounded-xl shadow-md bg-white">
      <img
        src={props.image}
        alt={props.alt}
        className="object-cover w-full h-[120px] rounded-t-xl"
      />
      <div className="py-3 px-6 h-[250px] overflow-hidden flex flex-col justify-between">
        <h1 className="font-bold text-lg">{props.title}</h1>

        <p className="text-neutral-500 text-sm">{props.description}</p>
        <div className="flex flex-col justify-between items-center">
          <h1 className="font-bold text-lg mb-2">{props.price}</h1>
          <div className="flex text-center ">
            <button
              className="bg-flora-second block cursor-pointer py-2 px-3 rounded-md text-flora-white font-semibold transition-colors duration-300 hover:bg-flora-secondhover"
              onClick={props.removeItem}
            >
              Eliminar
            </button>
            <button
              onClick={() => props.handleDataEdit(props.data)}
              className="bg-blue-500 block ml-2 cursor-pointer py-2 px-3 rounded-md text-flora-white font-semibold transition-colors duration-300 hover:bg-blue-400"
            >
              Editar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
