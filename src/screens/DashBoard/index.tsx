import React from 'react'
import { HighlightCard } from '../../Components/HighlightCard'
import { HighlightCards } from '../../Components/HighlightCard/styles'
import { ListagemCard } from '../../Components/Listagem'

import { Container, Listagem,ListagemText,Header, Hello, UserName, Photo, User, UserInfo, UserWrapper, Icon, TransactionList } from './styles'

interface Props{
    title: string;
}


 const data = [
    {
    id: '1',
    title: "Desenvolvimento de site",
    type: 'positive',
    value: "R$ 12.000,00",
    category: {
      name: 'Vendas',
      icon: 'dollar-sign'
    },
    date: "13/04/2020"
  },
  {
    id: '2',
    title: "Compra no Ifood",
    type: 'negative',
    value: "R$ 1.000,00",
    category: {
      name: 'Alimentação',
      icon: 'coffee'
    },
    date: "13/04/2020"
  },
  {
    id: '3',
    title: "Aluguel da Mansão",
    type: 'negative',
    value: "R$ 10.500,00",
    category: {
      name: 'Pagamento',
      icon: 'home'
    },
    date: "13/04/2020"
  }
]


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
                    <TransactionList
                        data={data}
                        keyExtractor = {item => item.id}
                        renderItem={({ item }) => <ListagemCard data={item} />}
                        />

                </Listagem>
            </Container>
        )

}
