// create component Filter
import { ReactElement } from 'react'
import {
  ContainerFilter,
  ContainerInputCheck,
  ContainerItemBig,
  ContainerItemFilter,
  ContainerItemStar,
  ContainerItemStarEnd,
  FromContainerFilter,
  Icon,
  IconCheck,
  IconStar,
  Input,
  InputCheck,
  LabelFromToFilter,
  TitleFilter
} from '../Styles/filter.styles'

const Filters = (): ReactElement => {
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
            <InputCheck value={i + 1} />
            {item.map((_, j) => (
              <IconStar key={j} className='icon-star' />
            ))}
          </ContainerInputCheck>
        ))}
      </>
    )
  }

  return (
    <ContainerFilter>
      <div>
        <TitleFilter>Filtros</TitleFilter>
        <FromContainerFilter>
          <ContainerItemFilter>
            <Icon className='icon-search' />
            <LabelFromToFilter>Nombre del Hotel</LabelFromToFilter>
          </ContainerItemFilter>
          <ContainerItemBig>
            <Icon className='icon-hotel-black' /> <Input placeholder='Hotel' />
          </ContainerItemBig>
          <ContainerItemFilter>
            <Icon className='icon-star' />
            <LabelFromToFilter>Estrellas</LabelFromToFilter>
          </ContainerItemFilter>
          <ContainerItemStar>
            <IconCheck className='icon-done-black' />
            <LabelFromToFilter>Todas las Estrellas</LabelFromToFilter>
          </ContainerItemStar>
          <ContainerItemStarEnd>{handleCheckStar()}</ContainerItemStarEnd>
        </FromContainerFilter>
      </div>
    </ContainerFilter>
  )
}

export default Filters
