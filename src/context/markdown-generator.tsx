import { createContext, useState } from "react";
import { MarkdownTemplate } from "../interfaces/markdown-template.interface";

interface ContextProps {
	setTemplateData: (data: MarkdownTemplate) => void;
	markdownTemplateData: MarkdownTemplate;
	markdownTemplate: string;
}

const defaultMarkdownTemplate = {
	technologies: [],
	title: "",
	description: "",
	features: [],
};

const defaultValues: ContextProps = {
	setTemplateData: defaultMarkdownTemplate => null,
	markdownTemplateData: defaultMarkdownTemplate,
	markdownTemplate: "",
};

// 1. create context
export const MarkdownContext = createContext<ContextProps>(defaultValues);

interface Props {
	children: JSX.Element;
}

// 2. create provider
export function MarkdownProvider({ children }: Props) {
	const [markdownTemplateData, setMarkdownTemplateData] =
		useState<MarkdownTemplate>(defaultMarkdownTemplate);
	const [markdownTemplate, setMarkdownTemplate] = useState("");

	const setTemplateData = (data: MarkdownTemplate) => {
		console.log(1);
		setMarkdownTemplateData(data);
		generateMarkdown(data);
	};

	const generateMarkdown = (dataTemplate: MarkdownTemplate) => {
		const title = dataTemplate.title || "title example";
		const description = dataTemplate.description || "description example";
		const features = dataTemplate.features || "title example";
		const technologies = dataTemplate.technologies || "title example";

		const template = `
# ${title} 💻

## Description 📚
${description}

## Features 🌞
${features} 

## Technologies 🌞 
${technologies}
 ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) 
		`;

		setMarkdownTemplate(template);
	};

	return (
		<MarkdownContext.Provider
			value={{
				markdownTemplateData,
				markdownTemplate,
				setTemplateData,
			}}
		>
			{children}
		</MarkdownContext.Provider>
	);
}
