import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';

import App from './App';

ReactDom.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);