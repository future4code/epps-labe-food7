import React, { useState } from 'react'
import { CardProduto, ContainerImg, ContentCard, Amount, Title, Description, Price, Remove, DivBottom, DivTop, Image } from './CardPedidio/styled'

const CardOrderProgress = (props) => {

return (
    <CardProduto>
        <ContainerImg><Image src="https://picsum.photos/id/237/93/112" alt={props.name} /></ContainerImg>
        <ContentCard>
            <DivTop>
                <Title>Stencil</Title>
                <Amount>{props.amount}2</Amount>
            </DivTop>
            <Description>Pão, carne, queijo, cebola roxa, tomate, alface e molho</Description>
            <DivBottom>
                <Price>R$46,00</Price>
                <Remove onClick={props.removeItem}>Remover</Remove>
            </DivBottom>


        </ContentCard>

    </CardProduto>
)
}
export default CardOrderProgress