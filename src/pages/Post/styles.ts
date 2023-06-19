import styled from 'styled-components'

export const Container = styled.div`
  width: 864px;
  margin: 0 auto 14rem;
`

export const Content = styled.div`
  padding: 2.5rem 0;

  > h2 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme['base-title']};
    line-height: 2.5rem;
    margin: 1.5rem 0;
    text-transform: uppercase;
  }

  > h3 {
    font-size: 1.25rem;
    color: ${({ theme }) => theme['base-subtitle']};
    line-height: 2rem;
    margin: 1.25rem 0;
  }

  > h4 {
    font-size: 1.125rem;
    color: ${({ theme }) => theme['base-subtitle']};
    line-height: 1.5rem;
    margin: 1.125rem 0;
  }

  > p {
    font-size: 1rem;
    color: ${({ theme }) => theme['base-text']};
    line-height: 1.625rem;
    margin: 1rem 0;
  }

  > p:has(img) {
    text-align: center;
  }

  a {
    margin-top: 1.625rem;
    font-size: inherit;
    color: ${({ theme }) => theme.blue};
    line-height: 1.625rem;
  }

  img {
    max-width: 100%;
    margin: 1rem auto;
  }

  ul {
    font-size: 1rem;
    color: ${({ theme }) => theme['base-text']};
    line-height: 1.625rem;
    margin-left: 1rem;
  }

  li {
    margin: 1rem 0;
  }

  pre {
    margin: 1rem 0;
    padding: 1.5rem;
    font-size: 1rem;
    color: ${({ theme }) => theme['base-span']};
    background-color: ${({ theme }) => theme['base-label']};
    border-radius: 10px;
  }
`
