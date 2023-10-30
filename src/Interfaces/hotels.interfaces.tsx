import { ReactElement } from 'react'

// create interface hotels context
export interface IHotelsContext {
  Hotels: IHotels[]
  setHotels: React.Dispatch<React.SetStateAction<IHotels[]>>
}

//  create interface hotels
export interface IHotels {
  id: string
  name: string
  stars: number
  price: number
  image: string
  amenities: Array<keyof typeof EIconAmenities>
}

// create enum icon amenities
export enum EIconAmenities {
  'safety-box' = 'safety-box', //* icon-safety-box
  nightclub = 'nightclub', //* icon-nightclub
  'deep-soaking-bathtub' = 'deep-soaking-bathtub', //* icon-deep-soaking-bathtub
  beach = 'beach', //* icon-beach
  'business-center' = 'business-center', //* icon-business-center
  bathtub = 'bathtub', //* icon-bathtub
  newspaper = 'newspaper', //* icon-newspaper
  restaurant = 'restaurant', //* icon-restaurant
  'fitness-center' = 'fitness-center', //* icon-fitness-center
  garden = 'garden', //* icon-garden
  'coffe-maker' = 'coffe-maker', //* icon-coffe-maker
  bathrobes = 'bathrobes', //* icon-bathrobes
  'beach-pool-facilities' = 'beach-pool-facilities', //* icon-beach-pool-facilities
  'children-club' = 'children-club', //* icon-children-club
  'kitchen-facilities' = 'kitchen-facilities', //* icon-kitchen-facilities
  'separate-bredroom' = 'separate-bredroom', //* icon-separate-bredroom
  'sheets' = 'sheets', //* icon-sheets
}
// create interface response hotels api
export interface IHotelsResponse {
  data: IHotels[]
  message: string
}
