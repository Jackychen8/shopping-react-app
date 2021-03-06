import React, { Component } from 'react';
import { Row, Panel, Form, FormGroup, FormControl, ControlLabel, Button, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import { signUp } from '../actions/Auth';


class SignupForm extends Component {
  constructor(props, context){
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
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
    this.props.signUp(this.state);
  }

  render() {
    const { email, password, firstName, lastName } = this.state;
    return (
      <Row>
        <Col xs={8} xsOffset={2}>
        <Panel>
          <Panel.Heading>Sign Up</Panel.Heading>
          <Panel.Body>
            <Form horizontal>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  First Name
                </Col>
                <Col sm={10}>
                  <FormControl id="firstName" placeholder="Beff" value={firstName} onChange={this.handleChange}/>
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Last Name
                </Col>
                <Col sm={10}>
                  <FormControl id="lastName" placeholder="Jezos" value={lastName} onChange={this.handleChange}/>
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Email
                </Col>
                <Col sm={10}>
                  <FormControl id="email" type="email" placeholder="Email" value={email} onChange={this.handleChange}/>
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Password
                </Col>
                <Col sm={10}>
                  <FormControl id="password" type="password" placeholder="Password" value={password} onChange={this.handleChange}/>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type="submit" onClick={this.handleSubmit}>Sign Up</Button>
                </Col>
              </FormGroup>
            </Form>
          </Panel.Body>
        </Panel>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
 signUp: (info) => dispatch(signUp(info)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);