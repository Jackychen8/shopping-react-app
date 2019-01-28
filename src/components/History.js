import { Panel } from 'react-bootstrap';
import { connect } from 'react-redux';

import Item from './Items';
import { fetchingHistory } from '../actions/User';

const History = ({userState}) => (
	<Panel>
		<Panel.Heading>
			<Panel.Title componentClass="h2">Your Purchase History</Panel.Title>
		</Panel.Heading>
		<Panel.Body>
			{ Object.values(userState.history).map(i => <Item key={i.id} item={i}/>) }
		</Panel.Body>
	</Panel>
);

const mapStateToProps = state => ({
  userState: state.userReducer,
})

const mapDispatchToProps = dispatch => ({
	fetchHistory: () => dispatch(fetchingHistory())
 // login: () => dispatch(login()),
 // logout: () => dispatch(logout()),
})


export default connect(mapStateToProps, mapDispatchToProps)(History);
