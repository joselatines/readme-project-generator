import { InputField } from '../../components';
import { Container, InnerContainer } from './styles';
import { Button } from '../../shared/components';
import { useSelector, useDispatch } from 'react-redux';
import { addField } from '../../features/fieldsData/fieldsSlice';

export const Generator = () => {
	const { fieldsData } = useSelector(state => state);
	const dispatch = useDispatch();

	const handleChangeRTK = e => {
		const key = e.target.id;
		const value = e.target.value;
		dispatch(
			addField({
				...fieldsData.template,
				[key]: value,
			})
		);
	};

	return (
		<Container>
			<InnerContainer>
				{fieldsData.basics.map(({ ...data }, i) => (
					<InputField key={i} {...data} onChange={e => handleChangeRTK(e)} />
				))}
			</InnerContainer>
			<div>
				<span>Project features</span>
				<div>
					<div>
						{fieldsData.features.map(({ ...data }, i) => (
							<InputField {...data} key={i} />
						))}
					</div>
					<Button>+</Button>
				</div>
			</div>
		</Container>
	);
};

export default Generator;
