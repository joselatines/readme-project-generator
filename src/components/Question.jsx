import styled from 'styled-components';

import variables from '../shared/variables.json';

export const ImgCheckBox = ({ tool, img, handleCheckBox, stateProperty }) => {
	return (
		<CheckBoxContainer>
			<input
				type='checkbox'
				id={tool}
				onChange={(e) => handleCheckBox(tool, img, e, stateProperty)}
			/>
			<label htmlFor={tool}>
				<img style={{ width: '4rem' }} src={img} alt={tool} />
			</label>
		</CheckBoxContainer>
	);
};

export const InputTextQuestion = styled.input`
	font-size: 20px;
	all: unset;
	border-bottom: 3px solid ${variables.colors.gray};
	// Neumorphism
	border-radius: 10px;
	background: #ffffff;
	box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
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

const CheckBoxContainer = styled.div`
	position: relative;
	input {
		position: absolute;
		top: 0;
		right: 0;
	}
`;
