import * as Yup from "yup";
import { MarkdownTemplateNotParsed } from "../../../interfaces/markdown-template.interface";

export const validationSchema = Yup.object({});

export const initialValues: MarkdownTemplateNotParsed = {
	technologies: [],
	title: "",
	description: "",
	installation: "",
	features: "",
};

export const inputsList = [
	{
		label: "Title project",
		name: "title",
		type: "text",
		placeholder: "My weather app",
	},
	{
		label: "Description",
		name: "description",
		type: "textarea",
		placeholder: "This project retrieves cookies data from NASA...",
	},
	{
		label: "Installation",
		name: "installation",
		type: "textarea",
		placeholder: "To run this project you need to install...",
	},
	{
		label: "Features",
		name: "features",
		type: "textarea",
		placeholder: "CRUD actions, search people, google map api, etc...",
	},
];
