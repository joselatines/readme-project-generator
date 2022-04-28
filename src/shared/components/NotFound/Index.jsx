import { StyledLink } from '../../styles/GlobalStyles';
import Button from '../Button/styles';

const NotFound = () => {
	return (
		<div>
			Error 404 - Page not found <br />
			<StyledLink to='/'>
				<Button>
					<i className='fa-solid fa-arrow-left'></i> Go home
				</Button>
			</StyledLink>
		</div>
	);
};

export default NotFound;
