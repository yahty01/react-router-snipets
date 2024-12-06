import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {AllProducts, ProductSneaker} from "../../../../app/data/Data";
import styled from "styled-components";

type Props = {
  allSneakers: AllProducts
}
//todo: Небходимо сделать компоненту контролируемой !!!
export const Puma = (props: Props) => {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Имитация подгрузки данных
    const timer = setTimeout(() => setIsLoaded(true), 350);
    return () => clearTimeout(timer);
  }, []);

  const sneakers: ProductSneaker[] = [...props.allSneakers['puma']]

  if (!isLoaded) {
    return (
      <div style={{minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div style={{paddingLeft: '15px', paddingRight: '15px', display: 'inline-block', minHeight: '80vh'}}>
      <h2 style={{textAlign: "center"}}> PUMA </h2>
     <StyledDiv>{sneakers.map(product => (
        <Link to={`/${product.brand}/${product.id}`} key={product.id}>
          <img
            src={product.picture[0]}
            alt={product.model}/>
        </Link>
      ))}</StyledDiv>
      <p>Puma sneakers scream versatility and boldness. Lightweight, durable, and always stylish, they’re perfect for
        sport or casual wear. With sleek designs and daring colors, Puma lets you own every moment—on the track or off
        it.</p>
    </div>
  );
};

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 20px;


  a:hover {
    background-color: black;
    opacity: 0.7;
    transition: opacity 0.35s ease;
  }
  
  a {
    width: 30%;
  }
  
  img {
    width: 100%;
    height: 100%;
  }
`
