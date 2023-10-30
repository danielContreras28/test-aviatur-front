import styled from 'styled-components'
import { templateConfig as config } from '../template.config'

// create comoponent container app
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${config.colors.background};
`
// create comoponent container bodyPage
export const ContainerBodyPage = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  display: grid;
  grid-template-columns: 1fr 4fr;
`
