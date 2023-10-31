/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { IAmenitiesResponse, IHotelsRequest, IHotelsResponse, IHotelsResponseDetail } from '../Interfaces/hotels.interfaces'

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

  // method get all amenities
  async getAllAmenities (): Promise<IAmenitiesResponse> {
    return await fetch(`${API_URL}/api/hotels/amenities`, {
      headers: {
        Accept: 'application/json'
      }
    })
      .then(async response => await response.json())
      .then(data => data)
  }

  // method get hotel by id
  async getHotelById (hotelId: string): Promise<IHotelsResponseDetail> {
    return await fetch(`${API_URL}/api/hotels/${hotelId}`, {
      headers: {
        Accept: 'application/json'
      }
    })
      .then(async response => await response.json())
      .then(data => data)
  }

  // method create hotel
  async createHotel (hotelData: IHotelsRequest): Promise<IHotelsResponseDetail> {
    return await fetch(`${API_URL}/api/hotels`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(hotelData)
    })
      .then(async response => await response.json())
      .then(data => data)
  }

  // method update hotel
  async updateHotel (hotelData: IHotelsRequest, hotelId: string): Promise<IHotelsResponseDetail> {
    return await fetch(`${API_URL}/api/hotels/${hotelId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(hotelData)
    })
      .then(async response => await response.json())
      .then(data => data)
  }

  // method delete hotel
  async deleteHotel (hotelId: string): Promise<IHotelsResponseDetail> {
    return await fetch(`${API_URL}/api/hotels/${hotelId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then(async response => await response.json())
      .then(data => data)
  }
}

export default HotelService
