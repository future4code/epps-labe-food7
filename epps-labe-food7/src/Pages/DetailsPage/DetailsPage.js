import React, {useEffect, useState} from "react"
import { ContainerContent, Header, ImageCard, ContainerInfo, ContainerProduct, BotaoAdd, Card, ImageProduct, InfoProduct } from "./style"
import { useHistory, useParams } from 'react-router-dom';
import { goToBack } from '../../Routes/Coordinator';
import SetaImg from '../../images/back.png';
import axios from 'axios';


const DetailsPage = () => {

    const history = useHistory();
    const params = useParams();
    const [restaurant, setRestaurant] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants/${params.id}`,
            {
                headers: {
                    auth: localStorage.getItem('token')
                }
            })
            .then((res) => {
                setRestaurant(res.data.restaurant);
                setProducts(res.data.restaurant.products);
                
            })
            .catch((err) => {
            })

    }, [params.id])

    console.log(restaurant)

    return(
        <ContainerContent>
            <Header>
                <img onClick={() => { goToBack(history) }} src={SetaImg} alt={''} />
                <p>Restaurante</p>
            </Header>

            <ImageCard src={restaurant.logoUrl}/>
            <ContainerInfo>
                <h4>{restaurant.name}</h4>
                <p>{restaurant.category}</p>
                <p>{restaurant.deliveryTime} min - R${restaurant.shipping},00</p>
                <p>{restaurant.address}</p>
            </ContainerInfo>
            <ContainerProduct>
                {products.map((i) => {
                    return(
                        <>
                            <h4>{i.category}</h4>
                            <hr></hr>
                            <Card>
                                <ImageProduct src={i.photoUrl}/>
                                <InfoProduct>
                                    <h4>{i.name}</h4>
                                    <p>{i.description}</p>
                                    <h3>R${i.price}</h3>
                                </InfoProduct>
                                <BotaoAdd>adicionar</BotaoAdd>
                            </Card>
                        </>
                    )
                })}
            </ContainerProduct>
        </ContainerContent>

    )
}

export default DetailsPage;