import React, { lazy, Suspense } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { Loader } from './shared/components';

const App = lazy(() => import('./App'));

ReactDom.render(
	<React.StrictMode>
		<Suspense fallback={<Loader />}>
			<Provider store={store}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</Provider>
		</Suspense>
	</React.StrictMode>,
	document.getElementById('root')
);
