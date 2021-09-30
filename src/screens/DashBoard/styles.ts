import styled from "styled-components/native";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import {Feather} from '@expo/vector-icons';
import {getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper'
import { DataListProps } from ".";
import { FlatList } from "react-native";
export const Container = styled.View`
    flex:1;
    background-color: ${({theme }) => theme.colors.background};

`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(39)}px;
    align-items: center;
    background-color: ${({theme}) => theme.colors.primary};
`;

export const UserWrapper = styled.View`
    width:100%;
    padding: 0 ${RFValue(24)}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: ${getStatusBarHeight()+RFValue(28)}px;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Hello = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(18)}px;

    font-family: ${({theme}) => theme.fonts.regular};
`;

export const UserName = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.bold};
`;


export const Photo = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: 12px;
`;

export const User = styled.View`
    margin-left: 17px;
`;



export const Icon = styled(Feather)`
    color: ${({theme})=> theme.colors.secondary};
    font-size: ${RFValue(24)}px;
`;


export const Listagem = styled.View`
    flex: 1%;
    margin-top: ${RFValue(84)}px;
`;

export const ListagemText = styled.Text`
    padding-left: ${RFValue(24)}px;
    font-size: ${RFValue(18)}px;
    color: ${({theme}) => theme.colors.text_dark};
    font-family: ${({theme}) => theme.fonts.regular};

`;

export const TransactionList = styled(
    FlatList as new () => FlatList<DataListProps>
    ).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
      paddingBottom: getBottomSpace()
    }
  })``;