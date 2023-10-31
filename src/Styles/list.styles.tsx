import styled from 'styled-components'
import { templateConfig as config } from '../template.config'
import { Button } from './general.styles'
import { Icon } from './filter.styles'
// create component container list hotels
export const ContainerListHotels = styled.div`
  min-height: 600px;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 20px;
`
// create component container item hotel
export const ContainerItemHotel = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding: 20px;
  background-color: ${config.colors.white};
  margin-bottom: 20px;
  box-shadow: 0px 1px 4px ${config.colors.textSecondary};

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
// create component container info hotel
export const ContainerInfoHotel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
// create component container info two hotels extending ContainerInfoHotel
export const ContainerInfoTwoHotels = styled(ContainerInfoHotel)`
  align-items: center;
  border-left: 1px solid ${config.colors.textSecondary};
  padding-left: 20px;

  @media (max-width: 480px) {
    border-left: none;
    border-top: 1px solid ${config.colors.textSecondary};
  }
`
// create component name hotel
export const NameHotel = styled.h2`
  font-size: ${config.fonts.big};
  color: ${config.colors.primary};
  margin-bottom: 20px;
  font-weight: bold;
  width: 100%;
`
// create component container star
export const ContainerStar = styled.div`
  margin-bottom: 10px;
`
// create component declaration placement extending NameHotel
export const DeclarationPlacement = styled(NameHotel)`
  font-size: ${config.fonts.small};
  color: ${config.colors.textSecondary};
  font-weight: normal;
  width: 80%;
  text-align: center;
`
// create component price hotel extending NameHotel
export const PriceHotel = styled(NameHotel)`
  color: ${config.colors.warning};
  font-size: ${config.fonts.superBig};
  font-weight: bold;

  @media (max-width: 480px) {
    text-align: center;
    margin-top: 0px;
  }
`

// create component container button edit
export const ContainerButtonEdit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: relative;
  width: 100%;
`
// create component button edit extending Button
export const ButtonEdit = styled(Button)`
  position: absolute;
  border-radius: 50%;
  padding: 5px;
  top: -30px;
  right: -30px;
  background-color: ${config.colors.warning};

  @media (max-width: 480px) {
    display: none;
  }
`
// create component icon edit extending Icon
export const IconEdit = styled(Icon)`
  color: ${config.colors.white};
  font-size: ${config.fonts.regular};
  margin-right: 0px;
`
