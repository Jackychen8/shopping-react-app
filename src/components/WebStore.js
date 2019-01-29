import React from 'react';
import { connect } from 'react-redux';

import PageButtons from './Pager';
import Item from './Items';

const PaginationCount = 10;// TODO: connect via redux and provide as dropdown option

const WebStore = ({merchandise}) => (
  <div>
    <PageButtons n={merchandise.length} show={PaginationCount}/>
    {merchandise.map(i => <Item key={i.id} item={i} />)}
  </div>
);

// TODO: add merchandise.slice() here to paginate

const mapStateToProps = state => ({
  merchandise: state.merchandiseReducer.merchandise,
  // page, per
})

export default connect(mapStateToProps)(WebStore);