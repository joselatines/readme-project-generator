import styled from 'styled-components';
import { VAR } from '../../../shared/styles/GlobalStyles';

export const Container = styled.div`
	font-size: clamp(1em, 1vw, 5em);
	max-height: 30vh;
	min-height: 22vh;

	position: relative;

	display: grid;
	place-items: center;
	padding: 0.8em;
	border: solid 3px
		${({ checked }) => (checked ? VAR.colors.primary : VAR.colors.secondary)};
	box-shadow: -1px 5px 15px -7px ${({ checked }) => (checked ? VAR.colors.primary : VAR.colors.secondary)};
	border-radius: 15px;
	background-color: ${VAR.colors.white};
	color: ${({ checked }) =>
		checked ? VAR.colors.primary : VAR.colors.secondary};

	i {
		display: none;
		position: absolute;
		top: 5px;
		left: 5px;
	}

	input[type='checkbox'] {
		position: absolute;
		all: unset;
		&:checked ~ i {
			display: block;
		}
	}
`;

export const InnerContainer = styled.div`
	min-width: 4em;
	max-width: 30vw;
	display: grid;
	place-items: center;

	img {
		max-width: 6vw;
		min-width: 4em;
		object-fit: contain;
	}
`;
