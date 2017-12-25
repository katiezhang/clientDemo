import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button } from 'react-bootstrap';
import './GenericModal.scss';

class GenericModal extends Component {
  constructor(props, context) {
  super(props, context);

  this.state = {
    showModal: false
  };

  this.open = this.open.bind(this);
  this.close = this.close.bind(this);
}

open() {
  this.setState({showModal: true});
}

close() {
  this.setState({showModal: false});
}

render() {
  return(
    <div>
      <div>I am a Bootstrap Modal</div>
      <Button onClick={this.open}>Show Modal</Button>
      <div>
        <Modal className="modal-container" id="demo-class" ref={node   => this.chart = node}
          show={this.state.showModal} 
          onHide={this.close}
          bsSize="small" backdrop={false}
          >

          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            One of fine body.........
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
            <Button bsStyle="primary">Save changes</Button>
          </Modal.Footer>         
        </Modal> 
         <Button onClick={this.open}>Show Modal</Button>
         <input type="text" />
      </div>
    </div>  
   );
  }
}

export default GenericModal;