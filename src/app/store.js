import { configureStore } from '@reduxjs/toolkit';
import fieldsSlice from '../features/fieldsData/fieldsSlice';
import markdownSlice from '../features/markdownSlice';

export const store = configureStore({
	reducer: { fieldsData: fieldsSlice, markdown: markdownSlice },
});
