import React from 'react';
import { FormGroup, FormControl, Col, Panel, ControlLabel, Row, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import Cart from './Cart';
import { checkOut } from '../actions/Cart';

const CheckOutForm = ({loggedIn, checkout}) => (
  <div>
    <Row>
    <Col xs={8}>
      <Cart checkOut/>
    </Col>
    <Col xs={4}>
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h3">{loggedIn ? `Checking out as user` : "Checking out as guest" }</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <form>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={4}>Name</Col>
              <Col sm={8}><FormControl placeholder="Name" /></Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={4}>Address</Col>
              <Col sm={8}><FormControl placeholder="Address" /></Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={4}>Credit Card</Col>
              <Col sm={8}><FormControl placeholder="CC#" /></Col>
            </FormGroup>

            <Button bsStyle="primary" onClick={checkout}>Check Out</Button>
          </form>
        </Panel.Body>
      </Panel>
    </Col>
    </Row>
  </div>
);

const mapStateToProps = state => ({
  loggedIn: state.userReducer.loggedIn,
})

const mapDispatchToProps = dispatch => ({
  checkout: () => dispatch(checkOut()),
  delItem: () => dispatch(),
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutForm);
