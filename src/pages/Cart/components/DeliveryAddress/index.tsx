import { MapPinLine } from '@phosphor-icons/react'
import { useFormContext } from 'react-hook-form'
import { OrderFormData } from '../..'
import { Input } from '../../../../components/Input'

export function DeliveryAddress() {
  const { register, setFocus ,formState } = useFormContext<OrderFormData>()

  return (
    <div className="mt-[0.9rem] rounded-md bg-base-card p-10">
      <div className="mb-8 flex items-start gap-2 [&_svg]:text-yellow-dark">
        <MapPinLine size={22} />

        <div>
          <p className="font-normal leading-[1.3rem] text-base-subtitle">Endereço de Entrega</p>
          <p className="text-sm font-normal leading-[1.14rem] text-base-text">Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 max-[590px]:[&>div]:w-full">
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

        <div className="flex items-center gap-3 max-[590px]:flex-col max-[590px]:[&>div]:w-full">
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
        </div>

        <div className="flex items-center gap-3 max-[590px]:flex-col max-[590px]:[&>div]:w-full">
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
        </div>
      </div>
    </div>
  )
}
