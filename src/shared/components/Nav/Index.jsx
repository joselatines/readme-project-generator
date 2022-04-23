import { Link } from 'react-router-dom';
import Button from '../Button/styles';

import { Column, Container } from './styles';

const Nav = () => {
	return (
		<Container>
			<Column>
				<Link to='/' style={{ all: 'unset' }}>
					<b>README </b>
					<span>project generator</span>
				</Link>
			</Column>
			<Column>
				<Button outline={true}>
					<i className='fa-solid fa-arrow-left'></i> Boton
				</Button>
			</Column>
		</Container>
	);
};

export default Nav;
