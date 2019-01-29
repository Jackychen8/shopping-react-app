import React, { Component } from 'react';
import { FormGroup, FormControl, Col, Panel, ControlLabel, Row, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import Cart from './Cart';
import { checkOut } from '../actions/Cart';

class CheckOutForm extends Component {
  constructor(props, context){
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: "",
      address: "",
      cc: "",
    };
  }

  handleChange(e){
    const { id, value } = e.target;
    const change = {};
    change[id] = value;
    this.setState(change);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.checkout(this.state);
  }

  render(){
    const { loggedIn, checkout, user } = this.props;
    const { name, address, cc } = this.state;
    return(
      <div>
        <Row>
        <Col xs={8}>
          <Cart checkOut/>
        </Col>
        <Col xs={4}>
          <Panel>
            <Panel.Heading>
              <Panel.Title componentClass="h3">{loggedIn ? `Checking out as ${user.firstName} ${user.lastName}` : "Checking out as guest" }</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <form>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={4}>Name</Col>
                  <Col sm={8}><FormControl id="name" placeholder="Name" value={name} onChange={this.handleChange}/></Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={4}>Address</Col>
                  <Col sm={8}><FormControl id="address" placeholder="Address" value={address} onChange={this.handleChange}/></Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={4}>Credit Card</Col>
                  <Col sm={8}><FormControl id="cc" placeholder="CC#" value={cc} onChange={this.handleChange}/></Col>
                </FormGroup>

                <Button bsStyle="primary" onClick={this.handleSubmit}>Check Out</Button>
              </form>
            </Panel.Body>
          </Panel>
        </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.authReducer.loggedIn,
  user: state.authReducer.user,
})

const mapDispatchToProps = dispatch => ({
  checkout: (info) => dispatch(checkOut(info)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutForm);
