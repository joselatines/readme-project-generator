import { useState } from 'react';
import { Container, InnerContainer } from './styles';

const Checkbox = ({ handleCheckbox, ...data }) => {
	const [isCheck, setIsCheck] = useState(false);
	const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

	return (
		<label htmlFor={data.id}>
			<Container checked={isCheck}>
				<InnerContainer>
					<img src={data.img} alt={data.id} />
					<p>{capitalize(data.id)}</p>
				</InnerContainer>

				<input
					{...data}
					onClick={() => setIsCheck(!isCheck)}
					onChange={e => handleCheckbox(e, data)}
				/>
				<i className='fa-solid fa-circle-check'></i>
			</Container>
		</label>
	);
};

export default Checkbox;
