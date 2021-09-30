import React from 'react'
import { HighlightCard } from '../../Components/HighlightCard'
import { HighlightCards } from '../../Components/HighlightCard/styles'
import { ListagemCard } from '../../Components/Listagem'

import { Container, Listagem,ListagemText,Header, Hello, UserName, Photo, User, UserInfo, UserWrapper, Icon } from './styles'

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
            
                <HighlightCards>

                <HighlightCard type = 'up' name='Entrada' value = 'R$ 17.400,00' description = 'Ultima entrada dia 13 de abril'/>
                <HighlightCard type = 'down' name='Saída' value = 'R$ 1.259,00' description = 'Ultima entrada dia 03 de abril'/>
                <HighlightCard type = 'total' name='Total' value = 'R$ 16.141,00' description = '01 à 16 de abril'/>
                </HighlightCards>

                <Listagem>
                    <ListagemText>Listagem</ListagemText>
                    <ListagemCard name = 'Desenvolvimento de Site' value = 'R$12.000,00' category = 'Alimentação' date = '13/04/2020'/>
                </Listagem>
            </Container>
        )

}
