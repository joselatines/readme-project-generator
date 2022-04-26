import { Checkbox, CheckboxContainer, InputField } from '../../components';
import { Container, FlexContainer, FieldsContainer } from './styles';
import { Button } from '../../shared/components';
import { useSelector, useDispatch } from 'react-redux';
import {
	fillTemplate,
	fillCheckboxes,
} from '../../features/fieldsData/fieldsSlice';

export const Generator = () => {
	const { fieldsData } = useSelector(state => state);
	const dispatch = useDispatch();

	const handleInputChange = e => {
		const key = e.target.id;
		const value = e.target.value;

		dispatch(
			fillTemplate({
				...fieldsData.template,
				[key]: value,
			})
		);
	};

	const handleCheckbox = (e, data) => {
		const target = e.target;
		const targetId = target.id;
		const key = data.name; // Example "frontend"

		if (target.checked) {
			dispatch(
				fillCheckboxes({
					...fieldsData.template, // template: {}
					[key]: [...fieldsData.template[key], data], // Creates a new obj and overwrites the array to save the other obj / Example:  frontend: [{}, {}]
				})
			);
		} else {
			const oldArray = fieldsData.template[key]; // Get the current array
			const newArray = oldArray.filter(el => el.id !== targetId); // Return an array without the checkbox that was unchecked

			dispatch(
				fillCheckboxes({
					...fieldsData.template,
					[key]: newArray, // Pass the new array to the state
				})
			);
		}
	};

	const handleInputFeature = e => {
		const id = e.target.id;
		const value = e.target.value;

		dispatch(
			fillTemplate({
				...fieldsData.template,
				features: { ...fieldsData.template.features, [id]: value },
			})
		);
	};

	return (
		<Container>
			<FieldsContainer>
				{fieldsData.basics.map(({ ...data }, i) => (
					<InputField key={i} {...data} onChange={e => handleInputChange(e)} />
				))}
			</FieldsContainer>

			<FieldsContainer>
				<span>Project features</span>
				<FlexContainer>
					{fieldsData.features.map(({ ...data }, i) => (
						<InputField
							{...data}
							key={i}
							onChange={e => handleInputFeature(e)}
						/>
					))}
				</FlexContainer>
			</FieldsContainer>

			<FieldsContainer>
				<h1>Frontend development</h1>
				<FlexContainer>
					{fieldsData.checkboxes.frontend.map(({ ...data }) => (
						<Checkbox key={data.id} {...data} handleCheckbox={handleCheckbox} />
					))}
				</FlexContainer>
			</FieldsContainer>

			<FieldsContainer>
				<h1>Backend development</h1>
				<FlexContainer>
					{fieldsData.checkboxes.backend.map(({ ...data }) => (
						<Checkbox key={data.id} {...data} handleCheckbox={handleCheckbox} />
					))}
				</FlexContainer>
			</FieldsContainer>
		</Container>
	);
};

export default Generator;
