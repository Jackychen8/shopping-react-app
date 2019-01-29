import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem, FormGroup, FormControl, Button } from 'react-bootstrap';

import changePage from '../actions/Active';
import { logging_out } from '../actions/Auth';
import { fetchHistory } from '../actions/User';

class Header extends Component {
  render() {
    const { changePage, cartState, authState, logout, fetchHistory } = this.props;
    const { loggedIn, user } = authState;
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
          { user.firstName && <Nav pullLeft><NavItem>{`Welcome ${user.firstName} ${user.lastName}`}</NavItem></Nav>}
          {/*TODO: <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl type="text" placeholder="Search" />
            </FormGroup>{' '}
            <Button type="submit">Submit</Button>
          </Navbar.Form>*/}

        <Navbar.Collapse>
          <Nav pullRight>
            { loggedIn ? <NavItem eventKey={2} onSelect={logout}>Logout</NavItem>
              : <NavItem eventKey={1} onSelect={() => {changePage('auth')}}>Login</NavItem>
            }

            { loggedIn ? <NavItem eventKey={3} onSelect={() => {fetchHistory();changePage('history')}}>History</NavItem>
              : <NavItem eventKey={4} onSelect={() => {changePage('signUp')}}>Sign Up</NavItem>}
            <NavItem eventKey={5} onSelect={() => {changePage('cart')}}>
              Cart { cartSize ? `(${cartSize})` : ''}
            </NavItem>
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
  fetchHistory: () => dispatch(fetchHistory())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);