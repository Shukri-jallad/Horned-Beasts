import React, { Component } from "react";
import Main from "./Component/Main";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./Component/data.json";
import SelectedBeast from "./Component/SelectedBeast";

export class App extends Component {
  constructor() {
    super();
    this.state = { click: 0, array: data, handleShow: false, arrayTwo: {} };
  }

  /* addLikes = () => {
    console.log("CLICKED");
    this.setState({
      click: this.state.click + 1,
    });
  };*/

  handleOn = (item) => {
    this.setState({ handleShow: true, arrayTwo: item });
  };

  handleOff = () => {
    this.setState({ handleShow: false });
  };

  render() {
    return (
      <div>
        <Header />
        {this.state.array.map((item) => {
          return (
            <Main
              dataPass={item}
              clickMaster={() => {
                this.handleOn(item);
              }}
            />
          );
        })}

        <SelectedBeast
          clickOn={this.handleOn}
          clickOff={this.handleOff}
          dataPass={this.state.arrayTwo}
          handlerOn={this.state.handleShow}
        />

        <Footer />
      </div>
    );
  }
}

export default App;
