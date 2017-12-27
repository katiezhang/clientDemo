import React from 'react';
import ReactDOM from 'react-dom';
import { Form, FormGroup, Col, FormControl, Checkbox, Button } from 'react-bootstrap';

export default class FormPanel extends React.Component {
  render() {
    return (
      <Form horizontal>
        <FormGroup controlId="formHorizontalId">
          <Col sm={2}>
            id
        </Col>
          <Col sm={4}>
            <FormControl type="input" placeholder="Id" disabled='false' value={this.id}/>
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalId">
          <Col sm={2}>
            name
        </Col>
          <Col sm={4}>
            <FormControl type="input" placeholder="name" />
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalId">
          <Col sm={2}>
            token
        </Col>
          <Col sm={4}>
            <FormControl type="input" placeholder="token" />
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalId">
          <Col sm={2}>
            password
        </Col>
          <Col sm={4}>
            <FormControl type="input" placeholder="password" />
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalId">
          <Col sm={2}>
            description
        </Col>
          <Col sm={4}>
            <FormControl type="input" placeholder="description" />
          </Col>
        </FormGroup>
      </Form>
    )
  }
}
