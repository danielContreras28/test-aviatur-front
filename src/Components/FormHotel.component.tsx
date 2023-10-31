/* eslint-disable react-hooks/exhaustive-deps */
// create  component form hotel
import React, { ReactElement, useContext, useEffect, useState } from 'react'
import { ContainerInputCheck, Icon, Input, InputCheck } from '../Styles/filter.styles'
import { ButtonClose, ButtonDelete, ButtonFile, ButtonSave, ContainerAmenities, ContainerButton, ContainerButtonClose, ContainerForm, ContainerInputFile, ContainerTop, IconClose, InputFile, LabelFrom } from '../Styles/form.styles'
import { EIconAmenities, IHotelsContext, IHotelsRequest } from '../Interfaces/hotels.interfaces'
import { HotelsContext } from '../Contexts/hotels.context'
import { useAnimate } from 'react-simple-animate'
import HotelService from '../services/hotel.services'
import { uploadImage } from '../firebase/config'

const FormHotel: React.FC = (): ReactElement => {
  const hotelService = new HotelService()

  const { viewForm, setViewForm, selectedHotel, setSelectedHotel, setRefrechHotels } = useContext(
    HotelsContext
  ) as IHotelsContext
  const { play, style } = useAnimate({
    start: { width: 0, padding: 0 },
    end: { width: window.innerWidth > 768 ? '50%' : 'calc(100% - 40px)', padding: '20px' }
  })
  const [Name, setName] = useState<string>('')
  const [Price, setPrice] = useState<number>(0)
  const [Stars, setStars] = useState<number>(1)
  const [UrlFile, setUrlFile] = useState<any>()
  const [amenities, setAmenities] = useState<Array<keyof typeof EIconAmenities>>([])
  const [selectedOption, setSelectedOption] = useState<Array<keyof typeof EIconAmenities>>([])

  // handler parse image of hotel
  const parseImage = (imageFromRequest: any): string => {
    if (!isString(imageFromRequest)) {
      throw new Error('Image must be a string')
    }
    return imageFromRequest
  }
  // handler validate object is string
  const isString = (object: any): boolean => {
    return typeof object === 'string'
  }
  // handler load selected hotel
  const handleLoadSelectedHotel = (): void => {
    if (selectedHotel !== null) {
      hotelService.getHotelById(selectedHotel).then((res) => {
        if (res.data !== undefined) {
          setName(res.data.name)
          setPrice(res.data.price)
          setStars(res.data.stars)
          setUrlFile(res.data.image)
          setSelectedOption(res.data.amenities)
        }
      }).catch((error) => {
        console.log(error)
      })
    }
  }

  // handle post or put hotels
  const handleSubmit = (): void => {
    if (Name !== '' && Price > 0 && Stars > 0 && UrlFile !== undefined) {
      if (isString(UrlFile)) {
        handleSaveInfo(UrlFile)
      } else {
        uploadImage(UrlFile[0]).then((res) => handleSaveInfo(res)).catch((error) => {
          console.log(error)
        })
      }
    }
  }
  // handle save info
  const handleSaveInfo = (res: any): void => {
    const hotel: IHotelsRequest = {
      name: Name,
      price: Price,
      stars: Stars,
      image: parseImage(res),
      amenities: selectedOption
    }
    if (selectedHotel !== null) {
      hotelService
        .updateHotel(hotel, selectedHotel)
        .then(() => {
          handleClose()
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      hotelService
        .createHotel(hotel)
        .then(() => {
          handleClose()
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
  // handle delete hotels
  const handleDelete = (): void => {
    if (selectedHotel !== null) {
      hotelService
        .deleteHotel(selectedHotel)
        .then(() => {
          handleClose()
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
  // handle load all amenities
  const handleLoadAmenities = (): void => {
    hotelService
      .getAllAmenities()
      .then((res) => {
        console.log(res)
        setAmenities(res.data.amenities)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  // is valid amenities
  const isValidAmenities = (amenity: any): boolean => Object.values(EIconAmenities).includes(amenity)
  // handle validate parse amenity
  const parseAmenity = (amenity: any): EIconAmenities => {
    if (!isValidAmenities(amenity)) {
      throw new Error(' is not a valid amenity')
    }
    return amenity
  }
  // handle select amenity
  const handleSelectAmenity = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const amenitie: keyof typeof EIconAmenities = parseAmenity(e.target.value)
    if (e.target.checked) {
      if (selectedOption?.find((item: keyof typeof EIconAmenities) => item === amenitie) === undefined && selectedOption !== null && selectedOption !== undefined) {
        setSelectedOption([...selectedOption, amenitie])
      } else {
        setSelectedOption([amenitie])
      }
    } else {
      setSelectedOption(selectedOption?.filter((item: keyof typeof EIconAmenities) => item !== amenitie))
    }
  }

  // handle change price hotel to number min 1
  const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let price = Number(e.target.value)
    price = Math.max(price, 1)
    setPrice(price)
  }
  // handle change stars hotel to number min 1 max 5
  const handleChangeStars = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let stars = Number(e.target.value)
    stars = Math.max(stars, 1)
    stars = Math.min(stars, 5)
    setStars(stars)
  }

  // handle close form
  const handleClose = (): void => {
    setViewForm(false)
    setSelectedHotel(null)
    setName('')
    setPrice(0)
    setStars(1)
    setUrlFile(undefined)
    setRefrechHotels(true)
  }

  // effect to play animation
  useEffect(() => {
    handleLoadAmenities()
    play(viewForm)
  }, [viewForm])

  // effect to load selected hotel
  useEffect(() => {
    handleLoadSelectedHotel()
  }, [selectedHotel])

  return (
    <ContainerForm style={style}>
      <ContainerTop>
        <ContainerButtonClose>
          <ButtonClose onClick={handleClose}>
            <IconClose className='icon-close' />
          </ButtonClose>
        </ContainerButtonClose>
        <h2>{`Formulario de ${
        selectedHotel !== null ? 'Edicion' : 'Creacion'
      } de Hotel`}
        </h2>
        <LabelFrom>Nombre del Hotel</LabelFrom>
        <Input placeholder='Name' value={Name} onChange={(e) => setName(e.target.value)} />
        <LabelFrom>Precio de la Habitacion por Noche</LabelFrom>
        <Input
          placeholder='Price'
          type='number'
          value={Price}
          onChange={handleChangePrice}
        />
        <LabelFrom>Numero de Estrellas</LabelFrom>
        <Input
          placeholder='Stars'
          type='number'
          value={Stars}
          onChange={handleChangeStars}
        />
        <LabelFrom>Comodidades</LabelFrom>
        <ContainerAmenities>
          {amenities?.map((amenitie, i) => (
            <ContainerInputCheck key={i}>
              <InputCheck value={amenitie} onChange={handleSelectAmenity} checked={selectedOption?.find((item) => item === amenitie) !== undefined} />
              <Icon className={`icon-${amenitie}`} />
            </ContainerInputCheck>
          ))}
        </ContainerAmenities>
        <LabelFrom>Foto del Hotel</LabelFrom>
        <ContainerInputFile>
          <InputFile onChange={(e) => setUrlFile(e.target.files)} />
          <ButtonFile><IconClose className='icon-upload' /> Cargar Foto</ButtonFile>
        </ContainerInputFile>
      </ContainerTop>
      <ContainerButton>
        {selectedHotel !== null && (
          <ButtonDelete onClick={handleDelete}>
            <IconClose className='icon-delete' /> Eliminar
          </ButtonDelete>
        )}
        <ButtonSave onClick={handleSubmit}>Guardar</ButtonSave>
      </ContainerButton>
    </ContainerForm>
  )
}

export default FormHotel
