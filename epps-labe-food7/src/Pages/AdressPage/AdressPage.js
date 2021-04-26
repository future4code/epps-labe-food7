import React from 'react'
import { ContainerContent,Text, Header } from './styled'
import SetaImg from '../../images/back.png'
import { useHistory } from 'react-router-dom';
import { goToBack } from '../../Routes/Coordinator'
import AdressForm from './adressForm'

const AdressPage = () => {
    const history = useHistory()

    return (
        <ContainerContent>
            <Header>
                <img onClick={() => { goToBack(history) }} src={SetaImg} alt={''} />
            </Header>
            <Text>Meu endereço</Text>
            <AdressForm/>
        </ContainerContent>
    )
}

export default AdressPage


















