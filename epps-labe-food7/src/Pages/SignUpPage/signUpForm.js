import React, { useState } from 'react'
import { ContainerForm, Form, Input, Button, Label,  ErrorMensage, ImgSenha, ContainerInput } from './style'
import SenhaImg from '../../images/senha.png'
import SenhaImg2 from '../../images/senha-2.png'
import useForm  from '../../Hooks/useForm.js'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'


const SignUpForm = () => {
    const [form, onChange, clearFields] = useForm({ name: "", email: "", cpf: "", password: "", password2: "" })
    const history = useHistory()
    const [verSenha, setVerSenha] = useState(true)
    const [verSenha2, setVerSenha2] = useState(true)
    const [mensagemErro, setMensagemErro] = useState(true)

    const register = (/* form, clearFields, history */) => {
        axios.post(`${BASE_URL}/signup`, form)
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                history.push('/endereco')
            })
            .catch((err) => {
                alert(err)
            })
    }
    const onSubmitForm = (e) => {
        e.preventDefault()
        if(form.password === form.password2) {
            setMensagemErro(true)
            register(/* form, clearFields, history */)
            
        } else {
            setMensagemErro(false)
        }
    }

    const mudarImagem = () => {
        setVerSenha(!verSenha)
    }

    const mudarImagem2 = () => {
        setVerSenha2(!verSenha2)
    }

    return (
            <ContainerForm>
                <Form onSubmit={onSubmitForm}>
                        <ContainerInput>
                            <Label>Nome*</Label>
                            <ImgSenha>
                                <Input
                                    placeholder='Nome e sobrenome'
                                    required
                                    name={"name"}
                                    value={form.name}
                                    onChange={onChange}
                                    type={"text"} />
                            </ImgSenha>
                        </ContainerInput>

                        <ContainerInput>
                            <Label>E-mail*</Label>
                            <ImgSenha>
                                <Input
                                    placeholder='email@gmail.com'
                                    required
                                    name={"email"}
                                    value={form.email}
                                    onChange={onChange}
                                    type={"email"}
                                />
                            </ImgSenha>
                        </ContainerInput>

                        <ContainerInput>
                            <Label>CPF*</Label>
                            <ImgSenha>
                                <Input
                                    placeholder='000.000.000-00'
                                    required
                                    name={"cpf"}
                                    value={form.cpf}
                                    onChange={onChange}
                                    type={"text"}
                                    title={"000.000.000-00"}
                                    pattern={"^([0-9]){3}\.([0-9]){3}\.([0-9]){3}-([0-9]){2}$"} 
                                />
                            </ImgSenha>
                        </ContainerInput>

                        <ContainerInput>
                            <Label>Senha*</Label>
                            <ImgSenha>
                                {verSenha? <Input placeholder='Mínimo 6 caracteres' 
                                required 
                                name={"password"}
                                value={form.password}
                                onChange={onChange}
                                type={"password"}/> : <Input placeholder='Mínimo 6 caracteres' 
                                required 
                                name={"password"}
                                value={form.password}
                                onChange={onChange}
                                type={"text"}
                                title={"Mínimo 6 caracteres"}
                                pattern={"^[A-Za-z0-9\d]{6,}$"}
                                />}
                                {verSenha? <img onClick={mudarImagem} src={SenhaImg} alt='' /> : <img onClick={mudarImagem} src={SenhaImg2} alt='' />}
                            </ImgSenha>
                        </ContainerInput>

                        <ContainerInput erro={mensagemErro}>
                            <Label erro={mensagemErro}>Confirmar*</Label>
                            <ImgSenha>
                                {verSenha2? <Input placeholder='Confirme a senha anterior' 
                                required 
                                name={"password2"}
                                value={form.password2}
                                onChange={onChange}
                                type={"password"}
                                
                                /> : <Input placeholder='Confirme a senha anterior' 
                                required 
                                name={"password2"}
                                value={form.password2}
                                onChange={onChange}
                                type={"text"}
                                
                                />}
                                {verSenha2? <img onClick={mudarImagem2} src={SenhaImg} alt='' /> : <img onClick={mudarImagem2} src={SenhaImg2} alt='' />}
                            </ImgSenha>
                        </ContainerInput>

                        {mensagemErro? <ErrorMensage>  </ErrorMensage> : <ErrorMensage>Deve ser a mesma que a anterior.</ErrorMensage>}
                    <Button type={"submit"} >Criar</Button>
                </Form>
            </ContainerForm>
    )
}

export default SignUpForm