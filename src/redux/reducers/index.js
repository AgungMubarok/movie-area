import { combineReducers } from 'redux';

import moviesReducers from './moviesReducer';

const rootReducer = combineReducers({
  movie: moviesReducers,
})

export default rootReducer;
