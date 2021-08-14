import React, { Component } from 'react'
import Main from './Component/Main'
import Header from "./Header";
import Footer from './Component/Footer';

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

