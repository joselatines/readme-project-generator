import styled from 'styled-components';
import { VAR } from '../../../shared/styles/GlobalStyles';

export const Container = styled.div``;

export const Input = styled.input`
	outline: none;

	min-width: 10rem;

	border: solid 3px ${VAR.colors.secondary};
	border-radius: 5px;
	padding: 1rem;
	&:focus {
		border-color: ${VAR.colors.primary};
	}
`;

export const Name = styled.span`
	display: block; // Because it is a span
	font-weight: 500;

	cursor: unset;
`;
export const TextArea = styled(Input)`
	min-height: 8em;
	max-height: 25em;
	min-width: 100%;
	font-family: unset;
	resize: vertical;
`;
export const DeleteBtn = styled.div`
	position: absolute;
	top: 0;
	right: 0;
`;
export const InputContainer = styled.div`
	position: relative;
	width: auto;
	border-radius: 5px;
	overflow: hidden;
`;
