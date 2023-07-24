import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import parse from 'html-react-parser';
import showdown from 'showdown';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { StyledLink } from '../../shared/styles/GlobalStyles';
import { Container, ContainerPreview, Buttons, Title } from './styles';
import { Button } from '../../shared/components';

import { resetFields } from '../../features/fieldsData/fieldsSlice';
import toast, { Toaster } from 'react-hot-toast';

const Markdown = () => {
	const [markdown, setMarkdown] = useState(`# Example`);
	const [html, setHtml] = useState(`<h1>Example</h1>`);

	const dispatch = useDispatch();

	const template = useSelector(state => state.fieldsData.template);

	useEffect(() => {
		let txt = ``;
		const formatTemplate = () => {
			const title = template.title.length >= 1 ? `# ${template.title} 💻` : '';
			const description =
				template.description.length >= 1
					? `## Description 📚\n ${template.description} `
					: '';
			const installation =
				template.installation.length >= 1
					? `## Installation 💡 \n ${template.installation}`
					: '';

			const displayFeatures = features => {
				const values = Object.values(features);
				let format = ``;

				if (values.length >= 1) {
					const featuresList = values
						.filter(value => value.length >= 1) // Only strings with content
						.map(value => `- ${value}`)
						.join('\n');

					format = `## App features 🪐\n ${featuresList}`;
					return format;
				}
				return format;
			};

			const displayCheckboxes = (checkboxes, title) => {
				let format = ``;

				if (checkboxes.length >= 1) {
					const list = checkboxes.map(({ badge }) => badge).join(' ');

					format = `${title} \n ${list}`;
					return format;
				}

				return format;
			};

			txt =
				`${title}\n` +
				`${description}\n` +
				`${installation} \n` +
				`${displayFeatures(template.features)} \n` +
				`${displayCheckboxes(
					template.frontend,
					'## Frontend Development 🌞'
				)} \n` +
				`${displayCheckboxes(
					template.backend,
					'## Backend Development 🌚'
				)} \n` +
				`${displayCheckboxes(template.testing, '## Testing 💫')} \n` +
				`${displayCheckboxes(template.tools, '## Tools 🎨')}`;
		};

		formatTemplate();
		const converter = new showdown.Converter();
		const htmlConverted = converter.makeHtml(txt);

		setMarkdown(txt);
		setHtml(htmlConverted);
	}, []);

	return (
		<Container>
			<Toaster position='bottom-right' />
			<Title>Markdown</Title>
			<ContainerPreview>{parse(html)}</ContainerPreview>
			<Buttons>
				<StyledLink to='/'>
					<Button onClick={() => dispatch(resetFields())}>
						<i className='fa-solid fa-arrow-left-long'></i>
						<span>Back to edit</span>
					</Button>
				</StyledLink>
				<CopyToClipboard text={markdown}>
					<Button
						outline={true}
						onClick={() => toast.success('Successfully toasted!')}
					>
						<i className='fa-solid fa-copy'></i>Copy to clipboard
					</Button>
				</CopyToClipboard>
			</Buttons>
		</Container>
	);
};

export default Markdown;
