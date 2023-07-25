export interface MarkdownTemplate {
	title: string;
	technologies: string[];
	description: string;
	features: string[];
}

export interface MarkdownTemplateNotParsed {
	title: string;
	technologies: string[];
	description: string;
	features: string;
}
