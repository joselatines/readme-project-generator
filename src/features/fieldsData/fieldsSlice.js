import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	template: {
		title: '',
		description: '',
		installation: '',
		features: [''],
		programmingLanguages: [''],
		frontend: [''],
		backend: [''],
		testing: [''],
		tools: [''],
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
		// Como mierda haras para hacer el to-do en esto
		{
			title: 'Installation',
			id: 'installation',
			textarea: true,
			placeholder: 'To run this project you need...',
		},
	],
	features: [
		{
			id: 'feature',
			type: 'text',
			placeholder: 'Search weather',
		},
	],
	checkboxes: [
		{
			title: 'Title project',
			id: 'title',
			type: 'text',
			placeholder: 'My weather app',
		},
	],
};

const fieldsSlice = createSlice({
	name: 'fieldsData',
	initialState,
	reducers: {
		addField: (state, action) => {
			state.template = action.payload;
		},
	},
});

export const { addField } = fieldsSlice.actions;

export default fieldsSlice.reducer;
