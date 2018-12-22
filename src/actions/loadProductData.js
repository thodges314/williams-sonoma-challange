import {LOAD_PRODUCT_DATA} from 'constants/actionTypes'

export function loadProductData () {
let url = 'https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json'
console.log('LOADING DATA!!!')

return dispatch => {
  return fetch(url)
    .then(res => res.json())
    .then((productData) => {
      console.log(productData)
      dispatch({
        type: LOAD_PRODUCT_DATA,
        payload: productData
      })
    })
    .catch(err => { throw err });
  }
}
