import React, {Component} from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import styled from 'styled-components'
import {ProductPanel} from 'components'
import PropTypes from 'prop-types'

import {loadProductData} from 'actions/loadProductData'

const mapStateToProps = state => ({
  products: state.productData.groups
})

const mapDispatchToProps = dispatch => (bindActionCreators({
  loadProductData
}, dispatch))

const MasterDiv = styled.div`
  position: absolute;
  top: 120px;
  bottom: 0;
  width: 100%;
  overflow-y: scroll;
  background-color: rgb(240, 240, 230);
`
const GridDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`

class Products extends Component {
  static propTypes = {
    loadProductData: PropTypes.func.isRequired,
    productData: PropTypes.array
  }
  componentDidMount () {
    this.props.loadProductData()
    console.log(this.props.products)
  }
  componentDidUpdate() {
    console.log('UPDATE')
    console.log(this.props.products)
  }
  render() {
    return (
      <MasterDiv>
        <GridDiv>
          FLARP
          <ProductPanel />
        </GridDiv>
      </MasterDiv>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
