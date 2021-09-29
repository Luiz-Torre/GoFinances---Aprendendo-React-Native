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