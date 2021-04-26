import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import ProductItem from "../../Components/ProductItem";
import GlobalStateContext from "../../Global/GlobalStateContext";
import { goToDetails, goToCart, goToProfile, goToFeed } from "../../Routes/Coordinator";
import { ContainerCart, ContainerAdress, ContainerTotal, Header, TitleAdress, Adress, TitleTotal, Total, HeaderTitle, ProductsCartTitle, Shipping, Cash, Credit, TitlePay, Button, SeparationLine, MenuFeed } from "./style";
import SelectPay from '../../images/radiobutton-unchecked.png'
import SelectedPay from '../../images/radiobutton-checked.png'
import CardProduct from '../../Components/CardProduct/CardProduct'
import axios from "axios";
import { BASE_URL } from '../../constants/urls'

const CartPage = () => {
    const [priceToPay, setPriceToPay] = useState(0);
    const history = useHistory();
    const [selectCash, setSelectCash] = useState(false)
    const [selectCredit, setSelectCredic] = useState(false)
    const { states, setters, requests } = useContext(GlobalStateContext);

    const cashSelect = () => {
        if (selectCredit === false) {
            setSelectCash(!selectCash)
        } else {
            setSelectCash(!selectCash)
            setSelectCredic(!selectCredit)
        }
    }

    const creditSelect = () => {
        if (selectCash === false) {
            setSelectCredic(!selectCredit)
        } else {
            setSelectCash(!selectCash)
            setSelectCredic(!selectCredit)
        }
    }

    let paymentMethod = ''
    const methodPay = () => {
        if (selectCash === true) {
            paymentMethod = 'money'
        } else if (selectCredit === true) {
            paymentMethod = 'creditcard'
        }
    }

     const productsCart = states.cart.map((product) =>  {
        return({
                id: product.id,
                quantity: product.amount
            })
        })

    const makeWish = (/* form, clearFields, history */) => {
        methodPay()
        const body = {
            products: productsCart,
            paymentMethod: paymentMethod
        }
        const headers = {
            headers: {
                auth: localStorage.getItem('token')
            }
        }
        axios.post(`${BASE_URL}/restaurants/${states.idRestaurant}/order`, body, headers)
            .then((res) => {
            
                history.push('/feed')
                
            })
            .catch((err) => {
               /*  alert(err.response.data.message) */
                /* console.log(err.response.data) */
            })
    }
    
    useEffect(() => {
        let currentTotal = 0;
        states.cart.forEach((item) => {
            currentTotal += item.price * item.amount ;
        });
        let frete = states.cart.length > 0? states.restaurantes.shipping : 0 
        setPriceToPay(currentTotal + frete );
    }, [states]);
    
    const removeItemFromCart = (itemToRemove) => {
        const index = states.cart.findIndex((i) => i.id === itemToRemove.id);
        let newCart = [...states.cart];
        if (newCart[index].amount === 1) {
            newCart.splice(index, 1);
        } else {
            newCart[index].amount -= 1;
        }
        setters.setCart(newCart);
    };

    const productsList = states.cart.map((product) => {
        return (
            <CardProduct
                image={product.photoUrl}
                name={product.name}
                amount={product.amount}
                description={product.description}
                price={product.price.toFixed(2)}
                removeItem={() => removeItemFromCart(product)}
            />
        );
    });
    return (
        <ContainerCart>
            <Header><HeaderTitle>Meu carrinho</HeaderTitle></Header>
            <ContainerAdress>
                <TitleAdress>Endereço de entrega</TitleAdress>
                <Adress>{states.endereco.street}, {states.endereco.number} </Adress>
            </ContainerAdress>
            {productsList.length > 0 ? productsList : <ProductsCartTitle>Carrinho Vazio</ProductsCartTitle>}

            <Shipping>Frete R${states.cart.length > 0 ? states.restaurantes.shipping : 0 },00</Shipping>
            <ContainerTotal><TitleTotal>SUBTOTAL</TitleTotal> <Total>R${priceToPay.toFixed(2)}</Total></ContainerTotal>
            <TitlePay>Forma de pagamento</TitlePay>
            <SeparationLine />
            {!selectCash ? <Cash><img onClick={cashSelect} src={SelectPay} alt="" /> Dinheiro</Cash> : <Cash><img onClick={cashSelect} src={SelectedPay} alt="" /> Dinheiro</Cash>}
            {!selectCredit ? <Credit><img onClick={creditSelect} src={SelectPay} alt="" /> Cartão de crédito</Credit> : <Credit><img onClick={creditSelect} src={SelectedPay} alt="" /> Cartão de crédito</Credit>}

            <Button onClick={makeWish}>Confirmar</Button>
            <MenuFeed>
            <img onClick={() => goToFeed(history)} src='https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/8CD04B9B-73CB-40DC-AE16-63CE142EF1F4.svg'/>
            <img onClick={() => goToCart(history)} src='https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/EC5DAC84-C9D0-4BA6-869A-6431F534FCBE.svg'/>
            <img onClick={() => goToProfile(history)} src='https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/14952B60-73C1-4CB5-A219-C37F0F9640B5.svg'/>
        </MenuFeed>
        </ContainerCart>
    );
};

export default CartPage;