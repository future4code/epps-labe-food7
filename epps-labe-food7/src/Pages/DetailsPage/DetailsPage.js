import React, { useEffect, useState, useContext } from "react"
import { ContainerContent, Header, ImageCard, ContainerInfo, ContainerProduct, DivModal, BotaoAdd, Card, ImageProduct, InfoProduct } from "./style"
import { useHistory, useParams } from 'react-router-dom';
import { goToBack } from '../../Routes/Coordinator';
import SetaImg from '../../images/back.png';
import axios from 'axios';
import Modal from 'react-modal';
import { BASE_URL } from "../../constants/urls";
import GlobalStateContext from "../../Global/GlobalStateContext";
import useForm from "../../Hooks/useForm";

Modal.setAppElement('#root')

const DetailsPage = () => {

    const history = useHistory();
    const params = useParams();
    const [products, setProducts] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { states, setters, requests } = useContext(GlobalStateContext);
    const [form, onChange, clearFields] = useForm({ quantidade: 0 })

    useEffect(() => {
        axios.get(`${BASE_URL}/restaurants/${params.id}`,
            {
                headers: {
                    auth: localStorage.getItem('token')
                }
            })
            .then((res) => {
                setters.setRestaurantes(res.data.restaurant);
                setProducts(res.data.restaurant.products);
            })
            .catch((err) => {
                console.log(err)
            })

    }, [params.id])

    const addItemToCart = (newItem) => {
        const index = states.cart.findIndex((i) => i.id === newItem.id);
        let newCart = [...states.cart];
        if (index === -1) {
            console.log("Valoe", form.quantidade)
            newCart.push({ ...newItem, amount: Number(form.quantidade) });
        } else {
            newCart[index].amount += Number(form.quantidade);
        }
        setters.setCart(newCart);
        setters.setIdRestaurant(params.id)
    };

    const [card, setCard] = useState('');
    const onClickButton = (item) => {
        setCard(item)
        setModalIsOpen(true)
    }

    const outroClick = () => {
        setModalIsOpen(false)
        addItemToCart(card)
    }

    return (
        <ContainerContent>
            <Header>
                <img onClick={() => { goToBack(history) }} src={SetaImg} alt={''} />
                <p>Restaurante</p>
            </Header>

            <ImageCard src={states.restaurantes.logoUrl} />
            <ContainerInfo>
                <h4>{states.restaurantes.name}</h4>
                <p>{states.restaurantes.category}</p>
                <p>{states.restaurantes.deliveryTime} min - R${states.restaurantes.shipping},00</p>
                <p>{states.restaurantes.address}</p>
            </ContainerInfo>
            <ContainerProduct>
                {products.map((i) => {
                    return (
                        <div key={i.id}>
                            <h4>{i.category}</h4>
                            <hr></hr>
                            <Card>
                                <ImageProduct src={i.photoUrl} />
                                <InfoProduct>
                                    <h4>{i.name}</h4>
                                    <p>{i.description}</p>
                                    <h3>R${i.price}</h3>
                                </InfoProduct>
                                <BotaoAdd onClick={() => onClickButton(i)}>adicionar</BotaoAdd>
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

                                        <select name={"quantidade"}
                                            value={form.quantidade}
                                            onChange={onChange}>
                                            <option value="0" selected disabled>0</option>
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
                                        <button onClick={outroClick}>ADICIONAR AO CARRINHO</button>
                                    </DivModal>
                                </Modal>
                            </Card>
                        </div>
                    )
                })}

            </ContainerProduct>
        </ContainerContent>

    )
}

export default DetailsPage;


/* import React, { useContext, useEffect, useState } from "react"
import { ContainerContent, Header, ImageCard, ContainerInfo, ContainerProduct, BotaoAdd, Card, ImageProduct, InfoProduct } from "./style"
import { useHistory, useParams } from 'react-router-dom';
import { goToBack } from '../../Routes/Coordinator';
import SetaImg from '../../images/back.png';
import axios from 'axios';
import { BASE_URL } from "../../constants/urls";
import GlobalStateContext from "../../Global/GlobalStateContext";

const DetailsPage = () => {
    const history = useHistory();
    const params = useParams();
    const [products, setProducts] = useState([]);

    const { states, setters, requests } = useContext(GlobalStateContext);
    useEffect(() => {
        axios.get(`${BASE_URL}/restaurants/${params.id}`,
            {
                headers: {
                    auth: localStorage.getItem('token')
                }
            })
            .then((res) => {
                setters.setRestaurantes(res.data.restaurant);
                setProducts(res.data.restaurant.products);

            })
            .catch((err) => {
            })

    }, [params.id])

const addItemToCart = (newItem) => {
    const index = states.cart.findIndex((i) => i.id === newItem.id);
    let newCart = [...states.cart];
    if (index === -1) {
      newCart.push({ ...newItem, amount: 1 });
    } else {
      newCart[index].amount += 1;
    }
    setters.setCart(newCart);
    setters.setIdRestaurant(params.id)
  };

    return(
        <ContainerContent>
            <Header>
                <img onClick={() => { goToBack(history) }} src={SetaImg} alt={''} />
                <p>Restaurante</p>
            </Header>

            <ImageCard src={states.restaurantes.logoUrl}/>
            <ContainerInfo>
                <h4>{states.restaurantes.name}</h4>
                <p>{states.restaurantes.category}</p>
                <p>{states.restaurantes.deliveryTime} min - R${states.restaurantes.shipping},00</p>
                <p>{states.restaurantes.address}</p>
            </ContainerInfo>
            <ContainerProduct>
                {products.map((i) => {
                    return(
                        <div key={i.id}>
                            <h4>{i.category}</h4>
                            <hr></hr>
                            <Card>
                                <ImageProduct src={i.photoUrl}/>
                                <InfoProduct>
                                    <h4>{i.name}</h4>
                                    <p>{i.description}</p>
                                    <h3>R${i.price}</h3>
                                </InfoProduct>
                                <BotaoAdd onClick={ () => addItemToCart(i)}>adicionar</BotaoAdd>
                            </Card>
                        </div>
                    )
                })}
            </ContainerProduct>
        </ContainerContent>
    )
}

export default DetailsPage; */