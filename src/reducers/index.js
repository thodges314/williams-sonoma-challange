import {combineReducers} from 'redux'

import loadProductData from './loadProductData'

const combinedReducer = combineReducers({
  loadProductData
})

export default combinedReducer(state, action)
