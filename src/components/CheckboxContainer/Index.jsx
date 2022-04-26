import { useDispatch, useSelector } from 'react-redux';
import { fillCheckboxes } from '../../features/fieldsData/fieldsSlice';
import Checkbox from '../Inputs/Checkbox/Index';
import { Checkboxes, Title } from './styles';

const CheckboxContainer = ({ title, checkboxesData }) => {
	const templateData = useSelector(state => state.fieldsData.template);
	const dispatch = useDispatch();

	const handleCheckbox = (e, dataInput) => {
		const target = e.target;
		const targetId = target.id;
		const key = dataInput.name; // Example "frontend"

		if (target.checked) {
			dispatch(
				fillCheckboxes({
					...templateData, // template: {}
					[key]: [...templateData[key], dataInput], // Creates a new obj and overwrites the array to save the other obj / Example:  frontend: [{}, {}]
				})
			);
		} else {
			const oldArray = templateData[key]; // Get the current array
			const newArray = oldArray.filter(el => el.id !== targetId); // Return an array without the checkbox that was unchecked

			dispatch(
				fillCheckboxes({
					...templateData,
					[key]: newArray, // Pass the new array to the state
				})
			);
		}
	};

	return (
		<section>
			<Title>{title}</Title>
			<Checkboxes>
				{checkboxesData.map(({ ...elData }) => (
					<Checkbox
						key={elData.id}
						{...elData}
						handleCheckbox={handleCheckbox}
					/>
				))}
			</Checkboxes>
		</section>
	);
};

export default CheckboxContainer;
