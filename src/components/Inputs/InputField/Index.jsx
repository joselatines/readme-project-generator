import { useDispatch } from 'react-redux';
import { deleteFeatureField } from '../../../features/fieldsData/fieldsSlice';

import { Button } from '../../../shared/components';
import {
	Container,
	DeleteBtn,
	Input,
	Name,
	TextArea,
	InputContainer,
} from './styles';

const InputField = ({ ...data }) => {
	console.log(data);
	const dispatch = useDispatch();

	return (
		<Container>
			{data.title && <Name>{data.title}</Name>}
			<InputContainer>
				{data.textarea ? (
					<TextArea as='textarea' {...data} />
				) : (
					<Input {...data} />
				)}
				{data.deleteFeature && (
					<DeleteBtn>
						<Button
							danger={true}
							size='.5rem'
							onClick={() => dispatch(deleteFeatureField(data.id))}
						>
							<i className='fa-solid fa-xmark'></i>
						</Button>
					</DeleteBtn>
				)}
			</InputContainer>
		</Container>
	);
};

export default InputField;
