import React, {Component} from 'react'
import styled from 'styled-components'

const MasterDiv = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  `
const TitlesDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export default class Header extends Component {
  render() {
    return (
      <MasterDiv>
        <div/>
        <TitlesDiv>
          <div>Williams Sonoma</div>
          <div>catalogue</div>
        </TitlesDiv>
        <div/>
      </MasterDiv>
    )
  }
}
