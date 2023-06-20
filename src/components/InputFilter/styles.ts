import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  background: ${({ theme }) => theme['base-input']};

  > input {
    width: 100%;
    padding: 0.75rem 1rem;

    font-size: 1rem;
    line-height: 1.6rem;
    color: ${({ theme }) => theme['base-text']};

    background-color: transparent;
    border: 1px solid ${({ theme }) => theme['base-border']};
    border-radius: 6px;

    &::placeholder {
      color: ${({ theme }) => theme['base-label']};
    }

    &:focus {
      border-color: ${({ theme }) => theme.blue};
    }
  }
`
