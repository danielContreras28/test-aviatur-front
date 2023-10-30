// create component item hotel
import { ReactElement } from 'react'
import { EIconAmenities, IHotels } from '../Interfaces/hotels.interfaces'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Icon, IconStar } from '../Styles/filter.styles'

const ItemHotel = ({ Hotel }: { Hotel: IHotels }): ReactElement => {
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

  return (
    <div>
      <LazyLoadImage src={Hotel.image} alt={Hotel.name} effect='blur' height='100%' />
      <div>
        <label>{Hotel.name}</label>
        {handleStar(Hotel.stars)}
        <>{Hotel.amenities.map((amenitie, i) => handleIconAmenities(amenitie, i))}</>
      </div>
      <div>
        <label>precio por noche por habitación</label>
        <label>$ {Hotel.price}</label>
        <button>Ver hotel</button>
      </div>
    </div>
  )
}

export default ItemHotel
