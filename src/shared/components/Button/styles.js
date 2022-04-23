import styled, { css } from 'styled-components';
import { VAR } from '../../styles/GlobalStyles';
const Button = styled.button`
	all: unset;
	cursor: pointer;

	background-color: ${({ color }) => (color ? color : VAR.colors.primary)};
	color: ${({ color }) => (color ? color : VAR.colors.white)};

	font-size: 1em;
	padding: 0.5em 2em;
	border: 3px solid transparent;
	border-radius: 5px;

	// For icons
	display: flex;
	place-items: center;
	gap: 0.5em;

	transition: all ${VAR.transitions.css};
	&:hover {
		transform: scale(1.05);
	}

	${({ outline }) =>
		outline &&
		css`
			background-color: transparent;
			color: ${VAR.colors.primary};
			border: 3px solid ${VAR.colors.primary};
			&:hover {
				color: ${VAR.colors.white};
				background-color: ${VAR.colors.primary};
			}
		`}
`;
export default Button;
