import { FC, ReactElement } from 'react'
import GlobalProvider from './Contexts/global.context'
import Hotels from './Pages/hotels.pages'

const App: FC = (): ReactElement => {
  return (
    <GlobalProvider>
      <Hotels />
    </GlobalProvider>
  )
}

export default App
