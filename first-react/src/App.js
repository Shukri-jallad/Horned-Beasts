import React, { Component } from 'react'
import Main from './Component/Main'
import Header from './Component/Header'
import Footer from './Component/Footer'

export class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}

export default App

