import React, { Component } from "react";
import { Modal, Button, Card } from "react-bootstrap";

export class SelectedBeast extends Component {
  render() {
    return (
      <div>
        <Modal show={this.props.handlerOn} onHide={this.props.clickOff}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.dataPass.title}</Modal.Title>
          </Modal.Header>
          <Card.Img src={this.props.dataPass.image_url}/>
          <Modal.Body>{this.props.dataPass.description}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.clickOff}>
              Close
            </Button>
            <Button variant="primary" onClick={this.props.clickOff}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default SelectedBeast;
