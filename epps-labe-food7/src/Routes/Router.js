import React from 'react'
import { BrowserRouter,Switch, Route} from "react-router-dom"
import CartPage from '../Pages/CartPage/CartPage'
import FeedPage from '../Pages/FeedPage/FeedPage'
import HomePage from '../Pages/HomePage/HomePage'
import LoginPage from '../Pages/LoginPage/LoginPage'
import ProfilePage from '../Pages/ProfilePage/ProfilePage'
import DetailsPage from '../Pages/DetailsPage/DetailsPage'
import RequestsPage from '../Pages/RequestsPage/RequestsPage'
import SignUpPage from '../Pages/SignUpPage/SignUpPage'
import ErrorPage from '../Pages/ErrorPage/ErrorPage'
import AdressPage from '../Pages/AdressPage/AdressPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/">
          <HomePage/>
        </Route>
      <Route exact path="/login">
          <LoginPage/>
        </Route>
        <Route exact path="/cadastro">
          <SignUpPage/>
        </Route>
<<<<<<< HEAD
=======
        <Route exact path="/endereco">
          <AdressPage/>
        </Route>
        <Route exact path="/">
          <HomePage/>
        </Route>
>>>>>>> 31598cca2df4747e92d69daa592de566cae75406
        <Route exact path="/carrinho">
          <CartPage/>
        </Route>
        <Route exact path="/feed">
<<<<<<< HEAD
=======
          <FeedPage/>
        </Route>
        <Route exact path="/restaurante/:id">
>>>>>>> ba45359daaf97c3ae5ff7a135e953b7a0fc9f35c
          <DetailsPage/>
        </Route>
        <Route exact path="/pedidos">
          <RequestsPage/>
        </Route>
        <Route exact path="/perfil">
          <ProfilePage/>
        </Route>
        <Route>
          <ErrorPage/>
        </Route>
      </Switch>
      </BrowserRouter>
  )
}

export default Router