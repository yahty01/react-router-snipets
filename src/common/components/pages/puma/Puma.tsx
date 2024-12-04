import React from 'react';
import {products} from "../../../../app/data/Data";
import {Link} from "react-router-dom";
import {PATH} from "../../../../app/App";

export const Puma = () => {
  const pumaProducts = products.filter(product => product.brand === "puma")

  return (
    <div style={{paddingLeft: '15px', paddingRight: '15px', display: 'inline-block'}}>
      <h2 style={{textAlign: "center"}}> PUMA </h2>
      {pumaProducts.map(product => (
        <Link to={`${PATH.PRODUCT}/${product.id}`} key={product.id}>
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

