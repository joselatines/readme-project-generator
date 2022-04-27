import { createSlice } from '@reduxjs/toolkit';

const initialState = ``;

const markdownSlice = createSlice({
	name: 'markdownData',
	initialState,
	reducers: {
		setGeneratedMD: (state, action) => {
			state = action.payload;
		},
	},
});

export const { setGeneratedMD } = markdownSlice.actions;

export default markdownSlice;
