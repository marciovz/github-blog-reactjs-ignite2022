import { HTMLAttributes, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faUserGroup,
  faCalendarDay,
  faChevronLeft,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'

import LoadingSpinner from '../LoadingSpinner'
import { distanceInTimeToNow } from '../../utils/distanceInTime'
import { captalise } from '../../utils/capitalise'

import { Container } from './styles'

interface ProfileData {
  name: string
  bio: string
  login: string
  avatarUrl: string
  github: string
  company: string | null
  followers: number
}

interface PostHeaderCardProps extends HTMLAttributes<HTMLElement> {
  profile: ProfileData | null
  title?: string
  publicationDate?: string
  isLoading: boolean
}

export function PostHeaderCard({
  profile,
  title,
  publicationDate,
  isLoading,
  ...rest
}: PostHeaderCardProps) {
  const publicationTime = useMemo(() => {
    if (publicationDate) return captalise(distanceInTimeToNow(publicationDate))
    return null
  }, [publicationDate])

  return (
    <Container {...rest}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <header>
            <Link to="/">
              <FontAwesomeIcon icon={faChevronLeft} />
              Voltar
            </Link>

            {profile?.github && (
              <Link to={profile.github}>
                Ver no github
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Link>
            )}
          </header>

          {title && <h2>{title}</h2>}

          <footer>
            {profile?.login && (
              <div>
                <FontAwesomeIcon icon={faGithub} />
                <p>{profile.login}</p>
              </div>
            )}

            {publicationTime && (
              <div>
                <FontAwesomeIcon icon={faCalendarDay} />
                <p>{publicationTime}</p>
              </div>
            )}

            {profile?.followers && (
              <div>
                <FontAwesomeIcon icon={faUserGroup} />
                <p>
                  {profile.followers}
                  {profile.followers === 1 ? ' seguidor' : ' seguidores'}
                </p>
              </div>
            )}
          </footer>
        </>
      )}
    </Container>
  )
}
