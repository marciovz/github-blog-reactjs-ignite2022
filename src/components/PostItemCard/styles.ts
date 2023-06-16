import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  padding: 2rem;

  background-color: ${({ theme }) => theme['base-post']};
  border: 2px solid transparent;
  border-radius: 10px;
  transition: border 0.3s ease-in-out;

  &:hover {
    border-color: ${({ theme }) => theme['base-label']};
  }
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 4.5rem;
  gap: 1rem;

  > h2 {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme['base-title']};
    line-height: 2rem;
  }

  & > span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['base-span']};
    text-align: end;
  }
`

export const Content = styled.div`
  margin-top: 1.25rem;

  > p {
    color: ${({ theme }) => theme['base-text']};
    line-height: 1.6rem;
  }
`
