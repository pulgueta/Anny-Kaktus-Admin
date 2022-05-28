import React, { useState, useEffect, useId, Suspense } from "react";
import { getDocs } from "firebase/firestore";

import Card from "../components/Card";

import { productos } from "../../firebase";
import { formatPrice } from "../functions/formatPrice";

const Anadidos = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const [pages, setPages] = useState();

  const id = useId();

  useEffect(() => {
    const getProducts = async () => {
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
  }, []);

  return (
    <>
      <header className="h-20 flex items-center justify-center bg-white shadow-md">
        <h1 className="text-2xl font-medium">Tus productos añadidos</h1>
      </header>

      <Suspense
        fallback={
          <><h1 className="w-full text-center p-10">Cargando productos...</h1></>
        }
      >
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
