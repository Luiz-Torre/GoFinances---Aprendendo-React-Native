import React from 'react';
import {Container, Header, Title, Payment, Footer,Icon, CategoryName, Date, Category } from './style';

interface List{
    name: string;
    value: string;
    date: string;
    category: 'Vendas' | 'Alimentação' | 'total'
}
const icon ={
    total: 'arrow-up-circle',
    Alimentação: 'coffee',
    Vendas: 'dollar-sign'
}

export function ListagemCard({name, value, date, category} : List){
    return(
        <Container>
            <Header>
                <Title >{name}</Title>
                {category === 'Vendas' ? <Payment category = {category}>{value}</Payment> : <Payment category = {category}>- {value}</Payment> }
            </Header>

            <Footer>
                <Category>

                    <Icon name = {icon[category]}/>
                    <CategoryName>{category} </CategoryName>
                </Category>
                <Date> {date}</Date>
            </Footer>
        </Container>
    )
}