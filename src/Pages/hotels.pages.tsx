/* eslint-disable react-hooks/exhaustive-deps */
// create pages hotels
import { ReactElement, useContext, useEffect } from 'react'

import NavHeader from '../Components/NavHeader.component'
import { Container, ContainerBodyPage } from '../Styles/general.styles'
import Filters from '../Components/Filter.component'
import HotelService from '../services/hotel.services'
import { IHotelsContext, IHotelsResponse } from '../Interfaces/hotels.interfaces'
import { HotelsContext } from '../Contexts/hotels.context'
import ListHotels from '../Components/ListHotels.component'

const Hotels = (): ReactElement => {
  const hotelService = new HotelService()
  const { setHotels } = useContext(HotelsContext) as IHotelsContext
  // handle get all hotels from api
  const getAllHotels = (): void => {
    hotelService.getAllHotels().then((hotels: IHotelsResponse) => {
      console.log(hotels)
      setHotels(hotels.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    getAllHotels()
  }, [])

  return (
    <Container>
      <NavHeader />
      <ContainerBodyPage>
        <Filters />
        <ListHotels />
      </ContainerBodyPage>
    </Container>
  )
}

export default Hotels
