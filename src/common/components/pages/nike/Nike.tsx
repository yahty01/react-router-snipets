import React, {useEffect, useState} from 'react';
import {AllProducts, ProductSneaker} from "../../../../app/data/Data";
import {Link} from "react-router-dom";
import styled from "styled-components";

type Props = {
  allSneakers: AllProducts
}

export const Nike = (props: Props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Имитация подгрузки данных
    const timer = setTimeout(() => setIsLoaded(true), 350);
    return () => clearTimeout(timer);
  }, []);

  const sneakers: ProductSneaker[] = [...props.allSneakers['nike']]

  if (!isLoaded) {
    return (
      <div style={{minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div style={{paddingLeft: '15px', paddingRight: '15px', display: 'inline-block', minHeight: '80vh'}}>
      <h2 style={{textAlign: "center"}}> NIKE </h2>
      <StyledDiv>{sneakers.map(product => (
        <Link to={`/${product.brand}/${product.id}`} key={product.id}>
          <img
            src={product.picture[0]}
            alt={product.model}/>
        </Link>
      ))}</StyledDiv>
      <p>Nike sneakers redefine style and performance. With Air Max cushioning and Flyknit fabrics, they’re built for
        maximum comfort and impact. Whether in the gym or on the streets, Nike turns every step into a statement. Loved
        by athletes and trendsetters, they’re the gold standard of innovation.</p>
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
