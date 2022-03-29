import styled from 'styled-components';

export const Footer = () => {
	return (
		<Container>
			<span>
				Made with 💜 by{' '}
				<a
					href='https://github.com/joselatines'
					target='_blank'
					rel='noopener noreferrer'
				>
					Jose Latines
				</a>{' '}
			</span>
		</Container>
	);
};

const Container = styled.nav`
	font-size: 1.3rem;
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	margin-top: 3rem;
	// Neumorphism
	border-radius: 50px;
	background: #ffffff;
	box-shadow: inset 20px 20px 60px #d9d9d9, inset -20px -20px 60px #ffffff;
`;
