import React, { Component } from "react";
import HornedBeasts from "./HornedBeasts";


export class Main extends Component {
  render() {
    return (
      <div>
        <HornedBeasts
          image="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"
          title="HornedBeast"
          discription="A unicorn and a narwhal nuzzling their horns"
        />
        <HornedBeasts
          image="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"
          title="HornedBeast"
          discription="A unicorn and a narwhal nuzzling their horns"
        />
      </div>
    );
  }
}

export default Main;
