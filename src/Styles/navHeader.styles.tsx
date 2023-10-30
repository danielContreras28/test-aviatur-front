import styled from 'styled-components'
import { templateConfig as config } from '../template.config'

// create comoponent container navHeader
export const ContainerNav = styled.div`
    width: calc(100% - 40px);
    height: 50px;
    background-color: ${config.colors.primary};
    padding: 10px 20px;
    display: flex;
    align-items: center;
`
