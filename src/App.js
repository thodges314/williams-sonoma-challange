import React, { Component } from 'react'
import { connect } from 'react-redux'
// import logo from './logo.svg';
// import './App.css';
import {Header, Products} from './views'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        BLEEP
        <Products />
      </div>
    );
  }
}

export default connect()(App)
