import React, { useState, useId, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { addDoc } from "firebase/firestore";
import { uploadBytesResumable, getDownloadURL, ref } from "firebase/storage";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { productos, storage } from "../../firebase";

const Admin = () => {
  const id = useId();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const addForm = useRef();

  const createProduct = async (e) => {
    e.preventDefault();
    if (
      title.length === 0 ||
      price.length === 0 ||       // si no hay nada en los campos, no se puede crear
      description.length === 0 ||
      image === null
    ) {
      toast.error("¡Debes llenar todos los campos!");

      return false;
    } else {
      console.log(title, price, description, image);
      await addDoc(productos, {     // se agrega el producto a la base de datos con los datos ingresados
        title: title,
        price: parseInt(price),
        description: description,
        url: image,
      })
        .then(() => {
          toast.success("Producto añadido correctamente");
          setTitle("");
          setDescription("");
          setPrice("");
          setImage(null);

          addForm.current.reset();
        })
        .catch(() => {
          toast.error("Ocurrió un error..."); // si hay un error, se muestra un mensaje de error
        }); 
    }
  };

  // esta es el onchange de la imagen
  const uploadImage = (event) => {
    event.preventDefault();
    console.log(event.target.files[0]);
    // if (setImage === null) return;
    const imgRef = ref(
      storage,
      `productsImages/${Date.now() + event.target.files[0].name}` // se crea una referencia a la imagen
    );
    const imgUpload = uploadBytesResumable(imgRef, event.target.files[0]);

    imgUpload.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        toast("Subida al " + progress + "%", {      // se muestra el progreso de la subida
          icon: "🥸",
          duration: 1000,
        });

        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (err) => {
        console.log(err);
      },
      () => {
        getDownloadURL(imgUpload.snapshot.ref).then((url) => {
          setImage(url);
        });
      }
    );
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Añadir productos</title>
      </Helmet>
      <div className="h-[calc(100vh-64px)] w-screen bg-neutral-300 grid place-content-center place-self-center md:mt-0 lg:mt-0">
        <Toaster />
        <header className="w-full py-4 flex items-center justify-center">
          <h1 className="text-xl font-medium">Añadir productos</h1>
        </header>
        <form
          ref={addForm}
          className="p-6 border-[1px] border-gray-200 bg-slate-50 flex flex-col w-[350px] md:w-[540px] shadow-lg rounded-xl"
          onSubmit={createProduct}
        >
          <input
            type="text"
            maxLength="30"
            autoComplete="off"
            id={id + Date.now()}
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="my-3 p-3 w-full rounded-md border-2 border-gray-200 outline-flora-base"
          />
          <input
            type="number"
            autoComplete="off"
            id={id + Date.now() + 1}
            placeholder="Precio"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="my-3 p-3 w-full rounded-md border-2 border-gray-200 outline-flora-base"
          />
          <textarea
            placeholder="Descripción"
            autoComplete="off"
            id={id + Date.now() + 2}
            maxLength="120"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="my-3 p-3 w-full rounded-md border-2 border-gray-200 outline-flora-base"
          />
          <input
            type="file"
            name="imagen"
            id={id + Date.now() + 3}
            accept="image/*"
            onChange={uploadImage}
            disabled={
              title !== "" && price !== "" && description !== "" ? false : true
            }
            // onClick={(e) => uploadImage(e.target.file[0])}
            className="h-14 text-flora-black file:transition-all file:duration-300 file:hover:text-flora-white file:hover:bg-flora-secondhover file:px-3 file:cursor-pointer file:text-flora-white file:h-full file:w-2/2 file:bg-flora-second file:border-0 rounded-md my-3 bg-flora-white"
          />
          <button
            // onClick={uploadImage}
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
