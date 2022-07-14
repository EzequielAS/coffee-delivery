import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import bannerBackground from '../../../../assets/banner-background.svg' 
import coffee from '../../../../assets/coffee.svg'

import { 
  BannerContainer, 
  BannerContent,
  TextContainer,
  H1Styled,
  H2Styled,
  ServicesContainer,
  SpanStyled,
  Service,
  ServiceIcon,
  ImgStyled,
} from './styles'

const services = {
  buy: {
    label: 'Compra simples e segura',
    icon: <ShoppingCart weight='fill' />,
    type: 'buy'
  },
  packing: {
    label: 'Embalagem mantém o café intacto',
    icon: <Package weight='fill' />,
    type: 'packing'
  },
  delivery: {
    label: 'Entrega rápida e rastreada',
    icon: <Timer weight='fill' />,
    type: 'delivery'
  },
  coffee: {
    label: 'O café chega fresquinho até você',
    icon: <Coffee weight='fill' />,
    type: 'coffee'
  },
} as const

export function Banner() {
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
                <ServiceIcon backgroundColor={datas.type}>
                  {datas.icon}
                </ServiceIcon>
                
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