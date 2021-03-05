import React, { useEffect } from 'react';
import axios from 'axios';
import { ContainerContent, Header, Input, ContainerSearch, Card, ImageCard, DetailCard, ContainerFiltro, MenuFeed } from './style'
import { useState } from 'react';


const FeedPage = () => {

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
        <MenuFeed>
            <img src='https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/8CD04B9B-73CB-40DC-AE16-63CE142EF1F4.svg'/>
            <img src='https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/EC5DAC84-C9D0-4BA6-869A-6431F534FCBE.svg'/>
            <img src='https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/14952B60-73C1-4CB5-A219-C37F0F9640B5.svg'/>
        </MenuFeed>
        </ContainerContent>
    )
}

export default FeedPage