import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


export default class Header extends Component {
	render() {
		return (
	        <Navbar inverse collapseOnSelect>
			  <Navbar.Header>
			    <Navbar.Brand>
			      <a href="#brand">Wamazon</a>
			    </Navbar.Brand>
			    <Navbar.Toggle />
			  </Navbar.Header>
			  <Navbar.Collapse>
			    <Nav>
			      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
			        <MenuItem eventKey={3.1}>Action</MenuItem>
			        <MenuItem eventKey={3.2}>Another action</MenuItem>
			        <MenuItem eventKey={3.3}>Something else here</MenuItem>
			        <MenuItem divider />
			        <MenuItem eventKey={3.3}>Separated link</MenuItem>
			      </NavDropdown>
			    </Nav>
			    <Nav pullRight>
			      <NavItem eventKey={1} href="#">
			        Login
			      </NavItem>
			    </Nav>
			  </Navbar.Collapse>
			</Navbar>
		)
	}
}

/*
	          <p>
	            Edit <code>src/App.js</code> and save to reload.
	          </p>
	          <a
	            className="App-link"
	            href="https://reactjs.org"
	            target="_blank"
	            rel="noopener noreferrer"
	          >
	            Learn React
	          </a>
*/