import { 
  Coffee, 
  Package, 
  ShoppingCart, 
  Timer 
} from 'phosphor-react'
import { useTheme } from 'styled-components'
import bannerBackground from '../../../../assets/banner-background.svg' 
import coffee from '../../../../assets/coffee.svg'
import { CircleIcon } from '../../../../components/CircleIcon'

import { 
  BannerContainer, 
  BannerContent,
  TextContainer,
  H1Styled,
  H2Styled,
  ServicesContainer,
  SpanStyled,
  Service,
  ImgStyled,
} from './styles'

const services = {
  buy: {
    label: 'Compra simples e segura',
    icon: <ShoppingCart weight='fill' />,
    color: 'yellow-dark'
  },
  packing: {
    label: 'Embalagem mantém o café intacto',
    icon: <Package weight='fill' />,
    color: 'base-text'
  },
  delivery: {
    label: 'Entrega rápida e rastreada',
    icon: <Timer weight='fill' />,
    color: 'yellow'
  },
  coffee: {
    label: 'O café chega fresquinho até você',
    icon: <Coffee weight='fill' />,
    color: 'purple'
  },
} as const

export function Banner() {
  const colors = useTheme()

  return (
    <BannerContainer background={bannerBackground}>
      <BannerContent>
        <TextContainer>
          <H1Styled>
            Encontre o café perfeito 
            para qualquer hora do dia
          </H1Styled>

          <H2Styled>
            Com o Coffee Delivery você recebe seu café onde estiver, a  
            qualquer hora
          </H2Styled>

          <ServicesContainer>
            {Object.entries(services).map(([key, datas]) => (
              <Service key={key}>
                <CircleIcon 
                  bgColor={colors[datas.color]}
                  icon={datas.icon}
                />
                <SpanStyled>{datas.label}</SpanStyled>
              </Service>
            ))}
          </ServicesContainer>
        </TextContainer>

        <ImgStyled src={coffee} />
      </BannerContent>
    </BannerContainer>
  )
}