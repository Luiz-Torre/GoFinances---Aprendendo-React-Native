import React from 'react'
import { Container, Header } from './styles'

interface Props{
    title: string;
}

export function Dashboard({title} : Props) {
    return(
            <Container>
                <Header></Header>
            </Container>
        )

}
