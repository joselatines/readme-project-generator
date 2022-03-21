import styled from 'styled-components';

export const Footer = () => {
	return <Container>Footer</Container>;
};

const Container = styled.nav`
	font-size: 1.3rem;
	overflow: hidden;

	// Neumorphism
	background: #faf6ff;
	box-shadow: inset 20px 20px 60px #d5d1d9, inset -20px -20px 60px #ffffff;

	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;
