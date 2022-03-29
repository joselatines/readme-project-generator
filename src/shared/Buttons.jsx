import styled, { css } from 'styled-components';
import variables from './variables.json';

export const Btn = styled.button`
	all: unset;
	// Neumorphism
	border-radius: 50px;
	box-shadow: 5px 5px 60px #a197d9, -5px -5px 60px #d9cdff;

	background-color: ${variables.colors.primary};
	padding: 5px 20px;
	cursor: pointer; 
	transition: background-color ${variables.transition.short};
	z-index: 10;
	text-align: center;
	display: flex;
	align-items: center;
	gap: 5px;
	justify-content: center;
	width: fit-content;

	&:hover {
		background-color: unset;
		border: 2px solid unset;
	}

	${(props) =>
		props.outline &&
		css`
			background-color: ${variables.colors.bg};
			border: 2px solid ${variables.colors.primary};
			&:hover {
				outline: unset;
				background-color: ${variables.colors.primary};
			}
		`}
`;
