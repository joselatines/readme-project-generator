import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Btn } from './Buttons';

export const Navigation = () => {
	return (
		<Container>
			<ul>
				<li>
					<Link to='/generator'>Generator</Link>
				</li>

				<li>
					<Link to='/contribute'>Contribute</Link>
				</li>
				<li>About</li>
				<li>
					<Btn>Fork</Btn>
				</li>
			</ul>
		</Container>
	);
};

const Container = styled.nav`
	font-size: 1.3rem;
	overflow: hidden;
	// Neumorphism
	border-radius: 50px;
	background: #faf6ff;
	box-shadow: inset 20px 20px 60px #d5d1d9, inset -20px -20px 60px #ffffff;

	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;

	ul {
		display: flex;
		align-items: center;
		gap: 1rem;
		list-style-type: none;
		li {
		}
	}
`;
