import React, { useEffect } from 'react';
import axios from 'axios';
import { ContainerContent, Header, Input, ContainerSearch, Card, ImageCard, DetailCard, ContainerFiltro, MenuFeed } from './style'
import { useState } from 'react';
import { goToDetails, goToProfile, goToCart } from '../../Routes/Coordinator';
import { useHistory } from 'react-router';
import { BASE_URL } from '../../constants/urls';
import useForm from '../../Hooks/useForm'

const FeedPage = () => {

    const [restaurants, setRestaurants] = useState([]);
    const history = useHistory();
    const [form, onChange, clearFields] = useForm({ busca: "" })

    const filterRestaurants = () => {

        let filteredPosts = restaurants.filter(
            (restaurant) =>
                restaurant.name.toLowerCase().includes(form.busca.toLowerCase()) ||
                restaurant.description.toLowerCase().includes(form.busca.toLowerCase())
        )
        return filteredPosts;
    };



    const onClickDetails = (id) => {
        goToDetails(history, id)
    }

    const headers = {
        headers: {
            auth: localStorage.getItem('token')
        }
    }

    useEffect(() => {
        axios.get(`${BASE_URL}/restaurants`, headers)
            .then((res) => {
                setRestaurants(res.data.restaurants)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])
    console.log(restaurants)

    const filteredRestaurants = filterRestaurants();
    return (
        <ContainerContent>
            <Header>
                <p>FutureEats</p>
            </Header>
            <ContainerSearch>
                <Input
                    placeholder='Restaurante'
                    name={"busca"}
                    value={form.busca}
                    onChange={onChange}
                />
            </ContainerSearch>
            <ContainerFiltro>
                <p>Burger</p>
                <p>Asiática</p>
            </ContainerFiltro>
            {filteredRestaurants.map((i) => {
                return (
                    <Card onClick={() => onClickDetails(i.id)}>
                        <ImageCard src={i.logoUrl} />
                        <h4>{i.name}</h4>
                        <DetailCard>
                            <p>{i.deliveryTime} min</p>
                            <p>Frete R${i.shipping},00</p>
                        </DetailCard>
                    </Card>

                )
            })}
            <MenuFeed>
                <img src='https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/8CD04B9B-73CB-40DC-AE16-63CE142EF1F4.svg' />
                <img onClick={() => goToCart(history)} src='https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/EC5DAC84-C9D0-4BA6-869A-6431F534FCBE.svg' />
                <img onClick={() => goToProfile(history)} src='https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/14952B60-73C1-4CB5-A219-C37F0F9640B5.svg' />
            </MenuFeed>
        </ContainerContent>
    )
}

export default FeedPage