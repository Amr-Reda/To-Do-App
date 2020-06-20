import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store';

// ReactDOM.render(<App />, document.getElementById('root'));

import { Auth0Provider } from './react-auth0-spa';
import config from './auth_config.json';
import history from './utils/history';

// A function that routes the user to the right place
// after login
const onRedirectCallback = (appState) => {
	history.push(
		appState && appState.targetUrl
			? appState.targetUrl
			: window.location.pathname
	);
};

ReactDOM.render(
	<Provider store={store}>
		<Auth0Provider
			domain={config.domain}
			client_id={config.clientId}
			redirect_uri={window.location.origin}
			onRedirectCallback={onRedirectCallback}
		>
			<App />
		</Auth0Provider>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
