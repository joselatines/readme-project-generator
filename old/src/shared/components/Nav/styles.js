import styled from 'styled-components';
import { VAR } from '../../styles/GlobalStyles';

export const Container = styled.nav`
	background-color: ${VAR.colors.white};
	padding: 2rem 7rem;
	font-size: smaller;

	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	@media screen and (max-width: 50em) {
		justify-content: center;
		gap: 1rem;
		padding: 2rem;
	}

	position: fixed;
	width: 100%;
	left: 0;
	z-index: 100;
`;
export const Column = styled.div``;
