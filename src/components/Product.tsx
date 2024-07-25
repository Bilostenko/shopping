import React, { useState } from "react";
import { IProducts } from "../models";

interface ProductProps {
  product: IProducts
}

const Product = ({ product }: ProductProps) => {

  const [showDetails, setShowDetails] = useState(false);

  return <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
    <img src={product.image} alt="image-product" className="w-1/6 " />
    <p>{product.title}</p>
    <span className="font-bold">{product.price}</span>
    <button className="border py-2 px-2 rounded bg-yellow-400" onClick={() => setShowDetails(!showDetails)}>
      {showDetails ? 'Hide details' : 'Show details'}
    </button>

    {showDetails ?
      <div className="border py-2 px-4 rounded flex flex-col items-center mb-2"><p>{product.description}</p></div>
      : null}

  </div>;
};

export default Product;
