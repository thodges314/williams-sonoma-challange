import {LOAD_PRODUCT_DATA} from 'constants/actionTypes'

export default function productData (state = {}, action) {
  switch(action.type) {
    case LOAD_PRODUCT_DATA:
      console.log('REDUCER')
      console.log(action.payload)
      return {...action.payload}
    default:
      return state
  }
}
