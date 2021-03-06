import React, { useState } from 'react'
import { CardProduto, ContainerImg, ContentCard, Amount, Title, Description, Price, Remove, DivBottom, DivTop, Image } from './styled'

const CardProduct = (props) => {

    return (
        <CardProduto>
            <ContainerImg><Image src={props.image} alt={props.name} /></ContainerImg>
            <ContentCard>
                <DivTop>
                    <Title>{props.name}</Title>
                    <Amount>{props.amount}</Amount>
                </DivTop>
                <Description>{props.description}</Description>
                <DivBottom>
                    <Price>R${props.price}</Price>
                    <Remove onClick={props.removeItem}>Remover</Remove>
                </DivBottom>


            </ContentCard>

        </CardProduto>
    )
}
export default CardProduct