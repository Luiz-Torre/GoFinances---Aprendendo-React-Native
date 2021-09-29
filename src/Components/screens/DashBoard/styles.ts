import styled from "styled-components/native";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.View`
    flex:1;
    background-color: ${({theme }) => theme.colors.backgruound};

`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(39)}px;

    background-color: ${({theme}) => theme.colors.primary};
`;

export const UserInfo = styled.View`

`;

export const Hello = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
`;

export const UserName = styled.Text`
    font-family: ${({theme}) => theme.fonts.bold};
`;


export const Photo = styled.Image`

`;

export const User = styled.View`
`;