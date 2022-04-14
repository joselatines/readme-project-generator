import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Btn } from '../shared/Buttons';
import variables from '../shared/variables.json';

import {
	TextAreaQuestion,
	InputTextQuestion,
	SocialMediaLink,
	ImgCheckBox,
} from './Question';

export const Questions = () => {
	const [answers, setAnswers] = useState({
		project_title: '',
		description: '',
		installation: '',
		features: [],
		social_links: [],
		tools: [],
		languages: [],
		frameworks: [],
	});

	// This function is used for save the values of multiple inputs
	const handleMultipleInputs = (e, stateProperty) => {
		const targetName = e.target.name;
		const targetValue = e.target.value;
		// Select the single property of our answers state
		let property = answers[stateProperty];
		// Overwriting the property
		property = [...property, { name: targetName, content: targetValue }];
		// Adding to the actual state
		setAnswers({ ...answers, [stateProperty]: property });
	};

	const handleInputChange = e => {
		const target = e.target;
		setAnswers({
			...answers,
			[target.name]: target.value,
		});
	};

	const handleCheckBox = (tool, img, e, stateProperty) => {
		let property = answers[stateProperty];
		let target = e.target;

		if (target.checked) {
			property = [...property, { tool: tool, img: img }];

			setAnswers({ ...answers, [stateProperty]: property });
		} else {
			let newArray = property.filter(el => el.tool !== target.id);
			setAnswers({ ...answers, [stateProperty]: newArray });
		}
	};

	return (
		<Container>
			<div className='questions'>
				<QuestionContainer>
					<span>Title Project</span>
					<InputTextQuestion
						onChange={e => handleInputChange(e)}
						type='text'
						name='project_title'
						placeholder='Weather'
					/>
				</QuestionContainer>
				<QuestionContainer>
					<span>Description</span>
					<TextAreaQuestion
						onChange={e => handleInputChange(e)}
						name='description'
						type='text'
						placeholder='This application...'
					/>
				</QuestionContainer>
				<QuestionContainer>
					<span>Installation</span>
					<TextAreaQuestion
						onChange={e => handleInputChange(e)}
						as='textarea'
						name='installation'
						placeholder='To run this app you need...'
					/>
				</QuestionContainer>
				<QuestionContainer>
					<span>App features</span>
					<div className='grid'>
						<InputTextQuestion
							onBlur={e => handleMultipleInputs(e, 'features')}
							name='feature1'
							type='text'
							placeholder='Search temperature'
						/>
						<InputTextQuestion
							onBlur={e => handleMultipleInputs(e, 'features')}
							name='feature2'
							type='text'
							placeholder='Search weather'
						/>
						<InputTextQuestion
							onBlur={e => handleMultipleInputs(e, 'features')}
							name='feature3'
							type='text'
							placeholder='Share your location'
						/>
						<InputTextQuestion
							onBlur={e => handleMultipleInputs(e, 'features')}
							name='feature4'
							type='text'
							placeholder='Customize your profile'
						/>
					</div>
				</QuestionContainer>
				<QuestionContainer>
					<span>Languages</span>
					<div className='imgContainer'>
						<ImgCheckBox
							tool='javascript'
							img='https://cdn-icons-png.flaticon.com/512/5968/5968292.png'
							handleCheckBox={handleCheckBox}
							stateProperty='languages'
						/>
						<ImgCheckBox
							tool='html'
							img='https://cdn-icons-png.flaticon.com/512/919/919827.png'
							handleCheckBox={handleCheckBox}
							stateProperty='languages'
						/>
						<ImgCheckBox
							tool='python'
							img='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png'
							handleCheckBox={handleCheckBox}
							stateProperty='languages'
						/>
						<ImgCheckBox
							tool='php'
							img='https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png'
							handleCheckBox={handleCheckBox}
							stateProperty='languages'
						/>
						<ImgCheckBox
							tool='c'
							img='https://iconape.com/wp-content/files/sh/51404/svg/c--4.svg'
							handleCheckBox={handleCheckBox}
							stateProperty='languages'
						/>
					</div>
					<span>Frameworks</span>
					<div className='imgContainer'>
						<ImgCheckBox
							tool='react'
							img='https://cdn-icons-png.flaticon.com/512/1126/1126012.png'
							handleCheckBox={handleCheckBox}
							stateProperty='frameworks'
						/>
						<ImgCheckBox
							tool='vue'
							img='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png'
							handleCheckBox={handleCheckBox}
							stateProperty='frameworks'
						/>
						<ImgCheckBox
							tool='angular'
							img='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'
							handleCheckBox={handleCheckBox}
							stateProperty='frameworks'
						/>
					</div>
					<span>Tools</span>
					<div className='imgContainer'>
						<ImgCheckBox
							tool='figma'
							img='https://cdn-icons-png.flaticon.com/512/5968/5968705.png'
							handleCheckBox={handleCheckBox}
							stateProperty='tools'
						/>
						<ImgCheckBox
							tool='photoshop'
							img='https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1051px-Adobe_Photoshop_CC_icon.svg.png'
							handleCheckBox={handleCheckBox}
							stateProperty='tools'
						/>
						<ImgCheckBox
							tool='sketch'
							img='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Sketch_Logo.svg/2267px-Sketch_Logo.svg.png'
							handleCheckBox={handleCheckBox}
							stateProperty='tools'
						/>
						<ImgCheckBox
							tool='xd'
							img='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/1200px-Adobe_XD_CC_icon.svg.png'
							handleCheckBox={handleCheckBox}
							stateProperty='tools'
						/>
						<ImgCheckBox
							tool='ai'
							img='data:image/png;base64,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'
							handleCheckBox={handleCheckBox}
							stateProperty='tools'
						/>
					</div>
				</QuestionContainer>
				<QuestionContainer>
					<span>Social Media</span>
					<div className='grid'>
						<div className='linkQuestion'>
							<div className='img'>
								<i className='fa-brands fa-github'></i>
							</div>
							<SocialMediaLink
								onChange={e => handleMultipleInputs(e, 'social_links')}
								name='github'
								placeholder='https://github.com/joselatines'
							/>
						</div>
						<div className='linkQuestion'>
							<div className='img'>
								<i className='fa-brands fa-linkedin'></i>
							</div>
							<SocialMediaLink
								onChange={e => handleMultipleInputs(e, 'social_links')}
								name='linkedin'
								placeholder='https://www.linkedin.com/in/jose-latines/'
							/>
						</div>
						<div className='linkQuestion'>
							<div className='img'>
								<i className='fa-brands fa-facebook'></i>
							</div>
							<SocialMediaLink
								onChange={e => handleMultipleInputs(e, 'social_links')}
								name='facebook'
								placeholder='https://facebook/doctordraxter'
							/>
						</div>
						<div className='linkQuestion'>
							<div className='img'>
								<i className='fa-brands fa-instagram'></i>
							</div>
							<SocialMediaLink
								onChange={e => handleMultipleInputs(e, 'social_links')}
								name='instagram'
								placeholder='https://instagram/doctordraxter'
							/>
						</div>
					</div>
				</QuestionContainer>
			</div>
			<Link to={answers.project_title} state={answers}>
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
		place-items: center;
		gap: 1rem;
		@media only screen and (max-width: 40em) {
			grid-template-columns: auto;
		}
	}
	.linkQuestion {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		.img {
			font-size: 2.5rem;
			display: grid;
			align-items: center;
			justify-content: center;
			width: 3rem;
			height: 3rem;
			z-index: 10; // Above shadow
			// Neumorphism
			border-radius: 10px;
			border-bottom: 2px solid ${variables.colors.gray};
			background: linear-gradient(145deg, #e1dde6, #ffffff);
			box-shadow: 17px 17px 34px #d5d1d9, -17px -17px 34px #ffffff;
			overflow: hidden;
		}
	}
	.imgContainer {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 2rem;
	}
`;
