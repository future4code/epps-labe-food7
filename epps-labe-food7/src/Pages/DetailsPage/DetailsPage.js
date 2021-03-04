import React, { useEffect } from 'react';
import axios from 'axios';
import { ContainerContent, Header, Input, ContainerSearch, Card, ImageCard, DetailCard, ContainerFiltro } from './style'
import { useState } from 'react';


const DetailsPage = () => {

    const [restaurants, setRestaurants] = useState([])

    const headers = {
        headers: {
            auth: localStorage.getItem('token')
        }
    }

    useEffect(() => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants', headers)
            .then((res) => {
                setRestaurants(res.data.restaurants)
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
                <Input placeholder='Restaurante' />
            </ContainerSearch>
            <ContainerFiltro>
                <p>Burger</p>
                <p>Asiática</p>
            </ContainerFiltro>
            {restaurants.map((i) => {
                return (
                        <Card>
                            <ImageCard src={i.logoUrl} />
                            <p>{i.name}</p>
                            <DetailCard>
                                <p>{i.deliveryTime} min</p>
                                <p>Frete R${i.shipping},00</p>
                            </DetailCard>
                        </Card>
                
                )
            })}


        </ContainerContent>
    )
}

export default DetailsPage