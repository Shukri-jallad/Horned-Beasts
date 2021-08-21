import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export class HornedBeasts extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.items.image_url} />
          <Card.Body>
            <Card.Title>{this.props.items.title}</Card.Title>
            <Card.Text>{this.props.items.description}</Card.Text>
            <Button onClick={this.props.clickMain}>Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default HornedBeasts;
