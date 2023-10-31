import styled from 'styled-components'
import { templateConfig as config } from '../template.config'
import { ContainerInputCheck, Icon, LabelFromToFilter } from './filter.styles'
import { Button } from './general.styles'

export const ContainerForm = styled.div`
    width: 50vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${config.colors.white};
    padding: 20px;
    border-left: 1px solid ${config.colors.primary};
    position: fixed;
    top: 0;
    right: 0;
    z-index: 90;
    overflow: auto;
`
// create component container from top
export const ContainerTop = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
// create component icon close extending Icon
export const IconClose = styled(Icon)`
    color: ${config.colors.primary};
    cursor: pointer;
    font-size: ${config.fonts.medium};
    margin-right: 0px;
`
// create component label from extending LabelFromToFilter
export const LabelFrom = styled(LabelFromToFilter)`
    margin-bottom: 20px;
    margin-top: 20px;
`
//  create component container amenities extending ContainerInputCheck
export const ContainerAmenities = styled(ContainerInputCheck)`
    flex-direction: row;
    flex-wrap: wrap;
`
// create component container input file
export const ContainerInputFile = styled.div`
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
`
// create component input file
export const InputFile = styled.input.attrs({
  type: 'file'
})`
    opacity: 0;
    position: absolute;
    z-index: 1;
    width: 200px;
    height: 40px;
    cursor: pointer;
`
// create component button
export const ButtonFile = styled.button`
    width: 200px;
    height: 40px;
    font-size: ${config.fonts.medium};
    background-color: ${config.colors.primary};
    color: ${config.colors.white};
    margin-bottom: 20px;
    border-radius: 0px;
    border: none;
    padding: 10px 20px;
`
// create component container button
export const ContainerButton = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    padding-bottom: 20px;
    margin-bottom: 20px;
`
// create component button save extending Button
export const ButtonSave = styled(Button)`
    background-color: ${config.colors.white};
    color: ${config.colors.primary};
    border: 1px solid ${config.colors.primary};

    &:hover {
        background-color: ${config.colors.primary};
        color: ${config.colors.white};
        border: 1px solid ${config.colors.white};

        span {
            color: ${config.colors.white};
        }
    }

    span {
        color: ${config.colors.primary};
    }
`
// create component button delete extending Button
export const ButtonDelete = styled(Button)`
    background-color: ${config.colors.white};
    color: ${config.colors.error};
    border: 1px solid ${config.colors.error};
    margin-right: 10px;

    span {
        color: ${config.colors.error};
    }

    &:hover {
        background-color: ${config.colors.error};
        color: ${config.colors.white};

        span {
            color: ${config.colors.white};
        }
    }
`
// create component container button close
export const ContainerButtonClose = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    position: relative;
`
// create component button close extending ButtonSave
export const ButtonClose = styled(ButtonSave)`
    border-radius: 50%;
    position: absolute;
    padding: 10px;
    width: 40px;
    height: 40px;
    right: 10px;

    &:hover {
        span {
            color: ${config.colors.white};
        }
    }

    @media (max-width: 480px) {
        top: -15px;
        right: -10px;
        width: 30px;
        height: 30px;
        padding: 5px;

        span {
            font-size: ${config.fonts.small};
        }
    }
`
