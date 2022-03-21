import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Btn } from '../shared/Buttons';
import variables from '../shared/variables.json';
import github from '../shared/assets/logo-github.svg';
import facebook from '../shared/assets/logo-facebook.svg';
import linkedin from '../shared/assets/logo-linkedin.svg';
import {
	TextAreaQuestion,
	InputTextQuestion,
	SocialMediaLink,
} from './Question';

export const Questions = () => {
	const [answers, setAnswers] = useState({
		project_title: '',
		description: '',
		installation: '',
		features: {},
		social_links: {},
	});

	// This function is used for save value of multiple inputs
	const handleMultipleInputs = (e, stateProperty) => {
		const targetName = e.target.name;
		const targetValue = e.target.value;
		// Select the single property of our answers state
		let property = answers[stateProperty];
		// Overwriting the property
		property = { ...property, [targetName]: targetValue };
		// Adding to the actual state
		setAnswers({ ...answers, [stateProperty]: property });
	};

	const handleInputChange = (e) => {
		const target = e.target;
		setAnswers({
			...answers,
			[target.name]: target.value,
		});
	};

	return (
		<Container>
			<div className='questions'>
				<QuestionContainer>
					<span>Title Project</span>
					<InputTextQuestion
						onChange={(e) => handleInputChange(e)}
						type='text'
						name='project_title'
						placeholder='Weather'
					/>
				</QuestionContainer>
				<QuestionContainer>
					<span>Description</span>
					<TextAreaQuestion
						onChange={(e) => handleInputChange(e)}
						name='description'
						type='text'
						placeholder='This application...'
					/>
				</QuestionContainer>
				<QuestionContainer>
					<span>Installation</span>
					<TextAreaQuestion
						onChange={(e) => handleInputChange(e)}
						as='textarea'
						name='installation'
						placeholder='To run this app you need...'
					/>
				</QuestionContainer>
				<QuestionContainer>
					<span>App features</span>
					<div className='grid'>
						<InputTextQuestion
							onChange={(e) => handleMultipleInputs(e, 'features')}
							name='feature1'
							type='text'
							placeholder='Search temperature'
						/>
						<InputTextQuestion
							onChange={(e) => handleMultipleInputs(e, 'features')}
							name='feature2'
							type='text'
							placeholder='Search weather'
						/>
						<InputTextQuestion
							onChange={(e) => handleMultipleInputs(e, 'features')}
							name='feature3'
							type='text'
							placeholder='Search temperature'
						/>
						<InputTextQuestion
							onChange={(e) => handleMultipleInputs(e, 'features')}
							name='feature4'
							type='text'
							placeholder='Search weather'
						/>
					</div>
				</QuestionContainer>
				<QuestionContainer>
					<span>Social Media</span>
					<div className='grid'>
						<div className='linkQuestion'>
							<img src={github} alt='github' />
							<SocialMediaLink
								onChange={(e) => handleMultipleInputs(e, 'social_links')}
								name='github'
								placeholder='https://github.com/joselatines'
							/>
						</div>
						<div className='linkQuestion'>
							<img src={linkedin} alt='linkedin' />
							<SocialMediaLink
								onChange={(e) => handleMultipleInputs(e, 'social_links')}
								name='linkedin'
								placeholder='https://linkedin/joselatines'
							/>
						</div>
						<div className='linkQuestion'>
							<img src={facebook} alt='facebook' />
							<SocialMediaLink
								onChange={(e) => handleMultipleInputs(e, 'social_links')}
								name='facebook'
								placeholder='https://facebook/joselatines'
							/>
						</div>
					</div>
				</QuestionContainer>
			</div>
			<Link to={`/generated/${answers.project_title}`} state={answers}>
				<Btn>Generate README</Btn>
			</Link>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	align-items: center;
	gap: 3rem;
	.questions {
		display: grid;
		gap: 3rem;
		grid-template-columns: auto;
	}
`;

const QuestionContainer = styled.div`
	display: grid;
	grid-template-columns: auto;
	gap: 0.5rem;
	span {
		font-weight: ${variables.font.bold};
		z-index: 10; // Above shadow
	}
	.grid {
		display: grid;
		grid-template-columns: auto auto;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}
	.linkQuestion {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		img {
			width: 3rem;
			z-index: 10; // Above shadow
			// Neumorphism
			border-radius: 10px;
			border-bottom: 2px solid ${variables.colors.gray};
			background: linear-gradient(145deg, #e1dde6, #ffffff);
			box-shadow: 17px 17px 34px #d5d1d9, -17px -17px 34px #ffffff;
			overflow: hidden;
		}
	}
`;
