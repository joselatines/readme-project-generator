import styled from 'styled-components';

export const Title = styled.span`
	font-weight: bolder;
	font-size: 1.8rem;
	margin-bottom: 1rem;
	display: block;
`;

export const Checkboxes = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	@media only screen and (max-width: 40em) {
		justify-content: center;
		align-items: center;
	}
`;
