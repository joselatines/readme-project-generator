import styled from 'styled-components';
import { VAR } from '../../../shared/styles/GlobalStyles';

export const Container = styled.div`
	position: relative;
`;

export const Input = styled.input`
	outline: none;

	min-width: 10em;
	width: 100%;
	max-width: 20%;
	border: solid 2px ${VAR.colors.secondary};
	border-radius: 5px;
	padding: 1rem;
	&:focus {
		border: solid 2px ${VAR.colors.primary};
	}
`;

export const Name = styled.span`
	display: block; // Because it is a span
	font-weight: 500;

	/* 	position: absolute;
	transform: translate(1em, -50%);
	top: 50%; */
	cursor: unset;
`;
export const TextArea = styled(Input)`
	min-height: 8em;
	max-height: 25em;
	max-width: 100%;
	font-family: unset;
	resize: vertical;
`;
