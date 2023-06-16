import styled from 'styled-components'

export const Container = styled.div`
  padding: 2rem;

  background-color: ${({ theme }) => theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  & > header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > a {
      font-size: 0.75rem;
      font-weight: 700;
      color: ${({ theme }) => theme.blue};
      line-height: 1.2rem;
      height: fit-content;
      text-transform: uppercase;
      border-bottom: 1px solid transparent;
      transition: all 0.3s;
    }

    > a:first-child > svg {
      margin-right: 0.5rem;
    }

    > a:last-child > svg {
      margin-left: 0.5rem;
    }

    > a:hover {
      border-bottom-color: ${({ theme }) => theme.blue};
    }
  }

  & > h2 {
    margin-top: 1.25rem;

    font-size: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme['base-title']};
    line-height: 2rem;
  }

  & > footer {
    margin-top: 0.5rem;

    display: flex;
    gap: 1.5rem;

    > div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      font-size: 1rem;
      color: ${({ theme }) => theme['base-span']};
      line-height: 26px;

      svg {
        width: 1.125rem;
        height: 1.125rem;
        color: ${({ theme }) => theme['base-label']};
      }
    }
  }
`
