import React, { Component } from "react";
import HornedBeasts from "./HornedBeasts";
import data from "./data.json";

export class Main extends Component {
  render() {
    let arrayTotal = data;

    return (
      <div>
        {arrayTotal.map((item) => {
          return (
            <HornedBeasts
              image={item.image_url}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
    );
  }
}

export default Main;
