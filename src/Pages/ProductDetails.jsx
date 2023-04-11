import React from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  return (
    <div>
      <h4>Product details</h4>
      <p>Id : {id}</p>
    </div>
  );
}

export default ProductDetails;
