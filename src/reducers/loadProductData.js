import {LOAD_PRODUCT_DATA} from 'constants/actionTypes'

export function loadProductData (state = [], action) {
  switch(action.type) {
    case LOAD_PRODUCT_DATA:
      return [...state, action.payload]
    default:
      return state
  }
}
