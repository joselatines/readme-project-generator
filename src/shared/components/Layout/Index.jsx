import { Outlet } from 'react-router-dom';
import { GlobalStyles } from '../../styles/GlobalStyles';
import Footer from '../Footer/Index';
import Nav from '../Nav/Index';

const Layout = () => (
	<>
		<Nav />
		{/* Outlet display elements base in de URL from react router dom*/}
		<main style={{ padding: '10rem 0' }}> {/* For the absolute nav */}
			<Outlet />
		</main>
		<Footer />
		<GlobalStyles />
	</>
);

export default Layout;
