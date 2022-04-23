import { createSlice } from '@reduxjs/toolkit';

const initialState = [
	{
		name: 'Title project',
		type: 'text',
		placeholder: 'Search weather',
	},
	{
		name: 'Title project',
		type: 'text',
		placeholder: 'Search weather',
	},
];

// If something went wrong add export to this
const projectFeatureSlice = createSlice({
	name: 'projectFeature',
	initialState,
	reducers: {
		addFeature: (state, action) => {},
	},
});

export default projectFeatureSlice.reducer;
