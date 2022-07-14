import traditional from './assets/coffees/traditional.png'
import american from './assets/coffees/american.png'
import cream from './assets/coffees/cream.png'
import cold from './assets/coffees/cold.png'
import milky from './assets/coffees/milky.png'
import latte from './assets/coffees/latte.png'
import capuccino from './assets/coffees/capuccino.png'
import macchiato from './assets/coffees/macchiato.png'
import mocaccino from './assets/coffees/mocaccino.png'
import chocohot from './assets/coffees/chocohot.png'
import cuban from './assets/coffees/cuban.png'
import hawaiian from './assets/coffees/hawaiian.png'
import arabic from './assets/coffees/arabic.png'
import irish from './assets/coffees/irish.png'

export const coffeesDatas = [
  {
    id: 1,
    image: traditional,
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 8.9,
    tags: [
      "TRADICIONAL"
    ]
  },
  {
    id: 2,
    image: american,
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 10.5,
    tags: [
      "TRADICIONAL"
    ]
  },
  {
    id: 3,
    image: cream,
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.9,
    tags: [
      "TRADICIONAL"
    ]
  },
  {
    id: 4,
    image: cold,
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 8.9,
    tags: [
      "TRADICIONAL",
      "GELADO"
    ]
  },
  {
    id: 5,
    image: milky,
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 11.8,
    tags: [
      "TRADICIONAL",
      "COM LEITE"
    ]
  },
  {
    id: 6,
    image: latte,
    name: "Latte",
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 13.8,
    tags: [
      "TRADICIONAL",
      "COM LEITE"
    ]
  },
  {
    id: 7,
    image: capuccino,
    name: "Capuccino",
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 12.8,
    tags: [
      "TRADICIONAL",
      "COM LEITE"
    ]
  },
  {
    id: 8,
    image: macchiato,
    name: "Macchiato",
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    price: 11.4,
    tags: [
      "TRADICIONAL",
      "COM LEITE"
    ]
  },
  {
    id: 9,
    image: mocaccino,
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 12.9,
    tags: [
      "TRADICIONAL",
      "COM LEITE"
    ]
  },
  {
    id: 10,
    image: chocohot,
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 15.9,
    tags: [
      "ESPECIAL",
      "COM LEITE"
    ]
  },
  {
    id: 11,
    image: cuban,
    name: "Cubano",
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 18.9,
    tags: [
      "ESPECIAL",
      "ALCÓOLICO",
      "GELADO"
    ]
  },
  {
    id: 12,
    image: hawaiian,
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 15.9,
    tags: [
      "ESPECIAL",
    ]
  },
  {
    id: 13,
    image: arabic,
    name: "Árabe",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 16.9,
    tags: [
      "ESPECIAL",
    ]
  },
  {
    id: 14,
    image: irish,
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 18.9,
    tags: [
      "ESPECIAL",
      "ALCÓOLICO",
    ]
  },
]