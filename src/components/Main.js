import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { connect } from 'react-redux';

import Cart from './Cart';
import WebStore from './WebStore';
import AuthForm from './Auth';

class Main extends Component {
  renderBody() {
    const { activePage } = this.props;
    switch (activePage) {
      case "store":
        return <WebStore/>;
      case "cart":
        return <Cart/>;
      case "auth":
        return <AuthForm/>;
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
  checkout: () => dispatch(),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);