import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'

import {
  Container,
  NoContentContainer,
  ContentContainer,
  HeaderProfile,
  ContentProfile,
  FooterProfile,
} from './styles'

interface ProfileData {
  name: string
  bio: string
  login: string
  avatarUrl: string
  github: string
  company: string | null
  followers: number
}

interface ProfileProps {
  profile: ProfileData | null
}

export function Profile({ profile }: ProfileProps) {
  return (
    <Container>
      {!profile ? (
        <NoContentContainer>
          <p>Ops. Não foi possível importar seu dados</p>
        </NoContentContainer>
      ) : (
        <ContentContainer>
          <img src={profile.avatarUrl} alt="" />
          <div>
            <div>
              <HeaderProfile>
                <p>{profile.name}</p>
                <Link to={profile.github}>
                  github
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </Link>
              </HeaderProfile>

              <ContentProfile>{profile.bio}</ContentProfile>
            </div>

            <FooterProfile>
              <div>
                <FontAwesomeIcon icon={faGithub} />
                <p>{profile.login}</p>
              </div>
              {profile.company && (
                <div>
                  <FontAwesomeIcon icon={faBuilding} />
                  <p>{profile.company}</p>
                </div>
              )}
              <div>
                <FontAwesomeIcon icon={faUserGroup} />
                <p>
                  {profile.followers}
                  {profile.followers === 1 ? ' seguidor' : ' seguidores'}
                </p>
              </div>
            </FooterProfile>
          </div>
        </ContentContainer>
      )}
    </Container>
  )
}
