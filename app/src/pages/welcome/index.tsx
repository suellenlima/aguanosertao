import React from 'react';
import { Image, ImageBackground } from 'react-native';

import Button from '../../components/Button';

import { Container, Title, SubTitle, SimpleButton, SignIn } from './styles';

import logoImg from '../../assets/logo.png';
import backgroundImg from '../../assets/background-welcome.png';

const Welcome: React.FC = () => {
    return (
        <ImageBackground source={backgroundImg} resizeMode="cover" style={{flex: 1, justifyContent: "center"}} >
            <Container >
                <Image source={logoImg} style={{marginBottom: 15}} />
                <Title>Olá!</Title>
                <Title>Bem vindo(a)</Title>
                <SubTitle>ao projeto que vai mudar a história do nosso sertão nordestino</SubTitle>
                <Button>Iniciar</Button>
                <SignIn>
                    <SubTitle>Já possui uma conta ? </SubTitle>
                    <SimpleButton>Entrar</SimpleButton>
                </SignIn>
            </Container>
        </ImageBackground>

    );
};

export default Welcome;