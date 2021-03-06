import React from 'react'
import { useHistory } from 'react-router';
import { goToLogin } from '../../Routes/Coordinator';
import { Rectangle } from './style';

const HomePage = () => {
    const history = useHistory();

    return (
        <Rectangle onClick={() => goToLogin(history)}>
            <img src='https://i.imgur.com/skA7UXV.png'/>
        </Rectangle>
    )
}

export default HomePage