import styled from 'styled-components'
import { templateConfig as config } from '../template.config'
import { Icon } from './filter.styles'

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

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
// create comoponent button
export const Button = styled.button`
  padding: 10px 20px;
  background-color: ${config.colors.primary};
  color: ${config.colors.white};
  border: none;
  border-radius: 0px;
  font-size: ${config.fonts.regular};
  cursor: pointer;

  &:hover {
    background-color: ${config.colors.secondary};
  }
`
// create comoponent button add extending Button
export const ButtonAdd = styled(Button)`
  background-color: ${config.colors.white};
  color: ${config.colors.primary};
  border: 1px solid ${config.colors.primary};
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px;
  border-radius: 50%;

  &:hover {
    background-color: ${config.colors.primary};
    color: ${config.colors.white};

    span {
      color: ${config.colors.white};
    }
  }
`
// create comoponent icon add extending Icon
export const IconAdd = styled(Icon)`
  color: ${config.colors.primary};
  font-size: ${config.fonts.big};
  margin-right: 0px;
`
