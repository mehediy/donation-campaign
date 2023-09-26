import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4 px-2">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center">
        Page not found
      </h1>

      <Link to={"/"}>
        <button className="bg-[#FF444A] text-white px-4 py-2 rounded">
          Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
