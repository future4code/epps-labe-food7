import React from 'react'
import { BrowserRouter,Switch, Route} from "react-router-dom"
import CartPage from '../Pages/CartPage/CartPage'
import DetailsPage from '../Pages/DetailsPage/DetailsPage'
import HomePage from '../Pages/HomePage/HomePage'
import LoginPage from '../Pages/LoginPage/LoginPage'
import ProfilePage from '../Pages/ProfilePage/ProfilePage'
import RequestsPage from '../Pages/RequestsPage/RequestsPage'
import SignUpPage from '../Pages/SignUpPage/SignUpPage'
import ErrorPage from '../Pages/ErrorPage/ErrorPage'


const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/login">
          <LoginPage/>
        </Route>
        <Route exact path="/cadastro">
          <SignUpPage/>
        </Route>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route exact path="/carrinho">
          <CartPage/>
        </Route>
        <Route exact path="/detalhes/:id">
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