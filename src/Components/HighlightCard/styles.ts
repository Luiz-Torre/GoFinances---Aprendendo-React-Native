import { Feather } from '@expo/vector-icons';
import { getStatusBarHeight, ifIphoneX } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from "styled-components/native";


export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.shape};
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

export const Footer = styled.View`
    margin-bottom: ${RFValue(35)}px;
`;

export const Amount = styled.Text`
    color: ${({theme}) => theme.colors.title};
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: ${RFValue(32)}px;
    padding-left: ${RFValue(22)}px;;

;


`;

export const LastTransaction = styled.Text`
 color: ${({theme}) => theme.colors.text};
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