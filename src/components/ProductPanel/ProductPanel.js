import React, {Component} from 'react'
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const StyledPaper = withStyles({
  root: {
    backgroundColor: 'rgb(245, 245, 245)',
    borderRadius: 4,
    border: 0,
    height: 326,
    width: 226,
    padding: 4,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 40,
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
    '&:hover': {
      backgroundColor: 'rgb(205, 201, 201)'
    }
  }
})(Paper);

const PictureDiv = styled.div`
  height: 218px;
  width: 218px;
  position: relative;
  left: 4px;
  top: 4px;
  img {
    height: 218px;
    width: 218px;
    background-color: 'rgba(0, 0, 0, 0)';
  }
  .text-div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &:hover{

  }
`
const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default class ProductPanel extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired
  }
  render() {
    console.log('props in render', this.props)
    const {name} = this.props
    const {href} = this.props.thumbnail
    return (
      <StyledPaper>
        <PictureDiv>
          <img src={href}/>
        </PictureDiv>
        <Description>
          <div>
            test
          </div>
          <div>
            price
          </div>
        </Description>
      </StyledPaper>
    )
  }
}
