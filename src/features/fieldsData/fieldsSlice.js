import { createSlice } from '@reduxjs/toolkit';
import { css, html, python } from './images';

const initialState = {
	template: {
		title: '',
		description: '',
		installation: '',
		features: [],
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
			id: 'feature_0',
			type: 'text',
			placeholder: 'Example: Search weather',
		},
		{
			id: 'feature_1',
			type: 'text',
			placeholder: 'Feature 2',
		},
		{
			id: 'feature_2',
			type: 'text',
			placeholder: 'Feature 3',
		},
		{
			id: 'feature_3',
			type: 'text',
			placeholder: 'Feature 4',
		},
	],
	checkboxes: {
		frontend: [
			{
				id: 'html',
				value: 'html',
				type: 'checkbox',
				img: html,
				name: 'frontend',
			},
			{
				id: 'css',
				value: 'css',
				type: 'checkbox',
				img: css,
				name: 'frontend',
			},
		],
		backend: [
			{
				id: 'python',
				value: 'python',
				type: 'checkbox',
				img: python,
				name: 'backend',
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
		fillFeatures: (state, action) => {
			state.template.features = action.payload;
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
	},
});

export const {
	fillTemplate,
	addFeatureField,
	deleteFeatureField,
	fillFeatures,
	fillCheckboxes,
} = fieldsSlice.actions;

export default fieldsSlice.reducer;
