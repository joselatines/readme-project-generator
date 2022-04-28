import { configureStore } from '@reduxjs/toolkit';
import fieldsSlice from '../features/fieldsData/fieldsSlice';


export const store = configureStore({
	reducer: { fieldsData: fieldsSlice },
});
