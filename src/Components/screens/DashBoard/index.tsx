import React from 'react'

import { Container, Header, Hello, UserName, Photo, User, UserInfo, UserWrapper, Icon } from './styles'

interface Props{
    title: string;
}

export function Dashboard({title} : Props) {
    return(
            <Container>
                <Header>
                    <UserWrapper>
                        <UserInfo>
                            <Photo source={{uri:'https://avatars.githubusercontent.com/u/69131416?v=4'}}/>
                            <User>
                                <Hello>Ola,</Hello>
                                <UserName>Luiz</UserName>
                            </User>
                        </UserInfo> 
                        <Icon name='power'/>
                    </UserWrapper>
                </Header>
            </Container>
        )

}
