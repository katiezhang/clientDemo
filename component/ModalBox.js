import React from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Popover } from 'react-bootstrap';
import { Tooltip } from 'react-bootstrap';
import { OverlayTrigger } from 'react-bootstrap';

export default class ModalBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    //console.log(this,this.hasOwnProperty('state'));    
    this.setState({ showModal: false });
    //this.state.showModal=false;
    console.log(this);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }
  close() {
    this.setState({ showModal: false });
  }
  open() {
    this.setState({ showModal: true });
  }
  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
        </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
        </Tooltip>
    );
    return (
      <div>
        <Button bsStyle="primary" bsSize="sm" onClick={this.open}>
          {this.props.name}
        </Button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Dialog Box</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>yes</Button>
            <Button onClick={this.close}>cancel</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}