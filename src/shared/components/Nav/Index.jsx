import { Column, Container } from './styles';
import { StyledLink } from '../../styles/GlobalStyles';
import Button from '../Button/styles';

const Nav = () => {
	return (
		<Container>
			<Column>
				<StyledLink to='/'>
					<b>README </b>
					<span>project generator</span>
				</StyledLink>
			</Column>
			<Column>
				<Button outline={true}>
					<i className='fa-solid fa-gear'></i>Generate
				</Button>
			</Column>
		</Container>
	);
};

export default Nav;
