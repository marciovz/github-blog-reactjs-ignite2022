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
    line-height: 1.6rem;
  }

  & > span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['base-span']};
    text-align: end;
  }
`

export const Content = styled.div`
  margin-top: 1.25rem;

  h1,
  h2,
  h3,
  h4 {
    font-size: 1rem;
    color: ${({ theme }) => theme['base-subtitle']};
    margin: 0.8rem 0;
    line-height: 1.6rem;
  }

  > p {
    font-size: 1rem;
    color: ${({ theme }) => theme['base-text']};
    line-height: 1.625rem;
  }

  a {
    margin-top: 1.625rem;
    font-size: inherit;
    color: ${({ theme }) => theme.blue};
    line-height: 1.625rem;
  }

  img,
  ul,
  li,
  p:has(img),
  pre {
    display: none;
  }
`
