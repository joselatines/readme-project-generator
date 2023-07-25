import * as Yup from "yup";

export const validationSchema = Yup.object({});

export const initialValues: any = {
	technologies: [],
	title: "",
	description: "",
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
		placeholder: "This project...",
	},
	{
		label: "Installation",
		name: "installation",
		type: "textarea",
		placeholder: "To run this project you need...",
	},
	{
		label: "Features",
		name: "features",
		type: "textarea",
		placeholder: "CRUD actions, search people, google map api, etc...",
	},
];
