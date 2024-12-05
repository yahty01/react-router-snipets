import React from 'react';
import {Link} from "react-router-dom";
import {AllProducts, ProductSneaker} from "../../../../app/data/Data";

type Props = {
  allSneakers: AllProducts
}
//todo: Небходимо сделать компоненту контролируемой !!!
export const Puma = (props: Props) => {
  const sneakers: ProductSneaker[] = [...props.allSneakers['puma']]

  return (
    <div style={{paddingLeft: '15px', paddingRight: '15px', display: 'inline-block', minHeight: '80vh'}}>
      <h2 style={{textAlign: "center"}}> PUMA </h2>
      {sneakers.map(product => (
        <Link to={`/${product.brand}/${product.id}`} key={product.id}>
          <img
            style={{width: "30%", height: "auto", margin: "0 10px"}}
            src={product.picture[0]}
            alt={product.model}/>
        </Link>
      ))}
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Beatae cum eveniet incidunt iusto magnam minus molestiae officiis placeat reprehenderit ut.
        Ad beatae eius enim explicabo ipsam libero minima molestiae nulla!</p>
    </div>
  );
};

