import { ICoffee } from '../../@types/coffee'
import { ActionTypes } from './actions'

interface Address {
  areaCode: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
}

export interface OrderDetails {
  address: Address;
  paymentMethod: 'credit' | 'debit' | 'money';
}

interface OrderState {
  products: ICoffee[];
  orderDetails: OrderDetails | null;
}

type actionType = {
  type: string;
  payload: any;
}

export function orderReducer(state: OrderState, action: actionType) {
  switch(action.type) {
    case ActionTypes.ADD_PRODUCT: {
      const productAlreadyChoosed = state.products.find(product => 
        product.id === action.payload.product.id
      ) 
      
      if (productAlreadyChoosed) {
        const newProducts = state.products.map(product => {
          if (product.id === productAlreadyChoosed.id) {
            const oldQuantity = product.quantity

            return {
              ...product,
              quantity: oldQuantity + action.payload.product.quantity
            }
          }

          return product
        })

        return {
          orderDetails: state.orderDetails,
          products: newProducts
        }
      }

      return {
        orderDetails: state.orderDetails,
        products: [...state.products, action.payload.product]
      }
    }

    case ActionTypes.REMOVE_PRODUCT: {
      const newProducts = state.products.filter(product => {
        return product.id !== action.payload.id
      })

      return {
        ...state,
        products: newProducts
      }
    }

    case ActionTypes.INCREMENT_PRODUCT: {
      const newProducts = state.products.map(product => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            quantity: product.quantity + 1
          }
        }

        return product
      })

      return {
        ...state,
        products: newProducts
      }
    }

    case ActionTypes.DECREMENT_PRODUCT: {
      const newProducts = state.products.map(product => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            quantity: product.quantity - 1
          }
        }

        return product
      })

      return {
        ...state,
        products: newProducts
      }
    }

    default:
      return state
  }
}