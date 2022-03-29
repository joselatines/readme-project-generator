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

	position: absolute;
	bottom: 10px;
	left: 50%;
	transform: translateX(-50%);
	width: 80%;
`;
