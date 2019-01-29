import React from 'react';
import { Panel } from 'react-bootstrap';
import { connect } from 'react-redux';

import Item from './Items';
import { fetchHistory } from '../actions/User';

const Purchase = ({cart, timestamp}) => {
	const date = new Date(timestamp);
	return (
		<Panel>
			<Panel.Heading>
				<Panel.Title componentClass="h2">Purchase made on {date.toUTCString()}</Panel.Title>
			</Panel.Heading>
			<Panel.Body>
				{ Object.values(cart).map(i => <Item key={i.id} item={i}/>) }
			</Panel.Body>
		</Panel>
	);
};

const History = ({userState}) => (
	<div>
		<Panel>
			<Panel.Heading>
				<Panel.Title componentClass="h2">Your Purchase History</Panel.Title>
			</Panel.Heading>
		</Panel>
		{ Object.values(userState.history).reverse().map(p => <Purchase key={p.timestamp} {...p}/>)}
	</div>
);

const mapStateToProps = state => ({
  userState: state.userReducer,
})

const mapDispatchToProps = dispatch => ({
	fetchHistory: () => dispatch(fetchHistory())
 // login: () => dispatch(login()),
 // logout: () => dispatch(logout()),
})


export default connect(mapStateToProps, mapDispatchToProps)(History);
