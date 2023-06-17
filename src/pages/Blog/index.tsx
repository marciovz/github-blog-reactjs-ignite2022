import { Profile } from '../../components/Profile'
import { InputFilter } from '../../components/InputFilter'
import { PostItemCard } from '../../components/PostItemCard'

import { usePosts } from '../../context/postsContext'

import { Container, Info, PostListContainer } from './styles'

export function Blog() {
  const { profile } = usePosts()

  return (
    <Container>
      <Profile profile={profile} />
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
