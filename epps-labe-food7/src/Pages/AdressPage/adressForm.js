import React from 'react'
import { ContainerForm, Form, Input, Button, Label, ImgSenha, ContainerInput} from './styled'
import useForm from '../../Hooks/useForm.js'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'

const AdressForm = () => {
    const [form, onChange, clearFields] = useForm({ street: "", number: "", neighbourhood: "", city: "", state: "", complement: "" })
    const history = useHistory()

    const headers = {
        headers: {
            auth: localStorage.getItem('token')
        }
    }
    const register = (/* form, clearFields, history */) => {
        axios.put(`${BASE_URL}/address`, form, headers)
            .then((res) => {
                    localStorage.setItem('token', res.data.token)
                clearFields()
                history.push('/restaurants')
            })
            .catch((err) => {
                alert(err.response)
            })
    }
    const onSubmitForm = (e) => {
        e.preventDefault()
        register(/* form, clearFields, history */)
    }

    return (
            <ContainerForm>
                <Form onSubmit={onSubmitForm}>
                    <ContainerInput>
                        <Label>Logradouro*</Label>
                        <ImgSenha>
                            <Input
                                placeholder='Rua/Av.'
                                required
                                name={"street"}
                                value={form.street}
                                onChange={onChange}
                                type={"text"} />
                        </ImgSenha>
                    </ContainerInput>
                    <ContainerInput>
                        <Label>Número*</Label>
                        <ImgSenha>
                            <Input
                                placeholder='Numero'
                                required
                                name={"number"}
                                value={form.number}
                                onChange={onChange}
                                type={"number"} />
                        </ImgSenha>
                    </ContainerInput>

                    <ContainerInput>
                        <Label>Complemento</Label>
                        <ImgSenha>
                            <Input
                                placeholder='Apto./ Bloco'
                                name={"complement"}
                                value={form.complement}
                                onChange={onChange}
                                type={"complement"}
                            />
                        </ImgSenha>
                    </ContainerInput>

                    <ContainerInput>
                        <Label>Bairro*</Label>
                        <ImgSenha>
                            <Input
                                placeholder='Bairro'
                                required
                                name={"neighbourhood"}
                                value={form.neighbourhood}
                                onChange={onChange}
                                type={"text"}
                                title={"000.000.000-00"}
                            />
                        </ImgSenha>
                    </ContainerInput>

                    <ContainerInput>
                        <Label>Cidade*</Label>
                        <ImgSenha>
                            <Input placeholder='Cidade'
                                required
                                name={"city"}
                                onChange={onChange}
                                type={"city"} />
                        </ImgSenha>
                    </ContainerInput>

                    <ContainerInput>
                        <Label>Estado*</Label>
                        <ImgSenha>
                            <Input placeholder='Estado'
                                required
                                name={"state"}
                                value={form.state}
                                onChange={onChange}
                                type={"text"}
                            />
                        </ImgSenha>
                    </ContainerInput>
                    <Button type={"submit"} >Criar</Button>
                </Form>
            </ContainerForm>

    )
}

export default AdressForm


















