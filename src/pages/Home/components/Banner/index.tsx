import {
  Coffee,
  Package,
  ShoppingCart,
  Timer
} from '@phosphor-icons/react'
import bannerBackground from '../../../../assets/banner-background.svg'
import coffee from '../../../../assets/coffee.svg'
import { CircleIcon } from '../../../../components/CircleIcon'

const services = {
  buy: {
    label: 'Compra simples e segura',
    icon: <ShoppingCart weight='fill' />,
    color: '#C47F17'
  },
  packing: {
    label: 'Embalagem mantém o café intacto',
    icon: <Package weight='fill' />,
    color: '#574F4D'
  },
  delivery: {
    label: 'Entrega rápida e rastreada',
    icon: <Timer weight='fill' />,
    color: '#DBAC2C'
  },
  coffee: {
    label: 'O café chega fresquinho até você',
    icon: <Coffee weight='fill' />,
    color: '#8047F8'
  },
} as const

export function Banner() {
  return (
    <section
      className="flex h-[34rem] w-full items-center justify-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bannerBackground})` }}
    >
      <div className="mx-auto flex w-[97%] max-w-[70rem] items-center justify-between max-[1000px]:justify-center">
        <div>
          <h1 className="max-w-[34rem] font-title text-[2.875rem] font-extrabold leading-[3.875rem] text-base-title max-[500px]:text-center max-[500px]:text-[2.6rem]">
            Encontre o café perfeito
            para qualquer hora do dia
          </h1>

          <h2 className="mt-4 max-w-[34rem] text-[1.25rem] leading-[1.625rem] text-base-subtitle max-[500px]:text-center max-[500px]:text-[1.1rem]">
            Com o Coffee Delivery você recebe seu café onde estiver, a
            qualquer hora
          </h2>

          <div className="mt-[4.125rem] grid grid-cols-[max-content_max-content] gap-5 max-[500px]:mt-8 max-[500px]:flex max-[500px]:items-center max-[500px]:justify-center">
            {Object.entries(services).map(([key, datas]) => (
              <div key={key} className="flex items-center gap-3 text-base">
                <CircleIcon
                  bgColor={datas.color}
                  icon={datas.icon}
                />
                <span className="text-center max-[500px]:hidden">{datas.label}</span>
              </div>
            ))}
          </div>
        </div>

        <img src={coffee} className="h-[22.5rem] max-[1000px]:hidden" />
      </div>
    </section>
  )
}
