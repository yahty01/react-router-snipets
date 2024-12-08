import React, {useState, useEffect} from 'react';
import {AllProducts, ProductSneaker} from "../../../../app/data/Data";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {Outlet} from "react-router";

type Props = {
  allSneakers: AllProducts;
};

export const Adidas = (props: Props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Имитация подгрузки данных
    const timer = setTimeout(() => setIsLoaded(true), 350);
    return () => clearTimeout(timer);
  }, []);

  const sneakers: ProductSneaker[] = [...props.allSneakers['adidas']];

  if (!isLoaded) {
    return (
      <div style={{minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div style={{paddingLeft: '15px', paddingRight: '15px', display: 'inline-block', minHeight: '80vh'}}>
      <h2 style={{textAlign: "center"}}>ADIDAS</h2>
      <Outlet/>
      <StyledDiv>{sneakers.map(product => (
        <Link to={`/${product.brand}/${product.id}`} key={product.id}>
          <img
            src={product.picture[0]}
            alt={product.model}
          />
        </Link>
      ))}</StyledDiv>
      <p>Adidas sneakers blend tradition and cutting-edge tech. From iconic Superstars to Boost soles, they deliver
        style and performance in every step. Built for athletes and fashion lovers, Adidas is where timeless cool meets
        modern energy.</p>
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
