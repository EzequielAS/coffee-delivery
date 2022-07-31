import { ICoffee } from '../../@types/coffee'

export enum ActionTypes {
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  INCREMENT_PRODUCT = 'INCREMENT_PRODUCT',
  DECREMENT_PRODUCT = 'DECREMENT_PRODUCT'
}

export function addProductAction(product: ICoffee) {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: {
      product,
    },
  }
}

export function removeProductAction(id: number) {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: {
      id,
    },
  }
}

export function incrementProductAction(id: number) {
  return {
    type: ActionTypes.INCREMENT_PRODUCT,
    payload: {
      id,
    },
  }
}

export function decrementProductAction(id: number) {
  return {
    type: ActionTypes.DECREMENT_PRODUCT,
    payload: {
      id,
    },
  }
}
