import { Link } from 'react-router-dom';
import { Markdown } from '../../components';
import { Button } from '../../shared/components';

const Generated = () => {
	return (
		<div>
			<h1>Generated page</h1>
			<Markdown />
			<Link to='/'>
				<Button>Home</Button>
			</Link>
		</div>
	);
};

export default Generated;
