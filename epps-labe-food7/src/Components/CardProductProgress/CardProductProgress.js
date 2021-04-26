import React, { useState } from 'react'
import { CardProduto, ContainerImg, ContentCard, Amount, Title, Price, Image } from './styled'
import Clock from '../../images/clock.svg'
const CardProductProgress = (props) => {
    return (
        <CardProduto>
            <ContainerImg>
                <img src={Clock} alt={props.restaurant} />
            </ContainerImg>
            <ContentCard>
                <Title>Pedido em andamento</Title>
                <Amount>{props.restaurant}</Amount>
                <Price>SUBTOTAL R$ {props.total !== undefined ? <span>{props.total.toFixed(2)}</span> : <span>0.00</span>}
                </Price>


            </ContentCard>

        </CardProduto>
    )
}
export default CardProductProgress