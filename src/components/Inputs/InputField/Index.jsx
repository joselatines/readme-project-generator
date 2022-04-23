import { Container, Input, Name, TextArea } from './styles';

const InputField = ({ ...data }) => {
	return (
		<Container>
			{data.title && <Name>{data.title}</Name>}

			{data.textarea ? (
				<TextArea as='textarea' {...data} />
			) : (
				<Input {...data} />
			)}
		</Container>
	);
};

export default InputField;
