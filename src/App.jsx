import { Route, Routes } from 'react-router-dom';

import { Layout, NotFound } from './shared/components/index';
import { Generator, Generated } from './pages/index';

export const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='/' element={<Generator />} />
				<Route path='generated' element={<Generated />} />
				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	);
};
