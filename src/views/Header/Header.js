import React, {Component} from 'react'
import styled from 'styled-components'

export default class Header extends Component {
  static StyledDiv = styled.div`
    width: 100%;
    height: 120px;
    padding-top: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
  `
  render() {
    return (
      <Header.StyledDiv>
      <div>Williams Sonoma</div>
      <div>catalogue</div>
      </Header.StyledDiv>
    )
  }
}
