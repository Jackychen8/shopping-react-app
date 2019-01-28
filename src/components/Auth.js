import React, { Component } from 'react';
import { Row, Panel, Form, FormGroup, FormControl, ControlLabel, Checkbox, Button, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import { logging_in, logging_out } from '../actions/Auth';


class AuthForm extends Component {
  constructor(props, context){
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: "",
      password: "",
      remember: false,
    };
  }

  handleChange(e){
    switch (e.target.type){
      case "email":
        this.setState({email: e.target.value});
        break;
      case "password":
        this.setState({password: e.target.value});
        break;
      case "checkbox":
        this.setState({remember: e.target.value});
        break;
      default:
        break;
    }
  }

  render() {
    const { login } = this.props;
    const { email, password, remember } = this.state;
    return (
      <Row>
        <Col xs={8} xsOffset={2}>
        <Panel>
          <Panel.Heading>Login</Panel.Heading>
          <Panel.Body>
            <Form horizontal>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Email
                </Col>
                <Col sm={10}>
                  <FormControl type="email" placeholder="Email" value={email} onChange={e => this.handleChange(e)}/>
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Password
                </Col>
                <Col sm={10}>
                  <FormControl type="password" placeholder="Password" value={password} onChange={e => this.handleChange(e)}/>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Checkbox value={remember} onChange={e => this.handleChange(e)}>Remember me</Checkbox>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type="submit" onClick={e => {e.preventDefault(); login(email, password);} }>Sign in</Button>
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
  // cart: state.cart,
  activePage: state.activeReducer.page,
})

const mapDispatchToProps = dispatch => ({
 login: (email, password) => dispatch(logging_in(email, password)),
 logout: () => dispatch(logging_out()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);