import React from 'react';
import {ProductSneaker} from "../../../app/data/Data";
import styled from "styled-components";

type Props = {
  product: ProductSneaker
}

export function PhotoViewer(props: Props) {
  return (
    <StyledDiv>
      {props.product.picture.map((photo, index) => {
        return (
          <img
            src={photo}
            alt={props.product.model}
            style={{height: "auto", margin: "auto", flexGrow: "1", width: "30%"}}
            key={index}/>
        )
      })}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
