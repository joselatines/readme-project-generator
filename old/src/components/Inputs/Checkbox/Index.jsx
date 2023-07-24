import { useState } from 'react';
import { Container, InnerContainer } from './styles';

import { useDispatch, useSelector } from 'react-redux';
import { fillCheckboxes } from '../../../features/fieldsData/fieldsSlice';

const Checkbox = ({ ...data }) => {
	const templateData = useSelector(state => state.fieldsData.template);
	const dispatch = useDispatch();

	const [isCheck, setIsCheck] = useState(false);
	const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

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
		<label htmlFor={data.id}>
			<Container checked={isCheck}>
				<InnerContainer>
					<img src={data.img} alt={data.id} />
					<p>{capitalize(data.value)}</p>
				</InnerContainer>

				<input
					name={data.name}
					value={data.value}
					id={data.id}
					type='checkbox'
					onClick={() => setIsCheck(!isCheck)}
					onChange={e => handleCheckbox(e, data)}
				/>
				<i className='fa-solid fa-circle-check'></i>
			</Container>
		</label>
	);
};

export default Checkbox;
