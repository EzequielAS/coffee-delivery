import { Banner } from './components/Banner'
import { CoffeeCard } from './components/CoffeeCard'
import { coffeesDatas } from '../../coffeesDatas'

export function Home() {
  return (
    <>
      <Banner />

      <section className="mx-auto mt-8 w-[97%] max-w-[70rem]">
        <h3 className="font-title text-[2rem] font-extrabold leading-[2.625rem] text-base-subtitle max-[500px]:text-[1.7rem]">
          Nossos cafés
        </h3>

        <div className="my-[3.375rem] grid grid-cols-4 gap-8 max-[1140px]:grid-cols-3 max-[790px]:grid-cols-2 max-[490px]:grid-cols-1">
          {coffeesDatas.map(coffee => (
            <CoffeeCard
              key={coffee.id}
              id={coffee.id}
              image={coffee.image}
              name={coffee.name}
              description={coffee.description}
              price={coffee.price}
              tags={coffee.tags}
            />
          ))}
        </div>
      </section>
    </>
  )
}
