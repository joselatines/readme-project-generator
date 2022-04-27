import Checkbox from '../Inputs/Checkbox/Index';
import { Checkboxes, Title } from './styles';

const CheckboxContainer = ({ title, checkboxesData }) => {
	return (
		<section>
			<Title>{title}</Title>
			<Checkboxes>
				{checkboxesData.map(({ ...elData }) => (
					<Checkbox key={elData.id} {...elData} />
				))}
			</Checkboxes>
		</section>
	);
};

export default CheckboxContainer;
