import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'

import {
  Container,
  HeaderProfile,
  ContentProfile,
  FooterProfile,
} from './styles'
export function Profile() {
  return (
    <Container>
      <img src="http://github.com/marciovz.png" alt="" />
      <div>
        <div>
          <HeaderProfile>
            <p>Cameron Willianson</p>
            <a href="http://github.com/marciovz">
              github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </HeaderProfile>

          <ContentProfile>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </ContentProfile>
        </div>

        <FooterProfile>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <p>camerronwll</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <p>Rocketseat</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <p>32 seguidores</p>
          </div>
        </FooterProfile>
      </div>
    </Container>
  )
}
