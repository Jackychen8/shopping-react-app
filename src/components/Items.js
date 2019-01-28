import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button, Image } from 'react-bootstrap';

import { addItem, delItem } from '../actions/Cart';


const Item = ({item, delItem, addItem, activePage}) => {
  // TODO: create own class for this. Hook up to redux so no need to pass prop through here.
  let Buttons;
  switch(activePage){
    case "cart":
      Buttons = (<Button bsStyle="default" onClick={() => delItem(item)}>Remove</Button>);
      break;
    case "store":
      Buttons = (<Button bsStyle="primary" onClick={() => addItem(item)}>Add</Button>);
      break;
    default:
      Buttons = (null);
  }
  return (
    <Row style={{borderBottom: "1px solid black", marginBottom: "2em", paddingBottom: "1em", textAlign: "left"}}>
      <Col xs={3}>
        <Image src={item.image} thumbnail alt="242x200"/>
      </Col>
      <Col xs={9}>
        <Row>
          <Col>
            <h4>{item.name}</h4>
            <h4>${item.price}</h4>
            <p>{Buttons}</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

const mapStateToProps = state => ({
  activePage: state.activeReducer.page,
})

const mapDispatchToProps = dispatch => ({
  delItem: (item) => dispatch(delItem(item)),
  addItem: (item) => dispatch(addItem(item)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Item);