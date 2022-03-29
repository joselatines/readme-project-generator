import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Btn } from '../shared/Buttons';

export const HomePage = () => {
	return (
		<Container>
			<h1>Welcome to Readme project generator</h1>
			<span>Every good project needs a good description</span>
			<div className='btnContainer'>
				<Link to='generator'>
					<Btn>
						<i className='fa-solid fa-robot'></i>Generate README
					</Btn>
				</Link>
				<a
					href='https://github.com/joselatines/project-description-generator'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Btn outline className='btn'>
						Contribute<i className='fa-solid fa-code-fork'></i>
					</Btn>
				</a>
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
