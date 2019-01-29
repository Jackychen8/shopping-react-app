import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { connect } from 'react-redux';

import { getMerchandise } from '../actions/WebStore';
import Cart from './Cart';
import WebStore from './WebStore';
import AuthForm from './Auth';
import CheckOutForm from './CheckOut';
import SignUpForm from './SignUp';
import History from './History';

class Main extends Component {
  constructor(props) {
    super(props);
    props.getMerchandise();
  }

  renderBody() {
    const { activePage } = this.props;
    switch (activePage) {
      case "store":
        return <WebStore/>;
      case "cart":
        return <Cart/>;
      case "auth":
        return <AuthForm/>;
      case "checkout":
        return <CheckOutForm/>;
      case "signUp":
        return <SignUpForm/>;
      case "history":
        return <History/>;
      default:
        return <WebStore/>;
    }
  }

  render() {
    // TODO: handle pagination
    return (
      <div>
        <Grid className="Main">
          {this.renderBody()}
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  activePage: state.activeReducer.page,
})

const mapDispatchToProps = dispatch => ({
  getMerchandise: () => dispatch(getMerchandise()),
  checkout: () => dispatch(),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);