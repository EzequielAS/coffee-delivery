import { Banner } from './components/Banner'
import { CoffeeCard } from './components/CoffeeCard'
import { coffeesDatas } from '../../coffeesDatas'

import { 
  ContainerCoffes, 
  H3Styled, 
  Coffees 
} from './styles'

export function Home() {
  return (
    <>
      <Banner />

      <ContainerCoffes>
        <H3Styled>Nossos cafés</H3Styled>

        <Coffees>
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
        </Coffees>
      </ContainerCoffes>
    </>
  )
}