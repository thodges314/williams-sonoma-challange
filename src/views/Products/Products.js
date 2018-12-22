import React, {Component} from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

import {loadProductData} from 'actions/loadProductData'

const mapStateToProps = state => ({
  productData: state.productData
})

const mapDispatchToProps = dispatch => (bindActionCreators({
  loadProductData
}, dispatch))

class Products extends Component {
  componentDidMount () {
    this.props.loadProductData()
    console.log(this.props.productData)
  }
  componentDidUpdate() {
    console.log('UPDATE')
    console.log(this.props.productData)
  }
  render() {
    return (
      <div>LALALA</div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
