import React, { Component } from "react";
import HornedBeasts from "./HornedBeasts";
import { Container, Row } from "react-bootstrap";

export class Main extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
          <HornedBeasts items={this.props.dataPass} clickMain={this.props.clickMaster} />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Main;
