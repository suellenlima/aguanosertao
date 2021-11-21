import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
    width: 100%;
    height: 60px;
    background: #FFE595;
    border-radius: 30px;

    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`
    font-family: 'Comfortaa-Medium';
    color: #B45A25;
    font-size: 25px;
`;