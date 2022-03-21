import styled from 'styled-components';

import variables from '../shared/variables.json';

export const InputTextQuestion = styled.input`
	font-size: 20px;
	all: unset;
	border-bottom: 3px solid unset;
	// Neumorphism
	border-radius: 10px;
	border-bottom: 2px solid ${variables.colors.gray};
	background: linear-gradient(145deg, #e1dde6, #ffffff);
	box-shadow: 17px 17px 34px #d5d1d9, -17px -17px 34px #ffffff;
	overflow: hidden;

	padding: 1rem;

	&:focus {
		border-bottom: 3px solid ${variables.colors.primary};
		box-shadow: 17px 17px 34px #a197d9, -17px -17px 34px #d9cdff;
	}
`;
export const TextAreaQuestion = styled(InputTextQuestion)`
	word-wrap: break-word;
`;

export const SocialMediaLink = styled(InputTextQuestion)``;
