import { createSlice } from '@reduxjs/toolkit';
import {
	css,
	html,
	python,
	react,
	jest,
	photoshop,
	cPlusPlus,
	cSharp,
	java,
	nodejs,
	php,
	swift,
	angular,
	vue,
	babel,
	bootstrap,
	javascript,
	redux,
	sass,
	typescript,
	xd,
	illustrator,
	figma,
} from './images';

const initialState = {
	template: {
		title: '',
		description: '',
		installation: '',
		features: {},
		programmingLanguages: [],
		frontend: [],
		backend: [],
		testing: [],
		tools: [],
	},
	basics: [
		{
			title: 'Title project',
			id: 'title',
			type: 'text',
			placeholder: 'My weather app',
		},
		{
			title: 'Description',
			id: 'description',
			textarea: true,
			placeholder: 'This project...',
		},
		{
			title: 'Installation',
			id: 'installation',
			textarea: true,
			placeholder: 'To run this project you need...',
		},
	],
	features: [
		{
			id: 'feature_1',
			type: 'text',
			placeholder: 'Feature 1',
		},
		{
			id: 'feature_2',
			type: 'text',
			placeholder: 'Feature 2',
		},
		{
			id: 'feature_3',
			type: 'text',
			placeholder: 'Feature 3',
		},
		{
			id: 'feature_4',
			type: 'text',
			placeholder: 'Feature 4',
		},
		{
			id: 'feature_5',
			type: 'text',
			placeholder: 'Feature 5',
		},
	],
	checkboxes: {
		frontend: [
			{
				id: 'html',
				value: 'html',
				img: html,
				name: 'frontend',
			},
			{
				id: 'css',
				value: 'css',
				img: css,
				name: 'frontend',
			},
			{
				id: 'javascript',
				value: 'javascript',
				img: javascript,
				name: 'frontend',
			},
			{
				id: 'typescript',
				value: 'typescript',
				img: typescript,
				name: 'frontend',
			},
			{
				id: 'react',
				value: 'react',
				img: react,
				name: 'frontend',
			},
			{
				id: 'angular',
				value: 'angular',
				img: angular,
				name: 'frontend',
			},
			{
				id: 'vue',
				value: 'vue',
				img: vue,
				name: 'frontend',
			},
			{
				id: 'redux',
				value: 'redux',
				img: redux,
				name: 'frontend',
			},
			{
				id: 'babel',
				value: 'babel',
				img: babel,
				name: 'frontend',
			},
			{
				id: 'bootstrap',
				value: 'bootstrap',
				img: bootstrap,
				name: 'frontend',
			},
			{
				id: 'sass',
				value: 'sass',
				img: sass,
				name: 'frontend',
			},
		],
		backend: [
			{
				id: 'python',
				value: 'python',
				img: python,
				name: 'backend',
			},
			{
				id: 'cPlusPlus',
				value: 'c++',
				img: cPlusPlus,
				name: 'backend',
			},
			{
				id: 'cSharp',
				value: 'c#',
				img: cSharp,
				name: 'backend',
			},
			{
				id: 'php',
				value: 'php',
				img: php,
				name: 'backend',
			},
			{
				id: 'java',
				value: 'java',
				img: java,
				name: 'backend',
			},
			{
				id: 'nodejs',
				value: 'node',
				img: nodejs,
				name: 'backend',
			},
			{
				id: 'swift',
				value: 'swift',
				img: swift,
				name: 'backend',
			},
		],
		testing: [
			{
				id: 'jest-id',
				value: 'jest',
				img: jest,
				name: 'testing',
			},
		],
		tools: [
			{
				id: 'photoshop',
				value: 'photoshop',
				img: photoshop,
				name: 'tools',
			},
			{
				id: 'xd',
				value: 'xd',
				img: xd,
				name: 'tools',
			},
			{
				id: 'illustrator',
				value: 'illustrator',
				img: illustrator,
				name: 'tools',
			},
			{
				id: 'figma',
				value: 'figma',
				img: figma,
				name: 'tools',
			},
		],
	},
	id: 0,
};

const fieldsSlice = createSlice({
	name: 'fieldsData',
	initialState,
	reducers: {
		// Pass an obj through params and modifies the template state
		fillTemplate: (state, action) => {
			state.template = action.payload;
		},
		addFeatureField: state => {
			const id = (state.id += 1);
			state.features.push({
				id: `feature_${id}`,
				type: 'text',
				placeholder: 'Add feature',
				deleteFeature: true,
			});
		},
		fillCheckboxes: (state, action) => {
			state.template = action.payload;
		},
		deleteFeatureField: (state, action) => {
			const newFeatures = state.features.filter(
				feature => feature.id !== action.payload
			);
			state.template.features = newFeatures;
			state.features = newFeatures;
		},
		resetFields: state => {
			state.template = {
				title: '',
				description: '',
				installation: '',
				features: [],
				programmingLanguages: [],
				frontend: [],
				backend: [],
				testing: [],
				tools: [],
			};
		},
	},
});

export const {
	fillTemplate,
	addFeatureField,
	deleteFeatureField,
	fillCheckboxes,
	resetFields,
} = fieldsSlice.actions;

export default fieldsSlice.reducer;
