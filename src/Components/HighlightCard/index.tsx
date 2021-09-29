import React from 'react';


import { Container,Header, Title, Icon,Footer,Amount, LastTransaction} from './styles';
interface Card{
    name: string;
    value: string;
    description: string;
    type: 'up' | 'down' | 'total'
}
const icon ={
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
    total: 'dollar-sign'
}

export function HighlightCard({name,value,description,type} : Card){
    return(
        <Container type = {type}>
            <Header>
                <Title type = {type}> {name}</Title>
                <Icon name = {icon[type]} type = {type}/>
            </Header>

            <Footer>
                <Amount type = {type}>{value}</Amount>
                <LastTransaction type = {type}> {description}</LastTransaction>
            </Footer>
        </Container>
    )
}