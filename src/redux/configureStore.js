import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './rootReducer';

const configureStore = () => {
	const persistedState = {
		reducer2: [{id:"B",title: "Character",}]
	};

	const middlewares = [thunk];
	if(process.env.NODE_ENV !== 'production') {
		middlewares.push(createLogger());
	}

	return createStore(
		rootReducer,
		persistedState,
		applyMiddleware(...middlewares)
	);
};

export default configureStore;