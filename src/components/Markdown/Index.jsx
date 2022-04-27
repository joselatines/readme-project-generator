import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useSelector } from 'react-redux';
import remarkGfm from 'remark-gfm';
import { capitalize } from '../../shared/functions/stringModifiers';
import { Container } from './styles';

const Markdown = () => {
	const templateMarkdown = `# Title
    ## Description
    Brief description
    
    ## Installation
    Brief installation description
    
    ## Project features
    - Feature 1
    - Feature 2
    
    ## Frontend development
    ![Tor](https://img.shields.io/badge/Tor-7D4698?style=for-the-badge&logo=Tor-Browser&logoColor=white)
    
    ## Backend development
    ![Tor](https://img.shields.io/badge/Tor-7D4698?style=for-the-badge&logo=Tor-Browser&logoColor=white)
    
    ## Testing 
    ![Tor](https://img.shields.io/badge/Tor-7D4698?style=for-the-badge&logo=Tor-Browser&logoColor=white)
    
    ## Tools 
    ![Tor](https://img.shields.io/badge/Tor-7D4698?style=for-the-badge&logo=Tor-Browser&logoColor=white)`;
	const [MD, setMD] = useState(`5`);
	const template = useSelector(state => state.fieldsData.template);

	useEffect(() => {
		const title = template.title.length >= 1 ? `# ${template.title} 💻` : '';
		const description =
			template.description.length >= 1
				? `# Description \n ${template.description} 📚`
				: '';
		const installation =
			template.installation.length >= 1
				? `# Installation \n ${template.installation} 💡`
				: '';

		const displayFeatures = features => {
			const values = Object.values(features);
			let format;

			if (values.length >= 1) {
				const featuresList = values
					.filter(value => value.length >= 1) // Only fill strings
					.map(value => `- ${value}`)
					.join('\n');

				format = `# App features \n ${featuresList}`;
				return format;
			}
			return format;
		};

		const displayCheckboxes = (checkboxes, title) => {
			let format = ``;

			if (checkboxes.length >= 1) {
				const list = checkboxes
					.map(
						({ value }) =>
							`![${capitalize(
								value
							)}](https://img.shields.io/badge/${value}-9558B2.svg?style=for-the-badge&logo=${value})`
					)
					.join(' ');

				format = `${title} \n ${list}`;
				return format;
			}

			return format;
		};
		const markdownTemplate = `
		${title}
		${description}\n
		${installation} \n
		${displayFeatures(template.features)} \n
		${displayCheckboxes(template.frontend, 'Frontend Development')} \n
		${displayCheckboxes(template.backend, 'Backend Development')} \n
		${displayCheckboxes(template.testing, 'Testing')} \n
		${displayCheckboxes(template.tools, 'Tools')}

		`;

		setMD(markdownTemplate);
	}, [MD]);

	return (
		<Container>
			<h1>Markdown</h1>
			<div>
				<ReactMarkdown children={MD} remarkPlugins={[remarkGfm]} />
			</div>
		</Container>
	);
};

export default Markdown;
