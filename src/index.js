import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './redux/store';

import './index.css';

import Calculadora from './componentes/Calculadora';

ReactDOM.render(
  <Provider store={store}>
    <Calculadora/>
  </Provider>,
  document.querySelector('#root')
);
