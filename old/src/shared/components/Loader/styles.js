import styled from 'styled-components';
import { VAR } from '../../styles/GlobalStyles';

export const Container = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 101;
`;

export const Spinner = styled.div`
	/* From uiverse.io by @AqFox */
	width: 56px;
	height: 56px;
	display: grid;
	border: 4px solid #0000;
	border-radius: 50%;
	border-right-color: ${VAR.colors.primary};
	animation: spinner-a4dj62 1s infinite linear;

	&::before,
	&::after {
		content: '';
		grid-area: 1/1;
		margin: 2px;
		border: inherit;
		border-radius: 50%;
		animation: spinner-a4dj62 2s infinite;
	}

	&::after {
		margin: 8px;
		animation-duration: 3s;
	}

	@keyframes spinner-a4dj62 {
		100% {
			transform: rotate(1turn);
		}
	}
`;
