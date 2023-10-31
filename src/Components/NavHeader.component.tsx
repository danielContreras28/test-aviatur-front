/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
// create NavHeader component
import { ReactElement, useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { ContainerNav } from '../Styles/navHeader.styles'
import logo from '../assets/logo-aviatur.svg'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { ButtonSave } from '../Styles/form.styles'
import { Icon } from '../Styles/filter.styles'

const NavHeader = (): ReactElement => {
  const [IsRealyforInstall, setIsRealyforInstall] = useState<boolean>(false)
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)

  // funtion for install app
  const installApp = async (): Promise<void> => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const result = await deferredPrompt.userChoice
      console.log('user choice', result)
      setDeferredPrompt(null)
      setIsRealyforInstall(false)
    }
  }

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setIsRealyforInstall(true)
    })
  }, [])

  return (
    <ContainerNav>
      <LazyLoadImage src={logo} alt='logo' effect='blur' height={30} />
      {IsRealyforInstall && (
        <ButtonSave onClick={installApp}>
          <Icon className='icon-file-download' />Instalar App
        </ButtonSave>)}
    </ContainerNav>
  )
}

export default NavHeader
