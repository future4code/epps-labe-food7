import React from "react";
import { ItemContainer, ItemImage, TextContainer, NameText } from "./styled";

const ProductItem = (props) => {
  return (
    <ItemContainer>
      <ItemImage alt={props.name} src={props.image} />
      <TextContainer>
        <NameText>{props.name}</NameText>
        <p>
          R${props.price} <b>x{props.amount}</b>
        </p>
      </TextContainer>
      <button onClick={props.removeItem}>Remover</button>
    </ItemContainer>
  );
};

export default ProductItem;