import { Checkbox, InputField } from '../../components';
import { Container, FlexContainer, InnerContainer } from './styles';
import { Button } from '../../shared/components';
import { useSelector, useDispatch } from 'react-redux';
import {
	fillTemplate,
	addFeatureField,
	fillFeatures,
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

	/* 	const handleInputFeature = e => {
		const key = e.target.id;
		const value = e.target.value;

		dispatch(
			fillFeatures([
				...fieldsData.template.features,
				{
					...fieldsData.template.features,
					[key]: value,
				},
			])
		);
	}; */

	return (
		<Container>
			<InnerContainer>
				{fieldsData.basics.map(({ ...data }, i) => (
					<InputField key={i} {...data} onChange={e => handleInputChange(e)} />
				))}
			</InnerContainer>
			{/* <div>
				<span>Project features</span>
				<div>
					<FeaturesContainer>
						{fieldsData.features.map(({ ...data }, i) => (
							<InputField
								{...data}
								key={i}
								onChange={e => handleInputFeature(e)}
							/>
						))}
					</FeaturesContainer>
					<Button onClick={() => dispatch(addFeatureField())}>+</Button>
				</div>
			</div> */}
			<InnerContainer>
				<h1>Frontend development</h1>
				<FlexContainer>
					{fieldsData.checkboxes.frontend.map(({ ...data }) => (
						<Checkbox key={data.id} {...data} />
					))}
				</FlexContainer>
			</InnerContainer>
		</Container>
	);
};

export default Generator;
