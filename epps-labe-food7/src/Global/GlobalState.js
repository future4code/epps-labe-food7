import React, { useEffect, useState } from "react";
import GlobalStateContext from "./GlobalStateContext"
import axios from "axios";
import { BASE_URL } from "../constants/urls";

const GlobalState = (props) => {
    const [restaurantes, setRestaurantes] = useState([])
    const [cart, setCart] = useState([]);
    const [idRestaurant, setIdRestaurant] = useState("");
    const pegaRestaurantes = () => {
        axios
            .get(`${BASE_URL}/restaurants`, {
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
    const [historicoDeCompra, setHistoricoDeCompra] = useState([])

    const pegaTodoEndereco = () => {
        axios
            .get(
                `${BASE_URL}/profile/address`,
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
                `${BASE_URL}/profile`,
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
                `${BASE_URL}/orders/history`,
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
 console.log("REstaurantes", restaurantes)
    const states = { idRestaurant, cart, restaurantes, restauranteId, restauranteData, produtos, perfil, historicoDeCompra, endereco} /*carrinho, pedidoConfirmado, carrinhoRestaurantData, carrinhoDePostagem, */ /* , valorTotal  */
    const setters = { setIdRestaurant, setCart, setRestaurantes, setRestauranteId, /* setCarrinho, setCarrinhoRestaurantData, setCarrinhoDePostagem, */ setPerfil, setHistoricoDeCompra, setEndereco/* , setValorTotal */ }
    const requests = { /* verificaPedido, */ pegaRestaurantes, pegaTodoEndereco, pegaPerfil, pegaHistoricoDeCompra, pegaRestauranteId }
    const data = { states, setters, requests }

console.log("NO global", states.cart)
    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider >
    )
}

export default GlobalState