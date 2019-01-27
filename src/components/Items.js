import React from 'react';
import { Row, Col, Button, Image } from 'react-bootstrap';


const Item = (item) => (
  <Row key={item.id} style={{borderBottom: "1px solid black", marginBottom: "2em", paddingBottom: "1em", textAlign: "left"}}>
    <Col xs={3}>
      <Image src={item.image} thumbnail alt="242x200"/>
    </Col>
    <Col xs={9}>
      <Row>
        <Col>
          <h4>{item.name}</h4>
          <h4>${item.price}</h4>
          <p>
            <Button bsStyle="primary">Add</Button>
            &nbsp;
            <Button bsStyle="default">Remove</Button>
          </p>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default Item;