import React from 'react'
import { Feed, Header, Search, Card, ImageCard, DetailCard } from './style';



const DetailsPage = () => {
    return (
       <Feed>
           <Header>FutureEats</Header>
           <Search placeholder='Restaurantes'/>
           <Card>
               <ImageCard src='https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/7310808B-889E-450E-B76E-883261DC695C.png'/>
                <p>Vila Butantã</p>
                <DetailCard>
                    <p>50 - 60 min</p>
                    <p>Frete R$6,00</p>
                </DetailCard>
           </Card>

       </Feed>
    )
}

export default DetailsPage