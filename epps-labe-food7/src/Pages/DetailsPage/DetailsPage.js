import React, {useEffect, useState} from "react"
import { ContainerContent, Header, ImageCard, ContainerInfo, ContainerProduct, DivModal, BotaoAdd, Card, ImageProduct, InfoProduct } from "./style"
import { useHistory, useParams } from 'react-router-dom';
import { goToBack } from '../../Routes/Coordinator';
import SetaImg from '../../images/back.png';
import axios from 'axios';
import Modal from 'react-modal';
import { BASE_URL } from "../../constants/urls";

Modal.setAppElement('#root')

const DetailsPage = () => {

    const history = useHistory();
    const params = useParams();
    const [restaurant, setRestaurant] = useState([]);
    const [products, setProducts] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        axios.get(`${BASE_URL}/restaurants/${params.id}`,
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
                console.log(err)
            })

    }, [params.id])

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
                                <BotaoAdd onClick={() => setModalIsOpen(true)}>adicionar</BotaoAdd>
                                <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={() => setModalIsOpen(false)}
                                style={
                                    {
                                        overlay: {
                                            backgroundColor: 'none',
                                            height: '280px',
                                            width: '380px',
                                            top: '40%',
                                            
                                        },
                                    }
                                }
                                >
                                    <DivModal>
                                    
                                    <h4>Selecione a quantidade desejada </h4>
                                    <select name="quantidade">
                                        <option value="0"selected disabled>0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                    <button>ADICIONAR AO CARRINHO</button>
                                    </DivModal>
                                </Modal>
                            </Card>
                        </>
                    )
                })}
                
            </ContainerProduct>
        </ContainerContent>

    )
}

export default DetailsPage;