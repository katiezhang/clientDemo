import React from 'react';
import { Modal, Popover, Tooltip, OverlayTrigger } from 'react-bootstrap';
import  FormPanel  from './FormPanel';
import { Form, FormGroup, Col, FormControl, Checkbox, Button } from 'react-bootstrap';


export default class ModalBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.setState({ showModal: false });
    this.state.showModal=false;
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
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {(() => {
              if (this.props.body === '') {
                {/* console.log(<FormPanel /> ) */ }
                return (
                  <FormPanel /> 
                )                
              } else {
                return this.props.body
              }
            }
            )()}
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