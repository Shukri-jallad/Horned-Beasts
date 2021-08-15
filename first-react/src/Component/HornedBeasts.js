import React, { Component } from "react";

export class HornedBeasts extends Component {
  constructor() {
    super();
    this.state = {
      click: 0,
    };
  }

  addLikes=()=>{
    this.setState({
        click:this.state.click+1
    })
  }

  render() {
    return (
      <div>
        <h2>Title</h2>
        <img
        onClick={()=>{this.addLikes()}}
          src={this.props.image}
          alt={this.props.title}
          width="500"
          height="600"
        />
        <p>{this.props.description}</p>
        <p>{this.state.click}</p>
      </div>
    );
  }
}

export default HornedBeasts;
