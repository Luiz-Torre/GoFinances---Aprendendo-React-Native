import { Feather } from '@expo/vector-icons';
import { getStatusBarHeight, ifIphoneX } from 'react-native-iphone-x-helper';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import styled, { css } from "styled-components/native";


interface TypeProps{
    category: 'Vendas' | 'Alimentação' | 'total'

}


export const Container = styled.View`

    width: ${RFValue(327)}px;
    height: ${RFValue(128)}px;

    margin-left: 24px;
    border-radius: 5px;
    background-color: ${({theme}) => theme.colors.shape};
    justify-content: space-between;
    margin-bottom: ${RFValue(16)}px;

`;


export const Header = styled.View`
    padding-top: ${RFValue(17)}px;
    padding-left: ${RFValue(24)}px;

`;
export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    
    color: ${({theme}) => theme.colors.title};


`;
export const Payment = styled.Text<TypeProps> `
    font-size: ${RFValue(20)}px;
    color : ${({theme, category}) => category === 'Vendas'? theme.colors.sucess : theme.colors.attention}
`;
export const Footer = styled.View`
    flex-direction: row;
    padding-left: ${RFValue(24)}px;
    padding-bottom: ${RFValue(18)}px;
    
    justify-content: space-between;


`;
export const Icon = styled(Feather) `
    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(18)}px;
`;
export const Category = styled.View`
    flex-direction: row;
`;

export const CategoryName = styled.Text`
    color: ${({theme}) => theme.colors.text};
    padding-left: ${RFValue(17)}px ;
    font-family: ${({theme}) => theme.fonts.regular};

`;
export const  Date = styled.Text`
padding-right: ${RFValue(24)}px;
color: ${({theme}) => theme.colors.text};

font-family: ${({theme}) => theme.fonts.regular};

`;