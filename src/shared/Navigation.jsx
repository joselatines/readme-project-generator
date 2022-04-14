import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Btn } from './Buttons';

export const Navigation = () => {
	return (
		<Container>
			<Link className='logo' to='/'>
				README Generator
			</Link>
			<ul>
				<li>
					<a
						href='https://github.com/joselatines/project-description-generator'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Btn className='btn'>
							Contribute<i className='fa-solid fa-code-fork'></i>
						</Btn>
					</a>
				</li>
			</ul>
		</Container>
	);
};

const Container = styled.nav`
	font-size: 1.3rem;
	overflow: hidden;
	padding: 1rem;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 3rem;
	// Neumorphism
	border-radius: 50px;
	background: #ffffff;
	box-shadow: inset 20px 20px 60px #d9d9d9, inset -20px -20px 60px #ffffff;

	@media only screen and (max-width: 40em) {
		justify-content: center;
		
	}

	.logo {
		font-weight: 800;
	}

	ul {
		display: flex;
		align-items: center;
		gap: 1rem;
		list-style-type: none;
		li .btn {
			i {
				font-size: 16px;
			}
		}
	}
`;
