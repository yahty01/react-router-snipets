import React from 'react';
import {ProductSneaker} from "../product/Product";

type Props = {
  products: ProductSneaker[]
}

function ProductList(props: Props) {
  return (
    <div style={{display: "flex", justifyContent: "center" ,width: "100%"}}>
      {props.products.map((product: ProductSneaker, index: number) => {
        return (
          <img
            src={product.picture}
            alt={product.model}
            style={{height: "auto", margin: "auto", flexGrow: "1", width: "30%"}}
            key={index} />
        )
      })}
    </div>
  );
}

export default ProductList;