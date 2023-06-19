import styled from 'styled-components'

export const Container = styled.div`
  min-height: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
export const Content = styled.div`
  width: 30px;
  height: 30px;
  border: 5px solid #f3f3f3;
  border-top: 10px solid #383636;
  border-radius: 50%;
  animation: spinner 1s linear infinite;
`
