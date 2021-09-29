import React from 'react';
import {Container, Header, Title, Payment, Footer,Icon, Category, Date } from './style';

interface List{
    name: string;
    value: string;
    date: string;
    category: 'Vendas' | 'Alimentação' | 'total'
}
const icon ={
    total: 'arrow-up-circle',
    Alimentação: 'coffe',
    Vendas: 'dollar-sign'
}

export function Listagem({name, value, date, category} : List){
    return(
        <Container>
            <Header>
                <Title >{name}</Title>
                <Payment category = {category}> {value}</Payment>
            </Header>

            <Footer>
                <Icon name = {icon[category]}/>
                <Category>{category} </Category>
                <Date> {date}</Date>
            </Footer>
        </Container>
    )
}