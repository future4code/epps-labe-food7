import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ProductItem from "../../Components/ProductItem";
import GlobalStateContext from "../../Global/GlobalStateContext";
import { goToDetails } from "../../Routes/Coordinator";
import { ContainerCart, ContainerAdress, ContainerTotal, Header, TitleAdress, Adress, TitleTotal, Total, HeaderTitle, ProductsCartTitle, Shipping, Cash, Credit, TitlePay, Button, SeparationLine } from "./style";
import SelectPay from '../../images/radiobutton-unchecked.png'
import SelectedPay from '../../images/radiobutton-checked.png'
import CardProduct from '../../Components/CardProduct/CardProduct'
import axios from "axios";
import {BASE_URL} from '../../constants/urls'

const CartPage = () => {
    const { states, setters, requests } = useContext(GlobalStateContext);
    const [priceToPay, setPriceToPay] = useState(0);
    const history = useHistory();
    const [selectCash, setSelectCash] = useState(false)
    const [selectCredit, setSelectCredic] = useState(false)


/* FAZER PEDIDO */


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
    if(selectCash === true){
        paymentMethod = 'money'
    } else if(selectCredit === true){
        paymentMethod = 'creditcard'
    }
}

const makeWish = (/* form, clearFields, history */) => {
    methodPay()
    const body = {
        products: [{
            id: "CnKdjU6CyKakQDGHzNln",
            quantity: 10
        }, {
            quantity: 1,
            id: "KJqMl2DxeShkSBevKVre"
        }],
        paymentMethod: paymentMethod
    }
console.log(body)
    const headers = {
        headers: {
            auth: localStorage.getItem('token')
        }
    }

    axios.post(`${BASE_URL}/restaurants/1/order`, body, headers)
        .then((res) => {
           /*  localStorage.setItem('token', res.data.token)
            history.push('/endereco') */
            console.log('Ola mundo deu certo')
        })
        .catch((err) => {
            alert(err.response.data.message)
            console.log(err.response.data)
        })
}

const onClickButton = () => {
    makeWish()
}


/* FAZER PEDIDO */

/* valor total é setPriceTopay */
    useEffect(() => {
        let currentTotal = 0;
        states.cart.forEach((item) => {
            currentTotal += item.price * item.amount;
        });
        setPriceToPay(currentTotal);
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

    const productsList = states.cart.map((item) => {
        return (
            <ProductItem
                key={item.id}
                image={item.photos[0]}
                name={item.name}
                price={item.price}
                amount={item.amount}
                removeItem={() => removeItemFromCart(item)}
            />
        );
    });

    return (
        <ContainerCart>


<button onClick={onClickButton}>Teste realizar pedido</button>

            <Header><HeaderTitle>Meu carrinho</HeaderTitle></Header>
            <ContainerAdress>
                <TitleAdress>Endereço de entrega</TitleAdress>
                <Adress>Rua Alessandra Vieira, 42</Adress>
            </ContainerAdress>

            <ProductsCartTitle>Carrinho Vazio</ProductsCartTitle>
            <CardProduct />
            <CardProduct />

            <Shipping>Frete R$0,00</Shipping>
            <ContainerTotal><TitleTotal>SUBTOTAL</TitleTotal> <Total>R$00,00</Total></ContainerTotal>
            <TitlePay>Forma de pagamento</TitlePay>
            <SeparationLine />
            {!selectCash ? <Cash><img onClick={cashSelect} src={SelectPay} alt="" /> Dinheiro</Cash> : <Cash><img onClick={cashSelect} src={SelectedPay} alt="" /> Dinheiro</Cash>}
            {!selectCredit ? <Credit><img onClick={creditSelect} src={SelectPay} alt="" /> Cartão de crédito</Credit> : <Credit><img onClick={creditSelect} src={SelectedPay} alt="" /> Cartão de crédito</Credit>}

            <Button>Confirmar</Button>

        </ContainerCart>

        /* <PageContainer>
          {productsList.length > 0 ? productsList : <p> Carrinho Vazio</p>}
          <h1>Total: R${priceToPay.toFixed(2)}</h1>
          <button onClick={() => goToDetails(history)}>Continuar Comprando</button>
        </PageContainer> */
    );
};

export default CartPage;
