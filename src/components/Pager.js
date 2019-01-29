import React from 'react';
import { Pager } from 'react-bootstrap';

const PageButtons = ({ n, show }) => (
  <Pager>
    {/*<Pager.Item previous href="#">
      &larr; Previous Page
    </Pager.Item>*/}
    Found {n} Items
    {/*n > show && (<Pager.Item next href="#">Next Page &rarr;</Pager.Item>)*/}
  </Pager>
);

// TODO
// connect pageCount via redux
// if pageCount > 0, then show previous page button

export default PageButtons;