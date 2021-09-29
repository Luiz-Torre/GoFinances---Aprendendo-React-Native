import React from 'react'
import { Container, Header, Hello, UserName, Photo, User, UserInfo } from './styles'

interface Props{
    title: string;
}

export function Dashboard({title} : Props) {
    return(
            <Container>
                <Header>
                    <UserInfo>
                        <Photo source={{uri:'https://avatars.githubusercontent.com/u/69131416?v=4'}}/>
                        <User>
                            <Hello>Ola,</Hello>
                            <UserName>Luiz</UserName>
                        </User>
                    </UserInfo> 
                </Header>
            </Container>
        )

}
