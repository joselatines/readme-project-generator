import Helmet from 'react-helmet';
import { StyledLink } from '../../styles/GlobalStyles';
import Button from '../Button/styles';

const NotFound = () => {
	return (
		<div style={{ minHeight: '100vh' }}>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Page not found — Preview, Edit and Generate</title>
				<meta name="title" content="README project generator — Preview, Edit and Generate"/>
				<meta name="description" content="The easiest way to create a README for your project. Our simple template creates you a README file base in your entries , add title, description, features, libraries, frameworks languages and much more."/>
				<meta name="keywords" content="README, readme generator, markdown, markdown generator, free readme generator"/>
				<meta name="author" content="Jose Latines"/>
				<link rel="canonical" href="https://readme-project-generator.netlify.app/generated" />
			</Helmet>
			<p style={{ fontSize: 'larger', marginBottom: '2rem' }}>
				Error 404 - Page not found{' '}
			</p>
			<StyledLink to='/'>
				<Button>
					<i className='fa-solid fa-arrow-left'></i> Go home
				</Button>
			</StyledLink>
		</div>
	);
};

export default NotFound;
