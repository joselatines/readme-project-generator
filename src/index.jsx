import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';

import App from './App';
import { hydrate } from 'react-dom';
import { render } from '@testing-library/react';

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
	hydrate(
		<React.StrictMode>
			<Provider store={store}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</Provider>
		</React.StrictMode>,
		rootElement
	);
} else {
	render(
		<React.StrictMode>
			<Provider store={store}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</Provider>
		</React.StrictMode>,
		rootElement
	);
}
