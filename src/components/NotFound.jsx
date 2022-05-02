import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>404 - Not Found</title>
      </Helmet>
      <div className="h-screen flex flex-col items-center justify-center px-8">
        <span className="text-xl">404 No encontrado</span>
        <h1 className="text-xl font-bold text-center md:text-2xl lg:text-3xl">
          Lo sentimos... Por el momento no contamos con lo que buscas &#127793;
        </h1>
      </div>
    </HelmetProvider>
  );
};

export default NotFound;
