import React from 'react';
import { Image } from 'react-native';

import { Container } from './styles';

import logoImg from '../../assets/logo.png';

const Welcome: React.FC = () => {
    return (
        <Container >
            <Image source={logoImg} />
        </Container>
    );
};

export default Welcome;