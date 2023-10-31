// create interface hotels context
export interface IHotelsContext {
  Hotels: IHotels[]
  setHotels: React.Dispatch<React.SetStateAction<IHotels[]>>
  selectedStar: number[] | null | undefined
  setSelectedStar: React.Dispatch<React.SetStateAction<number[] | null | undefined>>
  nameHotelFilter: string | undefined
  setNameHotelFilter: React.Dispatch<React.SetStateAction<string | undefined>>
  numderHotels: number
  setNumderHotels: React.Dispatch<React.SetStateAction<number>>
  viewForm: boolean
  setViewForm: React.Dispatch<React.SetStateAction<boolean>>
  selectedHotel: string | null
  setSelectedHotel: React.Dispatch<React.SetStateAction<string | null>>
  refrechHotels: boolean
  setRefrechHotels: React.Dispatch<React.SetStateAction<boolean>>
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

// create interface request hotels
export type IHotelsRequest = Omit<IHotels, 'id'>

export type IAmenities = Pick<IHotels, 'amenities'>

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
// create interface response hotels api
export interface IHotelsResponseDetail {
  data?: IHotels
  message: string
}

// create interface response amenities api
export interface IAmenitiesResponse {
  data: IAmenities
  message: string
}
