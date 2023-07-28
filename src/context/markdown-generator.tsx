import { createContext, useState } from "react";
import { MarkdownTemplate } from "../interfaces/markdown-template.interface";
import data from "../assets/data.json";

interface Technology {
	name: string;
	label: string;
	type: string;
	badge: string;
}

interface ContextProps {
	setTemplateData: (data: MarkdownTemplate) => void;
	markdownTemplateData: MarkdownTemplate;
	markdownTemplate: string;
}

const defaultMarkdownTemplate = {
	technologies: [],
	title: "",
	description: "",
	installation: "",
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
		setMarkdownTemplateData(data);
		generateMarkdown(data);
	};

	const generateMarkdown = (dataTemplate: MarkdownTemplate) => {
		console.log({ dataTemplate });
		const title = dataTemplate.title || "Title example";
		const description =
			dataTemplate.description || "This is a description example...";
		const features = dataTemplate.features || [
			"Amazing feature number one",
			"Another amazing feature",
		];
		const technologies = dataTemplate.technologies || [
			"javascript",
			"react",
			"nodejs",
		];

		const renderTechnologiesBadges = (
			allTechnologies: Technology[],
			currentTechnologies: string[]
		) => {
			const technologiesGiven = allTechnologies.filter(techData =>
				currentTechnologies.some(techUser =>
					techUser.toLowerCase().includes(techData.name.toLowerCase())
				)
			);

			return technologiesGiven
				.map(techData => `${techData.badge} \n`)
				.join(" ");
		};

		const renderFeatures = (features: string[]) =>
			features.map(feature => `- ${feature} \n`).join(" ");

		const template = `# 💻 ${title} 💻

## 📚 Description 📚
${description}

## 🚀 Features 🚀
${renderFeatures(features)}

## 🤖 Technologies 🤖
${renderTechnologiesBadges(data.technologies, technologies)}
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
