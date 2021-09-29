import { Feather } from '@expo/vector-icons';
import { getStatusBarHeight, ifIphoneX } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from "styled-components/native";


interface TypeProps{
    type: 'up' | 'down' | 'total'

}

export const Container = styled.View<TypeProps>`
    background-color: ${({theme, type}) => type === 'total' ? theme.colors.secondary : theme.colors.shape};

    height: ${RFValue(200)}px;
    width: ${RFValue(300)}px;
    margin-left: 24px;
    border-radius: 5px;
    justify-content: space-between;
`;


export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: ${RFValue(18)}px;;

`;

export const Title = styled.Text<TypeProps>`
    color: ${({theme, type}) => type === 'total' ? theme.colors.shape : theme.colors.title};

    padding-left: ${RFValue(23)}px;;

    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;

`;

export const Icon = styled(Feather)<TypeProps>`
    padding-right: ${RFValue(20)}px;;
    font-size: ${RFValue(40)}px;
    
    
    ${({type})=> type === 'up' && css`color: ${({theme}) => theme.colors.sucess};`};
    ${({type})=> type === 'down' && css`color: ${({theme}) => theme.colors.attention}`};
    ${({type})=> type === 'total' && css`color: ${({theme}) => theme.colors.shape};`};

    `;

export const Footer = styled.View`
    margin-bottom: ${RFValue(35)}px;
`;

export const Amount = styled.Text<TypeProps>`
    color: ${({theme, type}) => type === 'total' ? theme.colors.shape : theme.colors.title};

    font-family: ${({theme}) => theme.fonts.medium};
    font-size: ${RFValue(32)}px;
    padding-left: ${RFValue(22)}px;;

;


`;

export const LastTransaction = styled.Text<TypeProps>`
    color: ${({theme, type}) => type === 'total' ? theme.colors.shape : theme.colors.text};
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    padding-left: ${RFValue(22)}px;;
`;

export const HighlightCards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
})`
    width: 100%;
    position: absolute;
    margin-top: ${getStatusBarHeight()+RFValue(110)}px;

`;