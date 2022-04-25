import styled from 'styled-components';
import { VAR } from '../../../shared/styles/GlobalStyles';

export const Checkmark = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	height: 25px;
	width: 25px;
	background-color: ${VAR.colors.primary};
	opacity: 0;
	border-radius: 50%;
	&::after {
		content: '';
		position: absolute;
		display: none;

		left: 9px;
		top: 5px;
		width: 5px;
		height: 10px;
		border: solid white;
		border-width: 0 3px 3px 0;
		-webkit-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		transform: rotate(45deg);
	}
`;

export const Container = styled.div`
	font-size: 1em;
	max-width: 10vw;
	min-width: 3em;

	position: relative;

	display: grid;
	place-items: center;

	padding: 1rem 0;
	border: solid 2px
		${({ checked }) => (checked ? VAR.colors.primary : VAR.colors.secondary)};
	border-radius: 15px;
	background-color: ${VAR.colors.white};
	color: ${VAR.colors.secondary};

	input[type='checkbox'] {
		position: absolute;
		all: unset;
		&:checked ~ ${Checkmark} {
			opacity: 1;
			&:after {
				display: block;
			}
		}
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`;
