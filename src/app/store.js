import { configureStore } from '@reduxjs/toolkit';
import projectFeatureSlice from '../features/projectFeatures/projectFeaturesSlice';
import fieldsSlice from '../features/fieldsData/fieldsSlice';

export const store = configureStore({
	reducer: { projectFeatures: projectFeatureSlice, fieldsData: fieldsSlice },
});
