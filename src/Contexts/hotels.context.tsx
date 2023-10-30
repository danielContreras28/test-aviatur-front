// create context hotels
import { ReactElement, ReactNode, createContext, useState } from 'react'
import { IHotels, IHotelsContext } from '../Interfaces/hotels.interfaces'

const HotelsContext = createContext<IHotelsContext | undefined>(undefined)
const { Provider } = HotelsContext

const HotelsProvider = ({ children }: { children: ReactNode }): ReactElement => {
  // Implement your context provider logic here
  const [Hotels, setHotels] = useState<IHotels[]>([])

  return (
    <Provider value={{
      Hotels,
      setHotels
    }}
    >
      {children}
    </Provider>
  )
}

export { HotelsContext, HotelsProvider }
