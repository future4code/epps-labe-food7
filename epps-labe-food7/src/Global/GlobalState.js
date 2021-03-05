import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const getProducts = () => {
    axios
      .get(`${BASE_URL}/products`)
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const states = { products, cart };
  const setters = { setProducts, setCart };
  const requests = { getProducts };

  const data = { states, setters, requests };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
