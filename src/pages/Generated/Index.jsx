import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Markdown } from '../../components';


const Generated = () => {
	const dispatch = useDispatch();

	return (
		<div>
			<Markdown />
			
		</div>
	);
};

export default Generated;
