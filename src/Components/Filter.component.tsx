/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
// create component Filter
import { ReactElement, useContext, useEffect, useState } from 'react'
import { useAnimate } from 'react-simple-animate'
import {
  ContainerFilter,
  ContainerFilterDetails,
  ContainerInputCheck,
  ContainerItemBig,
  ContainerItemFilter,
  ContainerItemStar,
  ContainerItemStarEnd,
  FromContainerFilter,
  Icon,
  IconCheck,
  IconCloseMin,
  IconStar,
  Input,
  InputCheck,
  LabelFromToFilter,
  TitleFilter
} from '../Styles/filter.styles'
import { HotelsContext } from '../Contexts/hotels.context'
import { IHotelsContext } from '../Interfaces/hotels.interfaces'

const Filters = (): ReactElement => {
  const {
    selectedStar,
    setSelectedStar,
    nameHotelFilter,
    setNameHotelFilter,
    numderHotels
  } = useContext(HotelsContext) as IHotelsContext
  const [viewFilterDetails, setViewFilterDetails] = useState<boolean>(false)
  // animate filter details movile
  const { play, style } = useAnimate({
    start: {
      height: window.innerWidth > 768 ? 'auto' : 0,
      padding: window.innerWidth > 768 ? '20px' : 0,
      overflow: window.innerWidth > 768 ? 'auto' : 'hidden'
    },
    end: { height: 'auto', padding: window.innerWidth > 768 ? '20px' : '0px', overflow: 'auto' }
  })
  // handle select star
  const handleSelectStar = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.checked) {
      const star = Number(e.target.value)
      if (
        selectedStar?.find((item) => item === star) === undefined &&
        selectedStar !== null &&
        selectedStar !== undefined
      ) {
        setSelectedStar([...selectedStar, star])
      } else {
        setSelectedStar([star])
      }
    } else {
      setSelectedStar(
        selectedStar?.filter((item) => item !== Number(e.target.value))
      )
    }
  }
  // handle check all star
  const handleCheckAllStar = (): void => {
    if (
      selectedStar !== null &&
      selectedStar !== undefined &&
      selectedStar.length > 0
    ) {
      setSelectedStar([])
    } else {
      setSelectedStar([1, 2, 3, 4, 5])
    }
  }
  const handleCheckStar = (): ReactElement => {
    const star = []
    for (let i = 1; i < 6; i++) {
      const numberStar = []
      for (let j = 0; j < i; j++) {
        numberStar.push(i)
      }
      star.push(numberStar)
    }
    return (
      <>
        {star.map((item, i) => (
          <ContainerInputCheck key={i}>
            <InputCheck
              value={i + 1}
              onChange={handleSelectStar}
              checked={
                selectedStar?.find((item) => item === i + 1) !== undefined
              }
            />
            {item.map((_, j) => (
              <IconStar key={j} className='icon-star' />
            ))}
          </ContainerInputCheck>
        ))}
      </>
    )
  }
  // effect view filter details
  useEffect(() => {
    play(viewFilterDetails)
  }, [viewFilterDetails])

  return (
    <ContainerFilter>
      <ContainerFilterDetails>
        <TitleFilter onClick={() => setViewFilterDetails(!viewFilterDetails)}>
          {window.innerWidth > 768 ? '' : <Icon className='icon-filter-list' />}
          Filtros
        </TitleFilter>
        <FromContainerFilter style={style}>
          <ContainerItemFilter>
            <Icon className='icon-search' />
            <LabelFromToFilter>Nombre del Hotel</LabelFromToFilter>
          </ContainerItemFilter>
          <ContainerItemBig>
            <Icon className='icon-hotel-black' />
            <Input
              placeholder='Hotel'
              type='text'
              value={nameHotelFilter}
              onChange={(e) => setNameHotelFilter(e.target.value)}
            />
            <IconCloseMin
              className='icon-close'
              onClick={() => setNameHotelFilter('')}
            />
          </ContainerItemBig>
          <ContainerItemFilter>
            <Icon className='icon-star' />
            <LabelFromToFilter>Estrellas</LabelFromToFilter>
          </ContainerItemFilter>
          <ContainerItemStar>
            <IconCheck
              className='icon-done-black'
              onClick={handleCheckAllStar}
            />
            <LabelFromToFilter>Todas las Estrellas</LabelFromToFilter>
          </ContainerItemStar>
          <ContainerItemStarEnd>{handleCheckStar()}</ContainerItemStarEnd>
          <ContainerItemFilter>
            <LabelFromToFilter>{`# de resultados: ${numderHotels}`}</LabelFromToFilter>
          </ContainerItemFilter>
        </FromContainerFilter>
      </ContainerFilterDetails>
    </ContainerFilter>
  )
}

export default Filters
