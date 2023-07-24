import styled from 'styled-components';
import { VAR } from '../../styles/GlobalStyles';

export const Container = styled.nav`
	background-color: ${VAR.colors.white};
	padding: 2rem 7rem;
	font-size: smaller;

	display: flex;
	align-items: center;
	justify-content: space-between;

	position: absolute;
	width: 100%;
	left: 0;
	bottom: 0;
	z-index: 100;

	@media screen and (max-width: 50em) {
		flex-direction: column;
		justify-content: center;
		gap: 1rem;
		padding: 2rem;
	}
`;
export const Column = styled.div``;
export const Ul = styled.ul`
	list-style-type: none;
`;
export const Li = styled.li`
	list-style-type: none;
	font-size: smaller;
`;
export const UlTitle = styled.span`
	font-weight: bolder;
`;
