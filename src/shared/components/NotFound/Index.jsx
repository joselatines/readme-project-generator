import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div>
			Error 404 - Page not found <br />
			<Link to='/'>
				<i className='fa-solid fa-arrow-left'></i> Go home
			</Link>
		</div>
	);
};

export default NotFound;
