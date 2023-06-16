import { textCut } from '../../utils/textCut'
import { Container, Header, Content } from './styles'

export function PostItemCard() {
  return (
    <Container to="/post">
      <Header>
        <h2>JavaScript data types and data structures</h2>
        <span>Há 1 dia</span>
      </Header>
      <Content>
        <p>
          {textCut(
            'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and whatproperties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.',
            185,
          )}
        </p>
      </Content>
    </Container>
  )
}
