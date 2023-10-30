// create porvider global app
import { ReactElement, ReactNode } from 'react'
import { HotelsProvider } from './hotels.context'

const GlobalProvider = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <HotelsProvider>
      {children}
    </HotelsProvider>
  )
}

export default GlobalProvider
