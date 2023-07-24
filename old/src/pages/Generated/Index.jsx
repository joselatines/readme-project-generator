import Helmet from 'react-helmet';
import { Info, Markdown } from '../../components';
import { Container } from './styles';

const Generated = () => {
	return (
		<Container>
			<Helmet>
				<meta charSet="utf-8" />
				<title>README Generated — Preview, Edit and Generate</title>
				<meta name="title" content="README project generator — Preview, Edit and Generate"/>
				<meta name="description" content="The easiest way to create a README for your project. Our simple template creates you a README file base in your entries , add title, description, features, libraries, frameworks languages and much more."/>
				<meta name="keywords" content="README, readme generator, markdown, markdown generator, free readme generator"/>
				<meta name="author" content="Jose Latines"/>
				<link rel="canonical" href="https://readme-project-generator.netlify.app/generated" />
			</Helmet>
			<Markdown />
			<Info />
		</Container>
	);
};

export default Generated;
