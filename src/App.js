import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import Router from './Router';

class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyB8vl3WTWBTDyk5SqczHGXKbmpDcbOHKXQ',
			authDomain: 'manager-675ce.firebaseapp.com',
			databaseURL: 'https://manager-675ce.firebaseio.com',
			projectId: 'manager-675ce',
			storageBucket: 'manager-675ce.appspot.com',
			messagingSenderId: '674415482525'
		};
		firebase.initializeApp(config);
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;
