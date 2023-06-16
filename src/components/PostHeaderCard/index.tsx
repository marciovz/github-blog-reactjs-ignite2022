import { HTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faUserGroup,
  faCalendarDay,
  faChevronLeft,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'

import { Container } from './styles'

interface PostHeaderCardProps extends HTMLAttributes<HTMLElement> {}

export function PostHeaderCard(props: PostHeaderCardProps) {
  return (
    <Container {...props}>
      <header>
        <Link to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          Voltar
        </Link>

        <Link to="http://github.com/marciovz">
          Ver no github
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </Link>
      </header>

      <h2>JavaScript data types and data structures</h2>

      <footer>
        <div>
          <FontAwesomeIcon icon={faGithub} />
          <p>camerronwll</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faCalendarDay} />
          <p>Há 1 dia</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faUserGroup} />
          <p>32 seguidores</p>
        </div>
      </footer>
    </Container>
  )
}
