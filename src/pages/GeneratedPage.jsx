import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import showdown from 'showdown';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Toaster, toast } from 'react-hot-toast';

import { Btn } from '../shared/Buttons';

export const GeneratedPage = () => {
	const { state } = useLocation();
	const { project_title, description, installation, features, social_links } =
		state;

	const [template, setTemplate] = useState(``);
	const [templateHTML, setTemplateHTML] = useState(``);

	useEffect(() => {
		const itemList = (obj) => {
			let elements = [];
			for (const key in obj) {
				Object.hasOwnProperty.call(obj, key) && elements.push(obj[key]);
			}
			return elements.map((e) => `- ${e}`).join('\n');
		};

		const socialMediaLinks = (linksObj) => {
			let array = Object.keys(linksObj); // Getting the key
			let links = Object.values(linksObj); // Getting the links

			return array
				.map(
					(el, index) =>
						`<a href="${links[index]}" target="_blank"><img width="20" height="20" src="https://img.shields.io/badge/${el}-%230077B5.svg??style=social&logo=${el}&logoColor=white"/></a>`
				)
				.join(' ');
		};

		let converter = new showdown.Converter();

		let md =
			`# ${project_title} 💻\n` +
			`## Description 📚\n` +
			` ${description} \n` +
			`## Installation 🛠\n` +
			` ${installation} \n` +
			`## App features 💎\n` +
			`${itemList(features)} \n` +
			`## Social media 😃\n` +
			`${socialMediaLinks(social_links)}`;

		let html = converter.makeHtml(md);
		setTemplate(md);
		setTemplateHTML(html);
	});

	return (
		<Container>
			<Toaster position='bottom-right' />
			{/* 	<ReadmeContainer>{template}</ReadmeContainer> */}
			<Preview>
				{parse(templateHTML)}
				<div className='buttons'>
					<CopyToClipboard text={template}>
						<Btn
							onClick={() => toast.success('Copied')}
							className='copy-clipboard'
						>
							<ion-icon name='copy-outline'></ion-icon>
						</Btn>
					</CopyToClipboard>
				</div>
			</Preview>
			<Link to='/generator'>
				<Btn>
					<ion-icon name='arrow-back-outline'></ion-icon> Back to edit
				</Btn>
			</Link>
		</Container>
	);
};

const Container = styled.main`
	display: grid;
	gap: 1.5rem;
	.buttons {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		position: absolute;
		right: 0;
		bottom: 0;
	}
`;

const Preview = styled.section`
	img {
		width: auto;
	}
	font-size: 1.3rem;
	padding: 2rem 4rem;
	position: relative;
	// Neomorphism
	border-radius: 10px;
	background: #faf6ff;
	box-shadow: inset 20px 20px 60px #d5d1d9, inset -20px -20px 60px #ffffff;
`;

const ReadmeContainer = styled(Preview)`
	display: grid;
	padding: 2rem;
	font-size: 1.3rem;
	// Neomorphism
	border-radius: 10px;
	background: #faf6ff;
	box-shadow: inset 20px 20px 60px #d5d1d9, inset -20px -20px 60px #ffffff;
`;
