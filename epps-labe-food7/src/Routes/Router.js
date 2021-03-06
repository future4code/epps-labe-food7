import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import CartPage from '../Pages/CartPage/CartPage'
import FeedPage from '../Pages/FeedPage/FeedPage'
import HomePage from '../Pages/HomePage/HomePage'
import LoginPage from '../Pages/LoginPage/LoginPage'
import ProfilePage from '../Pages/ProfilePage/ProfilePage/ProfilePage'
import EditProfile from '../Pages/ProfilePage/EditProfile/EditProfile';
import DetailsPage from '../Pages/DetailsPage/DetailsPage'
import RequestsPage from '../Pages/RequestsPage/RequestsPage'
import SignUpPage from '../Pages/SignUpPage/SignUpPage'
import ErrorPage from '../Pages/ErrorPage/ErrorPage'
import AdressPage from '../Pages/AdressPage/AdressPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/cadastro">
          <SignUpPage />
        </Route>

        <Route exact path="/endereco">
          <AdressPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/carrinho">
          <CartPage />
        </Route>

        <Route exact path="/feed">
          <FeedPage/>
        </Route>

        <Route exact path="/restaurante/:id">
          <DetailsPage/>
        </Route>

        <Route exact path="/pedidos">
          <RequestsPage />
        </Route>

        <Route exact path="/perfil">
          <ProfilePage />
        </Route>

        <Route exact path="/perfil/editar">
          <EditProfile />
        </Route>

        <Route>
          <ErrorPage />
        </Route>
        
      </Switch>
    </BrowserRouter>
  )
}

export default Router