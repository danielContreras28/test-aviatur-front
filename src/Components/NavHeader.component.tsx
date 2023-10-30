// create NavHeader component
import { ReactElement } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { ContainerNav } from '../Styles/navHeader.styles'
import logo from '../assets/logo-aviatur.svg'
import 'react-lazy-load-image-component/src/effects/blur.css'

const NavHeader = (): ReactElement => {
  return (
    <ContainerNav>
      <LazyLoadImage src={logo} alt='logo' effect='blur' height={30} />
    </ContainerNav>
  )
}

export default NavHeader
