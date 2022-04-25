import { Checkmark, Container, Label } from './styles';

const Checkbox = ({ ...data }) => {
	return (
		<label htmlFor={data.id}>
			<Container>
				<img src={data.img} alt={data.id} />
				<p>{data.id}</p>

				<input {...data} />
				<Checkmark></Checkmark>
			</Container>
		</label>
	);
};

export default Checkbox;
