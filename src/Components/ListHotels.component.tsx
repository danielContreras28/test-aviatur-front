// create component ListHotels
import { ReactElement, useContext } from 'react'
import { IHotelsContext } from '../Interfaces/hotels.interfaces'
import { HotelsContext } from '../Contexts/hotels.context'
import ItemHotel from './ItemHotel.component'

const ListHotels = (): ReactElement => {
  const { Hotels } = useContext(HotelsContext) as IHotelsContext

  return (
    <div>
      {Hotels.map((hotel, i) => (
        <ItemHotel key={i} Hotel={hotel} />
      ))}
    </div>
  )
}

export default ListHotels
