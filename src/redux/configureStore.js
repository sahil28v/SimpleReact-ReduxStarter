import { createStore } from 'redux';
import rootReducer from './rootReducer'

const configureStore = () => {
	const persistedState = {
		reducer2: [{id:"B",title: "Character",}]
	};

	const store = createStore(rootReducer,persistedState);

	store.subscribe(()=>{
		console.log(store.getState());
	});
	return store;
}

export default configureStore;