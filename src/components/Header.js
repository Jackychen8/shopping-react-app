import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap';


export default class Header extends Component {
  render() {
    return (
          <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">Yamazon</a>
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
            <NavItem eventKey={1} onSelect={() => {console.log('login')}}>
              Login
            </NavItem>
                  <NavItem eventKey={2} onSelect={() => {console.log('logout')}}>
              Logout
            </NavItem>
            <NavItem eventKey={3} onSelect={() => {console.log('cart')}}>
              Cart
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
