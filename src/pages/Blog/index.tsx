import { Profile } from '../../components/Profile'
import { InputFilter } from '../../components/InputFilter'
import { PostItemCard } from '../../components/PostItemCard'

import { Container, Info, PostListContainer } from './styles'

export function Blog() {
  return (
    <Container>
      <Profile />
      <Info>
        <p>Publicações</p>
        <span>6 publicações</span>
      </Info>
      <InputFilter type="search" style={{ marginTop: '0.75rem' }} />

      <PostListContainer>
        <PostItemCard />
        <PostItemCard />
        <PostItemCard />
        <PostItemCard />
      </PostListContainer>
    </Container>
  )
}
