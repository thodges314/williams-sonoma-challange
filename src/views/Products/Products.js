import React, {Component} from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import styled from 'styled-components'

import {loadProductData} from 'actions/loadProductData'

const mapStateToProps = state => ({
  productData: state.productData
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
`
const GridDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`

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
      <MasterDiv>
        <GridDiv>
          FLARP
        </GridDiv>
      </MasterDiv>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
