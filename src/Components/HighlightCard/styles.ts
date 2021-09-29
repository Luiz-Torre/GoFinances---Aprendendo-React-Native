import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from "styled-components/native";


export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.shape};
    height: ${RFValue(200)}px;
    width: ${RFValue(300)}px;
    margin-left: 24px;
    border-radius: 5px;
`;


export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: ${RFValue(18)}px;;

`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.title};
    padding-left: ${RFValue(23)}px;;

    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;

`;

export const Icon = styled(Feather)`
    padding-right: ${RFValue(20)}px;;
    font-size: ${RFValue(40)}px;
    color: ${({theme}) => theme.colors.sucess};
    `;

export const Footer = styled.View``;

export const Amount = styled.Text``;

export const LastTransaction = styled.Text``;
