import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Btn } from '../shared/Buttons';
import variables from '../shared/variables.json';

export const HomePage = () => {
	return (
		<Container>
			<h1>Welcome to Readme project generator</h1>
			<span>Every good project needs good project description</span>
			<div className='btnContainer'>
				<Link to='generator'>
					<Btn>
						<i className='fa-solid fa-robot'></i>Generate README
					</Btn>
				</Link>
				<Btn outline>
					<i className='fa-solid fa-code-fork'></i> Contribute
				</Btn>
			</div>
		</Container>
	);
};

const Container = styled.header`
	display: flex;
	gap: 1rem;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	height: 60vh;
	h1 {
		font-size: 2.5rem;
	}
	span {
		font-size: 2rem;
	}
	.btnContainer {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		margin-top: 1.5rem;
	}
`;
