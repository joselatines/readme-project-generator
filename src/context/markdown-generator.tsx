import { createContext, useState } from "react";
import { MarkdownTemplate } from "../interfaces/markdown-template.interface";

interface ContextProps {
	setTemplateData: (data: MarkdownTemplate) => void;
	getTemplateData: () => void;
	markdownTemplateData: MarkdownTemplate;
}

const defaultMarkdownTemplate = {
	technologies: [],
	title: "",
	description: "",
	features: [],
};

const defaultValues: ContextProps = {
	setTemplateData: defaultMarkdownTemplate => defaultMarkdownTemplate,
	getTemplateData: () => {},
	markdownTemplateData: defaultMarkdownTemplate,
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

	const setTemplateData = (data: MarkdownTemplate) => {
		console.log(1);
		setMarkdownTemplateData(data);
	};

	const getTemplateData = () => markdownTemplateData;

	return (
		<MarkdownContext.Provider
			value={{ markdownTemplateData, setTemplateData, getTemplateData }}
		>
			{children}
		</MarkdownContext.Provider>
	);
}
