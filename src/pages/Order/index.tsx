import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import delivery from '../../assets/delivery.svg'
import { CircleIcon } from '../../components/CircleIcon'

export function Order() {
  return (
    <section className="mx-auto mt-20 w-[97%] max-w-[70rem]">
      <div>
        <p className="font-title text-[2rem] leading-[2.6rem] text-yellow-dark">Uhu! Pedido confirmado</p>
        <p className="mb-10 text-xl leading-[1.625rem] text-base-subtitle">Agora é só aguardar que logo o café chegará até você</p>
      </div>

      <div className="flex items-center justify-between max-[1040px]:flex-col max-[1040px]:gap-8">
        <div
          className="relative h-[17rem] w-[97%] max-w-[32.875rem] rounded-[6px_36px_6px_36px]"
          style={{ backgroundImage: 'linear-gradient(90deg, #C47F17, #8047F8)' }}
        >
          <div className="absolute right-1/2 top-1/2 h-[calc(100%-2px)] w-[calc(100%-2px)] -translate-y-1/2 translate-x-1/2 rounded-[6px_36px_6px_36px] bg-background p-10">
            <div className="flex items-center gap-3">
              <CircleIcon
                bgColor="#8047F8"
                icon={<MapPin weight='fill' size={16} />}
              />
              <div>
                <p className="leading-5 text-base-text">
                  Entrega em <b>Rua João Daniel Martinelli, 102</b><br />
                  Jabotiana - Aracaju, SE
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <CircleIcon
                bgColor="#DBAC2C"
                icon={<Timer weight='fill' size={16} />}
              />
              <div>
                <p className="leading-5 text-base-text">
                  Previsão de entrega<br />
                  <b>20 min - 30 min</b>
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <CircleIcon
                bgColor="#C47F17"
                icon={<CurrencyDollar weight='fill' size={16} />}
              />
              <div>
                <p className="leading-5 text-base-text">
                  Pagamento na entrega<br />
                  <b>Cartão de Crédito</b>
                </p>
              </div>
            </div>
          </div>
        </div>

        <img src={delivery} alt="homem em cima de uma moto" className="w-full max-w-[30.75rem]" />
      </div>
    </section>
  )
}
