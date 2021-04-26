import React, { useState } from 'react'
import { ContainerContent, Text, Header } from './style'
import logo from '../../images/logo-future-eats-invert.png'
import SetaImg from '../../images/back.png'
import { useHistory } from 'react-router-dom';
import { goToBack } from '../../Routes/Coordinator'
import SignUpForm from './signUpForm'

const SignUpPage = () => {
    const history = useHistory()

    return (
        <ContainerContent>
            <Header>
                <img onClick={() =>  {goToBack(history)}} src={SetaImg} alt={''} />
            </Header>
            <img src={logo} alt={''} />

            <Text>Cadastrar</Text>
            <SignUpForm/>
        </ContainerContent>
    )
}

export default SignUpPage