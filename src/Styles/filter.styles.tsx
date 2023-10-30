import styled from 'styled-components'
import { templateConfig as config } from '../template.config'
// create component container filter
export const ContainerFilter = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    color: ${config.colors.textSecondary};
`
// create component title filter
export const TitleFilter = styled.h1`
    font-size: ${config.fonts.big};
    margin-top: 10px;
    padding: 0px 20px;
    width: calc(100% - 40px);
`
// create component from container filter
export const FromContainerFilter = styled.div`
    width: calc(100% - 40px);
    margin: 0px 20px;
    background-color: ${config.colors.white};
    box-shadow: 0px 1px 4px ${config.colors.textSecondary};
`
// create component container item from to filter
export const ContainerItemFilter = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid ${config.colors.textSecondary};
    padding: 10px 20px;
    align-items: center;
`
// create component container item big extending ContainerItemFilter
export const ContainerItemBig = styled(ContainerItemFilter)`
    min-height: 100px;
`
// create component container item star extending ContainerItemFilter
export const ContainerItemStar = styled(ContainerItemFilter)`
    border-bottom: none;
    padding-top: 40px;
`
// create component container item star end extending ContainerItemFilter
export const ContainerItemStarEnd = styled(ContainerItemFilter)`
    border-bottom: none;
    padding-bottom: 60px;
    flex-direction: column;
    align-items: flex-start;
`

// create component icon
export const Icon = styled.span`
    margin-right: 5px;
    color: ${config.colors.text};
    font-size: ${config.fonts.medium};
`
// create component iconCheck extending Icon
export const IconCheck = styled(Icon)`
    color: ${config.colors.secondary};
`
// create component iconStar extending Icon
export const IconStar = styled(Icon)`
    color: ${config.colors.warning};
`
// create component label from to filter
export const LabelFromToFilter = styled.label`
    color: ${config.colors.text};
`

// create component input
export const Input = styled.input`
    border-top-width: 0;
    border-right-width: 0;
    border-left-width: 0;
    border-bottom-width: 1px;
    border-color: ${config.colors.textSecondary};
    color: ${config.colors.text};
    border-style: solid;
    outline: none;
    width: 100%;

    [placeholder] {
        color: ${config.colors.textSecondary};
    }
`
// create component container inputCheck
export const ContainerInputCheck = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
// create component inputCheck
export const InputCheck = styled.input.attrs({
  type: 'checkbox'
})`
    border: 1px solid ${config.colors.text};
    border-radius: 0px;
    width: 20px;
    height: 20px;
`
