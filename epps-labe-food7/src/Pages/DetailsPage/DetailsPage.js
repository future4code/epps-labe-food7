<<<<<<< HEAD
import React from 'react'
import { Feed, Header, Search, Card, ImageCard, DetailCard } from './style';

=======
import React, {useEffect} from 'react';
import axios from 'axios';
import { ContainerContent, Header, Input, ContainerSearch, Card, ImageCard, DetailCard, ContainerFiltro } from './style'
>>>>>>> ea37b36e93c3484a1a7d6226ceb5a8970f3c97e7


const DetailsPage = () => {

    const headers = {
        headers: {
            auth: localStorage.getItem('token')
        }
    }

    console.log(headers)

    useEffect(() => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants', headers)
            .then((res) => {
               console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])

    return (
<<<<<<< HEAD
       <Feed>
           <Header>FutureEats</Header>
           <Search placeholder='Restaurantes'/>
           <Card>
               <ImageCard src='https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/7310808B-889E-450E-B76E-883261DC695C.png'/>
                <p>Vila Butantã</p>
=======
       <ContainerContent>
           <Header>
               <p>FutureEats</p>
           </Header>
           <ContainerSearch>
                <Input placeholder='Restaurante'/>
           </ContainerSearch>
           <ContainerFiltro>
                <p>Burger</p>
                <p>Asiática</p>
           </ContainerFiltro>
            <Card>
                <ImageCard src='https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/7310808B-889E-450E-B76E-883261DC695C.png'/>
                <p>Vinil Butantã</p>
>>>>>>> ea37b36e93c3484a1a7d6226ceb5a8970f3c97e7
                <DetailCard>
                    <p>50 - 60 min</p>
                    <p>Frete R$6,00</p>
                </DetailCard>
<<<<<<< HEAD
           </Card>

       </Feed>
=======
            </Card>
            
       </ContainerContent>
>>>>>>> ea37b36e93c3484a1a7d6226ceb5a8970f3c97e7
    )
}

export default DetailsPage