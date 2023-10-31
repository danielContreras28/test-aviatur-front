// create context hotels
import { ReactElement, ReactNode, createContext, useState } from 'react'
import { IHotels, IHotelsContext } from '../Interfaces/hotels.interfaces'

const HotelsContext = createContext<IHotelsContext | undefined>(undefined)
const { Provider } = HotelsContext

const HotelsProvider = ({ children }: { children: ReactNode }): ReactElement => {
  // Implement your context provider logic here
  const [Hotels, setHotels] = useState<IHotels[]>([])
  const [selectedStar, setSelectedStar] = useState<number[] | null | undefined>(null)
  const [nameHotelFilter, setNameHotelFilter] = useState<string | undefined>()
  const [numderHotels, setNumderHotels] = useState<number>(0)
  const [viewForm, setViewForm] = useState<boolean>(false)
  const [selectedHotel, setSelectedHotel] = useState<string | null>(null)
  const [refrechHotels, setRefrechHotels] = useState<boolean>(true)

  return (
    <Provider value={{
      Hotels,
      setHotels,
      selectedStar,
      setSelectedStar,
      nameHotelFilter,
      setNameHotelFilter,
      numderHotels,
      setNumderHotels,
      viewForm,
      setViewForm,
      selectedHotel,
      setSelectedHotel,
      refrechHotels,
      setRefrechHotels
    }}
    >
      {children}
    </Provider>
  )
}

export { HotelsContext, HotelsProvider }
