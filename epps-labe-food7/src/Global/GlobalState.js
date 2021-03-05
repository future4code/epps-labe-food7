import React, { useEffect, useState } from "react";
import GlobalStateContext from "./GlobalStateContext"
import axios from "axios";
import { BASE_URL } from "../constants/urls";

const GlobalState = (props) => {
    const [restaurantes, setRestaurantes] = useState([])

    const pegaRestaurantes = () => {
        axios
            .get("https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants", {
                headers: {
                    "auth": window.localStorage.getItem("token")
                }
            })
            .then(response => setRestaurantes(response.data.restaurants))
            .catch(error => console.log(error))
        }
    
    useEffect(() => {
        pegaRestaurantes()
    }, [])

    const [restauranteId, setRestauranteId] = useState("")
    const [restauranteData, setRestauranteData] = useState({})
    const [produtos, setProdutos] = useState([])

    const pegaRestauranteId = () => {

        axios
            .get(`${BASE_URL}/restaurants/${restauranteId}`, {
                headers: {
                    "auth": window.localStorage.getItem("token")
                }
            })
            .then(response => {
                setRestauranteData(response.data.restaurant)
                setProdutos(response.data.restaurant.products)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        if (restauranteId) {
            pegaRestauranteId()
        }
    }, [restauranteId])

    const [endereco, setEndereco] = useState({})
    const [perfil, setPerfil] = useState({})
    const [historicoDeCompra, setHistoricoDeCompra] = useState({})

    const pegaTodoEndereco = () => {
        axios
            .get(
                'https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile/address',
                {
                    headers: {
                        auth: window.localStorage.getItem('token'),
                    },
                }
            )
            .then((response) => setEndereco(response.data.address))
            .catch((error) => console.log(error));
    };

    const pegaPerfil = () => {
        axios
            .get(
                'https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile',
                {
                    headers: {
                        auth: window.localStorage.getItem('token'),
                    },
                }
            )
            .then((response) => setPerfil(response.data.user))
            .catch((error) => console.log(error));
    };

    const pegaHistoricoDeCompra = () => {
        axios
            .get(
                'https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/orders/history',
                {
                    headers: {
                        auth: window.localStorage.getItem('token'),
                    },
                }
            )
            .then((response) => setHistoricoDeCompra(response.data.orders))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        pegaTodoEndereco();
        pegaPerfil();
        pegaHistoricoDeCompra();
    }, [])

    const states = { restaurantes, restauranteId, restauranteData, produtos, carrinho, pedidoConfirmado, carrinhoRestaurantData, carrinhoDePostagem, perfil, historicoDeCompra, endereco, valorTotal }
    const setters = { setRestaurantes, setRestauranteId, setCarrinho, setCarrinhoRestaurantData, setCarrinhoDePostagem, setPerfil, setHistoricoDeCompra, setEndereco, setValorTotal }
    const requests = {verificaPedido, pegaRestaurantes, pegaTodoEndereco, pegaPerfil, pegaHistoricoDeCompra, pegaRestauranteId}
    const data = { states, setters, requests }


    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider >
    )
}

export default GlobalState