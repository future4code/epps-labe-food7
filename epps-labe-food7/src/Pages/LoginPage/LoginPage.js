import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { goToHome, goToProfile } from '../../Routes/Coordinator.js';
import { Input, Label, Form, Header, ContainerContent, Button, ContainerInput } from './style';

const LoginPage = () => {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleLogar = () => {
        const body = {
            email: email,
	        password: password
        };
        
        try {
            axios
            .post(
                "https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/login",
                body
            )
            .then ((res) => {
<<<<<<< HEAD
                localStorage.setItem("token", res.data.token);
                setToken(localStorage.getItem("token"))
                console.log(`hasAdress: ${res.data.user.hasAddress}`)
                if (!res.data.user.hasAddress) {
                    goToHome(history);
                } else {
                    goToProfile(history);
                }
            })
        } catch (error) {
            console.error(error);
            alert("Erro ao logar");
        }
    }

    return (
        <ContainerContent>
            <Header>
                <img src='https://i.imgur.com/kAcITlq.png'/>
            </Header>
            <Form>
                <Label>E-mail*</Label>
                <ContainerInput>
                    <Input
                        placeholder='email@gmail.com'
                        required
                        value={email}
                        type={"email"}
                        onChange={handleEmail}
                    />
                </ContainerInput>
                <Label>Senha*</Label>
                <ContainerInput>
                    <Input
                        placeholder='Mínimo 6 caracteres'
                        required
                        value={password}
                        type={"password"}
                        onChange={handlePassword}
                    />
                </ContainerInput>
                <Button onClick={handleLogar}>Entrar</Button>
            </Form>
            
            
        </ContainerContent>
    )
    
}

export default LoginPage