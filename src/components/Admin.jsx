import React, { useState, useId, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { addDoc } from "firebase/firestore";
import { uploadBytesResumable, getDownloadURL, ref } from "firebase/storage";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { productos } from "../firebase";

const Admin = () => {
  const id = useId();
  const [data, setData] = useState({
    title: "",
    price: "",
    description: "",
    image: null,
  });

  const titleChange = (ev) => {
    setData({ ...data, title: ev.target.value });
  };

  const priceChange = (ev) => {
    setData({ ...data, price: ev.target.value });
  };

  const descChange = (ev) => {
    setData({ ...data, description: ev.target.value });
  };

  const imageChange = (ev) => {
    setData({ ...data, image: ev.target.files[0] });
  };

  useEffect(() => {
    const uploadFile = async () => {
      const prodStorage = ref(storage, data.name);
      const uploadTask = uploadBytesResumable(prodStorage, data.image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          switch (snapshot.state) {
            case "paused":
              toast.info("Upload paused");
              break;
            case "running":
              toast.info(`Uploading... ${progress.toFixed(2)}%`);
              break;
            default:
              break;
          }
        },
        (error) => {
          toast.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, image: downloadURL }));
          });
        }
      );
    };
    data.file && uploadFile();
  }, [data.image]);

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
        createdAt: new Date(),
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
      });
    }
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Añadir productos</title>
      </Helmet>
      <div className="h-[70vh] w-screen grid place-content-center place-self-center mt-4 md:mt-0 lg:mt-0">
        <Toaster />
        <form
          className="p-6 border-[1px] border-gray-200 flex flex-col w-[350px] md:w-[540px] shadow-lg rounded-xl"
          onSubmit={createProduct}
        >
          <input
            type="text"
            autoComplete="off"
            id={id}
            placeholder="Título"
            onChange={titleChange}
            value={data.title}
            className="my-3 p-3 w-full rounded-md border-2 border-gray-200 outline-flora-base"
          />
          <input
            type="number"
            autoComplete="off"
            id={id}
            placeholder="Precio"
            onChange={priceChange}
            value={data.price}
            className="my-3 p-3 w-full rounded-md border-2 border-gray-200 outline-flora-base"
          />
          <textarea
            placeholder="Descripción"
            autoComplete="off"
            id={id}
            maxLength="155"
            onChange={descChange}
            value={data.description}
            className="my-3 p-3 w-full rounded-md border-2 border-gray-200 outline-flora-base"
          />
          <input
            type="file"
            name="imagen"
            id={id}
            multiple
            accept="image/*"
            onChange={imageChange}
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
