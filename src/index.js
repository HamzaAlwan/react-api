import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import 'tachyons';

import './index.css';
import App from './Container/App';
import { searchUsers, requestUsers } from './redux/reducers';
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({ searchUsers, requestUsers });
const logger = createLogger();
// the const is where all the states are saved;
const store = createStore(
	rootReducer,
	applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
