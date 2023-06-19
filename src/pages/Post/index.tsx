import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'

import { PostHeaderCard } from '../../components/PostHeaderCard'
import { usePosts } from '../../context/postsContext'

import { Container, Content } from './styles'

export function Post() {
  const { id } = useParams()
  const { profile, issues, isLoadingIssues, isLoadingProfile } = usePosts()
  const isLoading = isLoadingIssues || isLoadingProfile

  const issue = issues.items.find((item) => String(item.id) === id)

  return (
    <Container>
      <PostHeaderCard
        profile={profile}
        title={issue?.title}
        publicationDate={issue?.createdAt}
        isLoading={isLoading}
        style={{ marginTop: '-5.5rem' }}
      />
      <Content>{issue && <ReactMarkdown>{issue?.body}</ReactMarkdown>}</Content>
    </Container>
  )
}
