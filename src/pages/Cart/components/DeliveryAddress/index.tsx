import { MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { OrderFormData } from '../..'
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
  const { register, setFocus ,formState } = useFormContext<OrderFormData>()

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
          {...register('cep')}
          error={formState.errors.cep?.message}
        />

        <Input 
          placeholder="Rua"
          width="100%"
          {...register('street')}
        />

        <MultiInput>
          <Input 
            placeholder="Número"
            width="12.5rem"
            {...register('number')}
            error={formState.errors.number?.message}
          />
           <Input 
            placeholder="Complemento"
            width="100%"
            {...register('complement')}
            focus={() => setFocus('complement')}
            optional
          />
        </MultiInput>

        <MultiInput>
          <Input 
            placeholder="Bairro"
            width="12.5rem"
            {...register('neighborhood')}
            error={formState.errors.neighborhood?.message}
          />
          <Input 
            placeholder="Cidade"
            width="100%"
            max={2}
            {...register('city')}
            error={formState.errors.city?.message}
          /> 
          <Input 
            placeholder="UF"
            width="3.75rem"
            {...register('state')}
            error={formState.errors.state?.message}
          />
        </MultiInput>
      </InputsWrapper>
    </FormContainer>
  )
}