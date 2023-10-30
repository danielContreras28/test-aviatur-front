/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { IHotelsResponse } from '../Interfaces/hotels.interfaces'

// variables process.env
const { REACT_APP_API_URL: API_URL } = process.env
// class service api data hotels
class HotelService {
  // method get all hotels
  async getAllHotels (): Promise<IHotelsResponse> {
    return await fetch(`${API_URL}/api/hotels`, {
      headers: {
        Accept: 'application/json'
      }
    })
      .then(async response => await response.json())
      .then(data => data)
  }
}

export default HotelService
