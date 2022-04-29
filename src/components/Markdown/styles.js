import styled from 'styled-components';
import { VAR } from '../../shared/styles/GlobalStyles';

export const Container = styled.section`
	display: grid;
	grid-template-columns: 1fr;
	grid-auto-rows: auto;
	gap: .5rem;
	@media screen and (max-width: 50em) {
		font-size: smaller;
	}
`;
export const ContainerPreview = styled.div`
	border-radius: 15px;
	background-color: ${VAR.colors.white};
	min-width: 100%;
	padding: 2rem;
	font-size: smaller;
`;

export const Buttons = styled.div`
	display: flex;
	flex-wrap: wrap;

	gap: 1rem;
	font-size: 0.7em;
	margin: 1rem 0;
`;
export const Title = styled.span`
	font-size: larger;
	font-weight: bolder;
`;
