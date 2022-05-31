import React, { useState, useEffect, useId, Suspense } from "react";
import { getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { motion } from "framer-motion";
import { HelmetProvider, Helmet } from "react-helmet-async";
import toast, { Toaster } from "react-hot-toast";

import Card from "../components/Card";

import { db, productos, storage } from "../../firebase";
import { formatPrice } from "../functions/formatPrice";

const Anadidos = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const [load, setLoad] = useState(false);
  const [modal, setModal] = useState(false);
  const [newInfo, setNewInfo] = useState({});

  const id = useId();

  const removeItem = async (item) => {
    const imgRef = ref(storage, item.url);

    await deleteObject(imgRef)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    await deleteDoc(doc(db, "productos", item.id))
      .then(() => {
        toast.success("¡Producto eliminado!");
      })
      .catch(() => {
        toast.error("Error al eliminar el producto");
      });
    setLoad(true);
  };

  const editItem = async (id, newTitle, newDescription, newPrice) => {
    const productDoc = doc(db, "productos", id);
    const editField = {
      title: newTitle,
      description: newDescription,
      price: parseInt(newPrice),
    };
    await updateDoc(productDoc, editField);
    setLoad(true);
    closeForm();
  };

  const handleDataEdit = (itemEdit) => {
    setNewInfo(itemEdit);
    openForm();
  };
  const openForm = () => setModal(true);
  const closeForm = () => setModal(false);

  useEffect(() => {
    const getProducts = async () => {
      if (load) {
        setLoad(false);
      }
      const data = await getDocs(productos);
      setProduct(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
      setLoading(false);
    };

    getProducts();
  }, [load]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Productos añadidos</title>
        <meta name="description" content="Productos añadidos" />
      </Helmet>
      <Toaster />
      <header className="h-16 flex items-center justify-center bg-white shadow-md">
        <h1 className="text-2xl font-medium">Tus productos añadidos</h1>
      </header>

      <Suspense>
        {loading ? (
          <h1 className="w-full text-center p-10">Cargando productos...</h1>
        ) : null}
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">
            {product.map((item) => (
              <div
                key={id + item.id + Date.now()}
                className="max-w-lg rounded overflow-hidden shadow-lg m-4"
              >
                <Card
                  data={item}
                  image={item.url}
                  alt={`Producto: ${item.title}`}
                  title={item.title}
                  description={item.description}
                  price={formatPrice(item.price)}
                  removeItem={() => removeItem(item)}
                  handleDataEdit={handleDataEdit}
                />
              </div>
            ))}
            {modal ? (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -50,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                    type: "spring",
                  },
                }}
                className="w-72 md:w-2/6 lg:w-[450px] h-80 fixed rounded-lg shadow-md bg-neutral-50 flex flex-col items-center justify-center"
              >
                <h1 className="mb-4 text-xl font-medium">Editar producto</h1>
                <form>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      className="contactinput"
                      placeholder="Nombre"
                      value={newInfo.title}
                      onChange={(e) => {
                        setNewInfo({
                          ...newInfo,
                          title: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="flex flex-col">
                    <textarea
                      type="text"
                      className="contactinput resize-none h-24"
                      placeholder="Descripción"
                      value={newInfo.description}
                      onChange={(e) => {
                        setNewInfo({
                          ...newInfo,
                          description: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="number"
                      className="contactinput"
                      placeholder="Precio"
                      value={newInfo.price}
                      onChange={(e) => {
                        setNewInfo({
                          ...newInfo,
                          price: e.target.value,
                        });
                      }}
                    />
                  </div>
                </form>
                <div className="flex justify-around w-full">
                  <button
                    onClick={() =>
                      editItem(
                        newInfo.id,
                        newInfo.title,
                        newInfo.description,
                        newInfo.price
                      )
                    }
                    className="bg-blue-500 block cursor-pointer py-2 px-3 rounded-md text-flora-white font-semibold transition-colors duration-300 hover:bg-blue-400"
                  >
                    Guardar
                  </button>
                  <button
                    className="bg-flora-second block cursor-pointer py-2 px-3 rounded-md text-flora-white font-semibold transition-colors duration-300 hover:bg-red-500"
                    onClick={closeForm}
                  >
                    Cancelar
                  </button>
                </div>
              </motion.div>
            ) : null}
          </div>
        </div>
      </Suspense>
    </HelmetProvider>
  );
};

export default Anadidos;
