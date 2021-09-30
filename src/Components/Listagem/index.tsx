import React from 'react';
import {Container, Header, Title, Payment, Footer,Icon, CategoryName, Date, Category } from './style';



interface Category {
    name: string;
    icon: string;
  }
  
export interface TransactionCardProps {
    type : 'positive' | 'negative'
    title: string;
    value: string;
    category: Category;
    date: string;
    }

interface Props {
    data: TransactionCardProps;
}


export function ListagemCard({data} : Props){
    return(
        <Container>
            <Header>
                <Title >{data.title}</Title>
                {data.type === 'positive' ? <Payment type = {data.type}>{data.value}</Payment> : <Payment type = {data.type}>- {data.value}</Payment> }
            </Header>

            <Footer>
                <Category>

                    <Icon name = {data.category.icon}/>
                    <CategoryName>{data.category.name} </CategoryName>
                </Category>
                <Date> {data.date}</Date>
            </Footer>
        </Container>
    )
}