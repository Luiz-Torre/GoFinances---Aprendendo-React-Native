import { Feather } from '@expo/vector-icons';
import { getStatusBarHeight, ifIphoneX } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from "styled-components/native";


interface TypeProps{
    category: 'Vendas' | 'Alimentação' | 'total'

}


export const Container = styled.View`

    height: ${RFValue(200)}px;
    width: ${RFValue(300)}px;
    margin-left: 24px;
    border-radius: 5px;
    justify-content: space-between;
`;


export const Header = styled.View``;
export const Title = styled.Text``;
export const Payment = styled.Text<TypeProps> ``;
export const Footer = styled.View``;
export const Icon = styled(Feather) ``;
export const Category = styled.Text``;
export const  Date = styled.Text``;