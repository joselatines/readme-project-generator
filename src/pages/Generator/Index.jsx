import { CheckboxContainer, InputField } from '../../components';
import { Container, FlexContainer, FieldsContainer } from './styles';
import { Button } from '../../shared/components';
import { useSelector, useDispatch } from 'react-redux';
import { fillTemplate } from '../../features/fieldsData/fieldsSlice';
import { Link } from 'react-router-dom';

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

	const checkboxes = [
		{
			title: 'Frontend development',
			checkboxesData: fieldsData.checkboxes.frontend,
		},
		{
			title: 'Backend development',
			checkboxesData: fieldsData.checkboxes.backend,
		},
		{
			title: 'Testing',
			checkboxesData: fieldsData.checkboxes.testing,
		},
		{
			title: 'Tools',
			checkboxesData: fieldsData.checkboxes.tools,
		},
	];

	return (
		<Container>
			<FieldsContainer>
				{fieldsData.basics.map(({ ...data }) => (
					<InputField
						key={data.id}
						{...data}
						onChange={e => handleInputChange(e)}
					/>
				))}
			</FieldsContainer>

			<FieldsContainer>
				<span>Project features</span>
				<FlexContainer>
					{fieldsData.features.map(({ ...data }) => (
						<InputField
							{...data}
							key={data.id}
							onChange={e => handleInputFeature(e)}
						/>
					))}
				</FlexContainer>
			</FieldsContainer>

			{checkboxes.map(({ ...checkboxData }) => (
				<CheckboxContainer key={checkboxData.title} {...checkboxData} />
			))}
			<Link to='/generated'>
				<Button>Generate</Button>
			</Link>
		</Container>
	);
};

export default Generator;
