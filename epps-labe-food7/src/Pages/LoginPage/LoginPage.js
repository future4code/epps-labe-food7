import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { goToSignUp, goToProfile } from '../../Routes/Coordinator.js';
import { Rectangle, LoginCard, LoginPageStyle } from './style';

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

                localStorage.setItem("token", res.data.token);
                history.push("/feed")
            })
        } catch (error) {
            console.error(error);
            alert("Erro ao logar");
        }
    }

    return (
        <>
            <LoginPageStyle>
<<<<<<< HEAD
=======
                
>>>>>>> ba45359daaf97c3ae5ff7a135e953b7a0fc9f35c
                <LoginCard>
                    <img src='https://i.imgur.com/kAcITlq.png'/>
                    <div>Entrar</div>
                    <div>
                        <input
                            placeholder={'E-mail'}
                            value={email}
                            onChange={handleEmail}
                        />
                    </div>
                    <div>
                        <input
                            placeholder={'Senha'}
                            value={password}
                            onChange={handlePassword}
                        />
                    </div>
                    
                    <button onClick={handleLogar}>Entrar</button>
                </LoginCard>
            </LoginPageStyle>
        </>
    )
    
}

export default LoginPage