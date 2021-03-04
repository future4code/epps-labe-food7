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
                
>>>>>>> ea37b36e93c3484a1a7d6226ceb5a8970f3c97e7
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