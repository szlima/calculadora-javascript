import {combineReducers, createStore} from 'redux';

import calculadoraReducer from './reducers/calculadoraReducer';

const indexReducer= combineReducers({calculadoraReducer});
export default createStore(indexReducer);