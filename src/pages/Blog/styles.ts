import styled from 'styled-components'

export const Container = styled.div`
  width: 864px;
  margin: 0 auto 14rem;
`
export const Info = styled.div`
  margin-top: 4.5rem;

  display: flex;
  justify-content: space-between;

  > p {
    font-size: 1.125rem;
    font-weight: 700;
    color: ${({ theme }) => theme['base-subtitle']};
    line-height: 1.81rem;
  }

  > span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['base-span']};
    line-height: 1.375rem;
  }
`
export const PostListContainer = styled.div`
  margin-top: 3rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`
