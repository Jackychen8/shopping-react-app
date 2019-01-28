import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './reducers/RootReducer';

export default function configureStore(initialState={}) {
 return createStore(
  rootReducer,
   applyMiddleware(thunk, logger)
 );
}