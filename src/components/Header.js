import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem, FormGroup, FormControl, Button } from 'react-bootstrap';

import changePage from '../actions/Active';
import { logging_out } from '../actions/Auth';

class Header extends Component {
  render() {
    const { changePage, cartState, authState } = this.props;
    const { loggedIn } = authState;
    const { cart } = cartState;
    const cartSize = Object.keys(cart).length;
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#" onClick={() => {changePage('store')}}>Yamazon</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl type="text" placeholder="Search" />
            </FormGroup>{' '}
            <Button type="submit">Submit</Button>
          </Navbar.Form>

          <Nav pullRight>
            <NavItem eventKey={1} onSelect={() => {changePage('auth')}}>
              { loggedIn ? "Logout" : "Login" }
            </NavItem>
            <NavItem eventKey={2} onSelect={() => {changePage('cart')}}>
              Cart { cartSize ? `(${cartSize})` : ''}
            </NavItem>
            { loggedIn ? <NavItem eventKey={3} onSelect={() => {changePage('history')}}>History</NavItem> : "" }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

const mapStateToProps = state => ({
  cartState: state.cartReducer,
  authState: state.authReducer,
});

const mapDispatchToProps = dispatch => ({
  changePage: (page) => dispatch(changePage(page)),
  logout: () => dispatch(logging_out()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);