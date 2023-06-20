import { Profile } from '../../components/Profile'
import { InputFilter } from '../../components/InputFilter'
import { PostItemCard } from '../../components/PostItemCard'

import { usePosts } from '../../context/postsContext'

import { Container, Info, PostListContainer } from './styles'

export function Blog() {
  const { profile, issues } = usePosts()

  return (
    <Container>
      <Profile profile={profile} />
      <Info>
        <p>Publicações</p>
        <span>
          {issues.totalPublications}
          {issues.totalPublications === 1 ? ' publicação' : ' publicações'}
        </span>
      </Info>
      <InputFilter style={{ marginTop: '0.75rem' }} />

      <PostListContainer>
        {issues.items.map((issue) => (
          <PostItemCard key={issue.id} issue={issue} />
        ))}
      </PostListContainer>
    </Container>
  )
}
