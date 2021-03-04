import React, {useEffect} from 'react';
import axios from 'axios';
import { ContainerContent, Header, Input, ContainerSearch, Card, ImageCard, DetailCard, ContainerFiltro } from './style'


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
                <DetailCard>
                    <p>50 - 60 min</p>
                    <p>Frete R$6,00</p>
                </DetailCard>
            </Card>
            
       </ContainerContent>
    )
}

export default DetailsPage