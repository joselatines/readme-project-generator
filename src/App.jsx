import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import { GlobalStyle } from './shared/GlobalStyles';
import { Navigation } from './shared/Navigation';
import { Footer } from './shared/Footer';

export const App = () => {
	return (
		<Fragment>
			<Navigation />
			<Outlet />
		
			<GlobalStyle />
		</Fragment>
	);
};
