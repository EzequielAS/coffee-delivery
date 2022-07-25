import { MapPinLine } from 'phosphor-react'
import { Input } from '../../../../components/Input'

import { 
  FormContainer, 
  Header, 
  TitleWrapper,
  Title,
  Subtitle,
  InputsWrapper,
  MultiInput,
} from './styles'

export function DeliveryAddress() {
  return (
    <FormContainer>
      <Header>
        <MapPinLine size={22} />

        <TitleWrapper>
          <Title>Endereço de Entrega</Title>
          <Subtitle>Informe o endereço onde deseja receber seu pedido</Subtitle>
        </TitleWrapper>
      </Header>

      <InputsWrapper>
        <Input 
          placeholder="CEP"
          width="12.5rem"
        />

        <Input 
          placeholder="Rua"
          width="100%"
        />

        <MultiInput>
          <Input 
            placeholder="Número"
            width="12.5rem"
          />
           <Input 
            placeholder="Complemento"
            width="100%"
            optional
          />
        </MultiInput>

        <MultiInput>
          <Input 
            placeholder="Bairro"
            width="12.5rem"
          />
          <Input 
            placeholder="Cidade"
            width="100%"
          /> 
          <Input 
            placeholder="UF"
            width="3.75rem"
          />
        </MultiInput>
      </InputsWrapper>
    </FormContainer>
  )
}