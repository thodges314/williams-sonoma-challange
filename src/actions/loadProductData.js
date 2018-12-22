import {LOAD_PRODUCT_DATA} from 'constants/actionTypes'
import jsonData from 'resources/index.json'

export const loadProductData = () => dispatch => {
  console.log('ACTION!')
  console.log(jsonData)
  dispatch({
    type: LOAD_PRODUCT_DATA,
    payload: jsonData
  })
}
