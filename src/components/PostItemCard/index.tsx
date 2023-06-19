import { textCut } from '../../utils/textCut'
import { distanceInTimeToNow } from '../../utils/distanceInTime'
import { captalise } from '../../utils/capitalise'

import { Container, Header, Content } from './styles'

interface Issue {
  id: string
  title: string
  body: string
  createdAt: string
}

interface PostItemCardProps {
  issue: Issue
}

export function PostItemCard({ issue }: PostItemCardProps) {
  const publicationTime = captalise(distanceInTimeToNow(issue.createdAt))

  return (
    <Container to={`/post/${issue.id}`}>
      <Header>
        <h2>{issue.title}</h2>
        <span>{publicationTime}</span>
      </Header>
      <Content>
        <p>{textCut(issue.body, 185)}</p>
      </Content>
    </Container>
  )
}
