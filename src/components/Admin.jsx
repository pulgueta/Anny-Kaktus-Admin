import React, { useState, useId, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { addDoc } from "firebase/firestore";
import { uploadBytes, getDownloadURL, ref, v4 } from "firebase/storage";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { productos, storage } from "../../firebase";

const Admin = () => {
  const id = useId();
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const uploadImage = () => {
    if (setImage === null) return;
    const imgRef = ref(storage, `productsImages/${image.name + v4()}`)
  }
  
  const createProduct = async (e) => {
    e.preventDefault();
    if (
      data.title.length === 0 ||
      data.price.length === 0 ||
      data.description.length === 0 ||
      data.image === null
    ) {
      toast.error("¡Debes llenar todos los campos!");

      return false;
    } else {
      await addDoc(productos, {
        title: data.title,
        price: data.price,
        description: data.description,
        imgURL: data.image,
      })
        .then(() => {
          toast.success("Producto añadido correctamente");
        })
        .catch(() => {
          toast.error("Ocurrió un error...");
        });

      setData({
        title: "",
        price: "",
        description: "",
        image: null,
      });
    }
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Añadir productos</title>
      </Helmet>
      <div className="h-screen w-screen bg-neutral-300 grid place-content-center place-self-center mt-4 md:mt-0 lg:mt-0">
        <Toaster />
        <form
          className="p-6 border-[1px] border-gray-200 bg-slate-50 flex flex-col w-[350px] md:w-[540px] shadow-lg rounded-xl"
          onSubmit={createProduct}
        >
          <input
            type="text"
            autoComplete="off"
            id={id}
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="my-3 p-3 w-full rounded-md border-2 border-gray-200 outline-flora-base"
          />
          <input
            type="number"
            autoComplete="off"
            id={id}
            placeholder="Precio"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="my-3 p-3 w-full rounded-md border-2 border-gray-200 outline-flora-base"
          />
          <textarea
            placeholder="Descripción"
            autoComplete="off"
            id={id}
            maxLength="155"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="my-3 p-3 w-full rounded-md border-2 border-gray-200 outline-flora-base"
          />
          <input
            type="file"
            name="imagen"
            id={id}
            multiple
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="h-14 text-flora-black file:transition-all file:duration-300 file:hover:text-flora-white file:hover:bg-flora-secondhover file:px-3 file:cursor-pointer file:text-flora-white file:h-full file:w-2/2 file:bg-flora-second file:border-0 rounded-md my-3 bg-flora-white"
          />
          <button
            type="submit"
            className="bg-flora-base p-4 rounded-md font-semibold text-flora-white transition-all duration-300 hover:bg-green-600"
          >
            Agregar
          </button>
        </form>
      </div>
    </HelmetProvider>
  );
};

export default Admin;
