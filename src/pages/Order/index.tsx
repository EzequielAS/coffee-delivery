import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'
import delivery from '../../assets/delivery.svg'
import { CircleIcon } from '../../components/CircleIcon'

import { 
  OrderContainer, 
  TitleWrapper,
  Title,
  Subtitle,
  ContentWrapper,
  CardAddress,
  CardContent, 
  ImgStyled,
  InfoWrapper,
  TextWrapper,
  Text,
  BStyled 
} from './styles'

export function Order() {
  const colors = useTheme()

  return (
    <OrderContainer>
      <TitleWrapper>
        <Title>Uhu! Pedido confirmado</Title>
        <Subtitle>Agora é só aguardar que logo o café chegará até você</Subtitle>
      </TitleWrapper>

      <ContentWrapper>
        <CardAddress>
          <CardContent>
            <InfoWrapper>
              <CircleIcon 
                bgColor={colors.purple}
                icon={<MapPin weight='fill' size={16} />}
              />
              <TextWrapper>
                <Text>
                  Entrega em <BStyled>Rua João Daniel Martinelli, 102</BStyled><br />
                  Jabotiana - Aracaju, SE
                </Text>
              </TextWrapper>
            </InfoWrapper>
            
            <InfoWrapper>
              <CircleIcon 
                bgColor={colors.yellow}
                icon={<Timer weight='fill' size={16} />}
              />
              <TextWrapper>
                <Text>
                  Previsão de entrega<br />
                  <BStyled>20 min - 30 min</BStyled>
                </Text>
              </TextWrapper>
            </InfoWrapper>

            <InfoWrapper>
              <CircleIcon 
                bgColor={colors['yellow-dark']}
                icon={<CurrencyDollar weight='fill' size={16} />}
              />
              <TextWrapper>
                <Text>
                  Pagamento na entrega<br />
                  <BStyled>Cartão de Crédito</BStyled>
                </Text>
              </TextWrapper>
            </InfoWrapper>
          </CardContent>
        </CardAddress>

        <ImgStyled  src={delivery} alt="homem em cima de uma moto" />
      </ContentWrapper>
    </OrderContainer>
  )
}