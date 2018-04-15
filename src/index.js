import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import allReducers from './reducers';

const mystore = createStore(allReducers)
ReactDOM.render(<Provider store={mystore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
