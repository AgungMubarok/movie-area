import { createStore,applyMiddleware } from 'redux';
// import rootReducer from './RootReducer';
import rootReducer from '../reducers';
const thunkMiddleware  = require('redux-thunk').default;


const store = createStore(rootReducer,applyMiddleware(thunkMiddleware));

export default store;