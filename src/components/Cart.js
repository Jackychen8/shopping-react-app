import React from 'react';
import { connect } from 'react-redux';
import { Panel, Button } from 'react-bootstrap';

import Item from './Items';


const Cart = ({cartState}) => (
		<Panel>
			<Panel.Heading>
				<Panel.Title componentClass="h2">Your Shopping Cart</Panel.Title>
			</Panel.Heading>
			<Panel.Body>
				{ Object.values(cartState.cart).map(i => <Item key={i.id} item={i}/>) }
				{ Object.keys(cartState.cart).length ? <Button bsStyle="primary">Check Out</Button> : ""}
			</Panel.Body>
		</Panel>
);

const mapStateToProps = state => ({
  cartState: state.cartReducer,
})

const mapDispatchToProps = dispatch => ({
	checkout: () => dispatch(),
	delItem: () => dispatch(),
})


export default connect(mapStateToProps, mapDispatchToProps)(Cart);