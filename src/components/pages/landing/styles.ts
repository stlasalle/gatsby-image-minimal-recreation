import styled from 'styled-components'

export const Grid = styled.div`
  height: 100%;

  display: grid;
  grid-template-rows: 1fr 100px 1fr;
`

export const LogoContainer = styled.div`
  grid-row: 2;

  display: flex;
  justify-content: center;
`
