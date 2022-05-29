import React, { useState, useEffect, useId, Suspense } from "react";
import { getDocs, deleteDoc, doc } from "firebase/firestore";

import Card from "../components/Card";

import { db, productos, storage } from "../../firebase";
import { formatPrice } from "../functions/formatPrice";
import { deleteObject, ref } from "firebase/storage";

const Anadidos = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const [load, setLoad] = useState(false);
  const [pages, setPages] = useState();

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
    await deleteDoc(doc(db, "productos", item.id));
    setLoad(true);
  };

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
    <>
      <header className="h-20 flex items-center justify-center bg-white shadow-md">
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
                className="max-w-sm rounded overflow-hidden shadow-lg m-4"
              >
                <Card
                  image={item.url}
                  alt={`Producto: ${item.title}`}
                  title={item.title}
                  description={item.description}
                  price={formatPrice(item.price)}
                  removeItem={() => removeItem(item)}
                />
              </div>
            ))}
          </div>
        </div>
      </Suspense>

      {/* {loading ? (
        <h1 className="w-full text-center p-10">Cargando productos...</h1>
      ) : (
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">
            {product.map((item) => (
              <div
                key={id + item.id + Date.now()}
                className="max-w-sm rounded overflow-hidden shadow-lg m-4"
              >
                <Card
                  image={item.url}
                  title={item.title}
                  description={item.description}
                  price={formatPrice(item.price)}
                />
              </div>
            ))}
          </div>
        </div>
      )} */}
    </>
  );
};

export default Anadidos;
