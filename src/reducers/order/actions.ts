import { ICoffee } from '../../@types/coffee'

export enum ActionTypes {
  INCREMENT_PRODUCT = 'INCREMENT_PRODUCT'
}

export function addNewProductAction(product: ICoffee) {
  return {
    type: ActionTypes.INCREMENT_PRODUCT,
    payload: {
      product,
    },
  }
}
