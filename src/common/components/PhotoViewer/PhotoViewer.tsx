import React from 'react';
import {ProductSneaker} from "../../../app/data/Data";

type Props = {
  product: ProductSneaker
}

export function PhotoViewer(props: Props) {
  return (
    <div style={{display: "flex", justifyContent: "center" ,width: "100%"}}>
      {props.product.picture.map((photo, index) => {
        return (
          <img
            src={photo}
            alt={props.product.model}
            style={{height: "auto", margin: "auto", flexGrow: "1", width: "30%"}}
            key={index} />
        )
      })}
    </div>
  );
}

