import React from "react";
import { useParams } from "react-router-dom";

function SingleProduct2() {
  const { name } = useParams();

  return (
    <div className="w-full min-h-screen bg-zinc-700">
      <h1>Product Details</h1>
      <p>Product Name: {name}</p>
    </div>
  );
}

export default SingleProduct2;
