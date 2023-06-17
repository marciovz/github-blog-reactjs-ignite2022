import styled from 'styled-components'

export const Container = styled.div`
  margin-top: -5.5rem;

  background-color: ${({ theme }) => theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`
export const ContentContainer = styled.div`
  padding: 2rem 2.5rem;

  display: flex;
  flex: 1;
  gap: 2rem;

  > img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  > div {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const NoContentContainer = styled.div`
  min-height: 13.25rem;

  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme['base-text']};
`
export const HeaderProfile = styled.header`
  display: flex;
  justify-content: space-between;

  > p {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme['base-title']};
    line-height: 2rem;
  }

  > a {
    font-size: 0.75rem;
    font-weight: 700;
    color: ${({ theme }) => theme.blue};
    line-height: 1.4rem;
    height: fit-content;
    text-transform: uppercase;
    border-bottom: 1px solid transparent;
    transition: all 0.3s;

    svg {
      margin-left: 0.5rem;
    }
  }

  > a:hover {
    border-bottom-color: ${({ theme }) => theme.blue};
  }
`
export const ContentProfile = styled.p`
  margin-top: 0.5rem;

  font-size: 1rem;
  color: ${({ theme }) => theme['base-text']};
  line-height: 1.625rem;
`

export const FooterProfile = styled.footer`
  display: flex;
  gap: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-size: 1rem;
    color: ${({ theme }) => theme['base-subtitle']};
    line-height: 26px;

    svg {
      width: 1.125rem;
      height: 1.125rem;
      color: ${({ theme }) => theme['base-label']};
    }
  }
`
