// create component item hotel
import { ReactElement, useContext, useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { ref, getDownloadURL } from 'firebase/storage'

import { storage } from '../firebase/config'
import { EIconAmenities, IHotels, IHotelsContext } from '../Interfaces/hotels.interfaces'
import { Icon, IconStar } from '../Styles/filter.styles'
import { ButtonEdit, ContainerButtonEdit, ContainerInfoHotel, ContainerInfoTwoHotels, ContainerItemHotel, ContainerStar, DeclarationPlacement, IconEdit, NameHotel, PriceHotel } from '../Styles/list.styles'
import { Button } from '../Styles/general.styles'
import { HotelsContext } from '../Contexts/hotels.context'

const ItemHotel = ({ Hotel }: { Hotel: IHotels }): ReactElement => {
  const { setSelectedHotel, setViewForm } = useContext(HotelsContext) as IHotelsContext
  const [UrlImg, setUrlImg] = useState<string>('')
  const handleStar = (numberStar: number): ReactElement => {
    // create an array of size n
    const arr = Array(numberStar).fill(null)
    return <>{arr.map((_, i) => <IconStar key={i} className='icon-star' />)}</>
  }

  const handleIconAmenities = (amenities: keyof typeof EIconAmenities, i: number): ReactElement => {
    if (amenities === 'safety-box') {
      return <Icon key={i} className='icon-safety-box' />
    } else if (amenities === 'nightclub') {
      return <Icon key={i} className='icon-nightclub' />
    } else if (amenities === 'deep-soaking-bathtub') {
      return <Icon key={i} className='icon-deep-soaking-bathtub' />
    } else if (amenities === 'beach') {
      return <Icon key={i} className='icon-beach' />
    } else if (amenities === 'business-center') {
      return <Icon key={i} className='icon-business-center' />
    } else if (amenities === 'bathtub') {
      return <Icon key={i} className='icon-bathtub' />
    } else if (amenities === 'newspaper') {
      return <Icon key={i} className='icon-newspaper' />
    } else if (amenities === 'restaurant') {
      return <Icon key={i} className='icon-restaurant' />
    } else if (amenities === 'fitness-center') {
      return <Icon key={i} className='icon-fitness-center' />
    } else if (amenities === 'garden') {
      return <Icon key={i} className='icon-garden' />
    } else if (amenities === 'coffe-maker') {
      return <Icon key={i} className='icon-coffe-maker' />
    } else if (amenities === 'bathrobes') {
      return <Icon key={i} className='icon-bathrobes' />
    } else if (amenities === 'beach-pool-facilities') {
      return <Icon key={i} className='icon-beach-pool-facilities' />
    } else if (amenities === 'children-club') {
      return <Icon key={i} className='icon-children-club' />
    } else if (amenities === 'kitchen-facilities') {
      return <Icon key={i} className='icon-kitchen-facilities' />
    } else if (amenities === 'separate-bredroom') {
      return <Icon key={i} className='icon-separate-bredroom' />
    } else if (amenities === 'sheets') {
      return <Icon key={i} className='icon-sheets' />
    } else {
      return <label>{amenities}</label>
    }
  }

  // handle get form edit hotel
  const editHotel = (): void => {
    setSelectedHotel(Hotel.id)
    setViewForm(true)
  }

  useEffect(() => {
    getDownloadURL(ref(storage, `hotels/${Hotel.image}`))
      .then((url) => {
        setUrlImg(url)
      }).catch((error) => {
        console.log(error)
      })
  }, [Hotel])

  return (
    <ContainerItemHotel>
      <LazyLoadImage src={UrlImg} alt={Hotel.name} effect='blur' width='100%' />
      <ContainerInfoHotel>
        <NameHotel>{Hotel.name}</NameHotel>
        <ContainerStar>
          {handleStar(Hotel.stars)}
        </ContainerStar>
        <div>{Hotel.amenities.map((amenitie, i) => handleIconAmenities(amenitie, i))}</div>
      </ContainerInfoHotel>
      <ContainerInfoTwoHotels>
        <ContainerButtonEdit>
          <ButtonEdit onClick={editHotel}><IconEdit className='icon-pencil' /></ButtonEdit>
        </ContainerButtonEdit>
        <DeclarationPlacement>precio por noche por habitación</DeclarationPlacement>
        <PriceHotel>$ {Hotel.price}</PriceHotel>
        <Button onClick={editHotel}>VER HOTEL</Button>
      </ContainerInfoTwoHotels>
    </ContainerItemHotel>
  )
}

export default ItemHotel
