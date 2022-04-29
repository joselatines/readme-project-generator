import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Loader, NotFound } from './shared/components/index';
import { Generator, Generated } from './pages/index';

const Layout = lazy(() => import('./shared/components/Layout/Index'));

const App = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={
					<Suspense fallback={<Loader />}>
						<Layout />
					</Suspense>
				}
			>
				<Route index element={<Generator />} />
				<Route path='generated' element={<Generated />} />
				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	);
};

export default App;
