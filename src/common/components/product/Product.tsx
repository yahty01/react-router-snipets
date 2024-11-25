import React from 'react';

export type ProductSneaker = {
  model: string;
  collection: string;
  price: string;
  picture: string;
}


function Product(product: ProductSneaker) {
  return (
    <div>
      <h3>{product.model}</h3>
      <img
        src={product.picture}
        alt={product.model}
        style={{height: "auto", margin: "auto", flexGrow: "1", width: "30%"}}
      />
      <span>{product.collection}</span>
      <span>{product.price}</span>
    </div>
  );
}

export default Product;