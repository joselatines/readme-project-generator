import { StyledLink } from '../../styles/GlobalStyles';
import { Column, Container, Li, Ul, UlTitle } from './styles';

const Footer = () => {
	return (
		<Container>
			<Column>
				<StyledLink to='/'>
					<b>README </b>
					<span>project generator</span>
				</StyledLink>
			</Column>
			<Column>
				<span>
					Made with love by 💜
					<a
						href='https://github.com/joselatines'
						target='_blank'
						rel='noopener noreferrer'
					>
						Jose Latines
					</a>
				</span>
			</Column>
			<Column>
				<Ul>
					<UlTitle>Useful link</UlTitle>
					<Li>
						<a href='http://' target='_blank' rel='noopener noreferrer'>
							Fork this project
						</a>
					</Li>
					<Li>
						<a href='http://' target='_blank' rel='noopener noreferrer'>
							Fork this project
						</a>
					</Li>
				</Ul>
			</Column>
		</Container>
	);
};

export default Footer;
