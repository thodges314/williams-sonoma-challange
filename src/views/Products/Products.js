import React, {Component} from 'react'

import {loadProductData} from 'services/loadProductData'

export default class Products extends Component {
  componentDidMount () {
    loadProductData()
  }
  render() {
    return (
      <div>LALALA</div>
    )
  }
}
