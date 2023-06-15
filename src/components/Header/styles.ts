import styled from 'styled-components'

import BackgroundHeader from '../../assets/background-header.png'

export const Container = styled.div`
  width: 100%;
  height: 296px;

  display: flex;
  justify-content: center;

  background-image: url(${BackgroundHeader});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  > img {
    margin-top: 64px;
    width: 198px;
    height: 98px;
  }
`
