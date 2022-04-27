import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Markdown } from '../../components';
import { resetFields } from '../../features/fieldsData/fieldsSlice';
import { Button } from '../../shared/components';

const Generated = () => {
	const dispatch = useDispatch();

	return (
		<div>
			<h1>Generated page</h1>
			<Markdown />
			<Link to='/'>
				<Button onClick={() => dispatch(resetFields())}>Home</Button>
			</Link>
		</div>
	);
};

export default Generated;
