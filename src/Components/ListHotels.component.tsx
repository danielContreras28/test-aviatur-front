/* eslint-disable react-hooks/exhaustive-deps */
// create component ListHotels
import { ReactElement, useContext, useEffect } from 'react'
import { IHotels, IHotelsContext } from '../Interfaces/hotels.interfaces'
import { HotelsContext } from '../Contexts/hotels.context'
import ItemHotel from './ItemHotel.component'
import { ContainerListHotels } from '../Styles/list.styles'

const ListHotels = (): ReactElement => {
  const { Hotels, selectedStar, nameHotelFilter, setNumderHotels } = useContext(HotelsContext) as IHotelsContext

  // handle filter star hotels
  const handleSelectStar = (): IHotels[] => {
    const loadingHotels: IHotels[] = []
    if (selectedStar !== null && selectedStar !== undefined) {
      if (selectedStar.length > 0) {
        Hotels.forEach((hotel) => {
          if (selectedStar?.find((item) => item === hotel.stars) !== undefined) {
            loadingHotels.push(hotel)
          }
        })
        return loadingHotels
      }
      return Hotels
    }
    return Hotels
  }

  // handle for name hotel
  const handleNameHotel = (): IHotels[] => {
    const loadingHotels: IHotels[] = []
    if (nameHotelFilter !== undefined && nameHotelFilter !== '') {
      handleSelectStar().forEach((hotel) => {
        if (hotel.name.toLowerCase().includes(nameHotelFilter.toLowerCase())) {
          loadingHotels.push(hotel)
        }
      })
      return loadingHotels
    }
    return handleSelectStar()
  }

  useEffect(() => {
    setNumderHotels(handleNameHotel().length)
  }, [Hotels, selectedStar, nameHotelFilter])

  return (
    <ContainerListHotels>
      {handleNameHotel().map((hotel, i) => (
        <ItemHotel key={i} Hotel={hotel} />
      ))}
    </ContainerListHotels>
  )
}

export default ListHotels
