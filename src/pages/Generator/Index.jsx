import Helmet from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';

import { fillTemplate } from '../../features/fieldsData/fieldsSlice';

import { StyledLink } from '../../shared/styles/GlobalStyles';
import { Container, FlexContainer, FieldsContainer } from './styles';
import { CheckboxContainer, InputField } from '../../components';
import { Button } from '../../shared/components';

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
			<Helmet>
				<meta charSet="utf-8" />
				<title>README project generator — Preview, Edit and Generate</title>
				<meta name="title" content="README project generator — Preview, Edit and Generate"/>
				<meta name="description" content="The easiest way to create a README for your project. Our simple template creates you a README file base in your entries , add title, description, features, libraries, frameworks languages and much more."/>
				<meta name="keywords" content="README, readme generator, markdown, markdown generator, free readme generator"/>
				<meta name="author" content="Jose Latines"/>
				<link rel="canonical" href="https://readme-project-generator.netlify.app/" />
			</Helmet>
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
			<StyledLink to='/generated'>
				<Button>
					<i className='fa-solid fa-gear'></i>Generate
				</Button>
			</StyledLink>
		</Container>
	);
};

export default Generator;
