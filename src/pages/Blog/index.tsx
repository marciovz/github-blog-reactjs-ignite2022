import { Profile } from '../../components/Profile'
import { Container, Info } from './styles'

export function Blog() {
  return (
    <Container>
      <Profile />
      <Info>
        <p>Publicações</p>
        <span>6 publicações</span>
      </Info>
    </Container>
  )
}
