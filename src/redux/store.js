import {combineReducers, createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import calculadoraReducer from './reducers/calculadoraReducer';

const indexReducer= combineReducers({calculadoraReducer});
export default createStore(indexReducer, {}, applyMiddleware(ReduxThunk));