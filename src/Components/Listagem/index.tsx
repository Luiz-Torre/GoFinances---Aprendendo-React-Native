import React from 'react';
import {Container, Header, Title} from './style';


export function Listagem({} : Card){
    return(
        <Container>
            <Header>
                <Title {name}</Title>
                <Payment type = {type}> R$ 12.000,00</Payment>
            </Header>

            <Footer>
                <Amount type = {type}>{value}</Amount>
                <LastTransaction type = {type}> {description}</LastTransaction>
            </Footer>
        </Container>
    )
}