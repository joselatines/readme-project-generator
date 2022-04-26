import Checkbox from '../Inputs/Checkbox/Index';

const CheckboxContainer = ({ title, data }) => {
	return (
		<div>
			<h1>{title}</h1>
			{data.map(({ ...elData }) => (
				<Checkbox key={elData.id} {...elData} />
			))}
		</div>
	);
};

export default CheckboxContainer;
