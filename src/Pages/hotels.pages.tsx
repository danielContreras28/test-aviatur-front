/* eslint-disable react-hooks/exhaustive-deps */
// create pages hotels
import { ReactElement, useContext, useEffect } from 'react'

import NavHeader from '../Components/NavHeader.component'
import { ButtonAdd, Container, ContainerBodyPage, IconAdd } from '../Styles/general.styles'
import Filters from '../Components/Filter.component'
import HotelService from '../services/hotel.services'
import { IHotelsContext, IHotelsResponse } from '../Interfaces/hotels.interfaces'
import { HotelsContext } from '../Contexts/hotels.context'
import ListHotels from '../Components/ListHotels.component'
import FormHotel from '../Components/FormHotel.component'

const Hotels = (): ReactElement => {
  const hotelService = new HotelService()
  const { setHotels, setViewForm, setSelectedHotel, refrechHotels, setRefrechHotels } = useContext(HotelsContext) as IHotelsContext
  // handle get all hotels from api
  const getAllHotels = (): void => {
    hotelService.getAllHotels().then((hotels: IHotelsResponse) => {
      console.log(hotels)
      setHotels(hotels.data)
    }).catch((error) => {
      console.log(error)
    })
  }
  // handle new hotel
  const handleNewHotel = (): void => {
    setViewForm(true)
    setSelectedHotel(null)
  }

  useEffect(() => {
    if (refrechHotels) {
      setRefrechHotels(false)
      getAllHotels()
    }
  }, [refrechHotels])

  return (
    <Container>
      <NavHeader />
      <ContainerBodyPage>
        <Filters />
        <ListHotels />
      </ContainerBodyPage>
      <ButtonAdd onClick={handleNewHotel}><IconAdd className='icon-plus' /></ButtonAdd>
      <FormHotel />
    </Container>
  )
}

export default Hotels
