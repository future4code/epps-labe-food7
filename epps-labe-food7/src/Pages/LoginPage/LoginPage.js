import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { goToSignUp, goToProfile } from '../../Routes/Coordinator.js';
import SenhaImg from '../../images/senha.png'
import SenhaImg2 from '../../images/senha-2.png'
import { LoginCard, LoginPageStyle, ContainerInput, Label, ImgSenha,Input, Button, LinkCadastro } from './style';

const LoginPage = () => {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verSenha, setVerSenha] = useState(true);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const mudarImagem = () => {
        setVerSenha(!verSenha)
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

                <LoginCard>
                    <img src='https://i.imgur.com/kAcITlq.png'/>
                    <div>Entrar</div>
                    <ContainerInput>
                            <Label>E-mail*</Label>
                            <ImgSenha>
                                <Input
                                    placeholder='email@gmail.com'
                                    required
                                    name={"email"}
                                    value={email}
                                    onChange={handleEmail}
                                    type={"email"}
                                />
                            </ImgSenha>
                        </ContainerInput>

                        <ContainerInput>
                            <Label>Senha*</Label>
                            <ImgSenha>
                                {verSenha? <Input placeholder='Mínimo 6 caracteres' 
                                required 
                                name={"password"}
                                value={password}
                                onChange={handlePassword}
                                type={"password"}/> : <Input placeholder='Mínimo 6 caracteres' 
                                required 
                                name={"password"}
                                value={password}
                                onChange={handlePassword}
                                type={"text"}
                                title={"Mínimo 6 caracteres"}
                                pattern={"^[A-Za-z0-9\d]{6,}$"}
                                />}
                                {verSenha? <img onClick={mudarImagem} src={SenhaImg} alt='' /> : <img onClick={mudarImagem} src={SenhaImg2} alt='' />}
                            </ImgSenha>
                        </ContainerInput>
                    
                    <Button onClick={handleLogar}>Entrar</Button>
                    <LinkCadastro onClick={() => goToSignUp(history)}>Não possui cadastro? Clique aqui</LinkCadastro>
                </LoginCard>
            </LoginPageStyle>
        </>
    )
    
}

export default LoginPage