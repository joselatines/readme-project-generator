import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GeneratedPage } from './pages/GeneratedPage';
import { GeneratorPage } from './pages/GeneratorPage';
import { HomePage } from './pages/HomePage';

import { App } from './App';
import { NotFoundPage } from './pages/NotFoundPage';

ReactDom.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />}>
					<Route path='/' element={<HomePage />} />
					<Route path='generator' element={<GeneratorPage />} />
					<Route path='generated' element={<GeneratedPage />}>
						<Route path=':projectTitle' element={<GeneratedPage />} />
					</Route>
					<Route path='*' element={<NotFoundPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
