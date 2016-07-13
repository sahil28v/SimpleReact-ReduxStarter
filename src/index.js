import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './redux/configureStore';
import rootReducer from './redux/rootReducer';
import Root from './components/Root';
import App from './components/App';
import {Provider} from 'react-redux';

const store = configureStore() ;

//console.log(store.getState());

render(<Root store={store} />,
	document.querySelector('#root')
);