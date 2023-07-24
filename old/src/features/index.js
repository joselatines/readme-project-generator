import { combineReducers } from 'redux';
import fieldsSlice from './fieldsData/fieldsSlice';

export default combineReducers({
	fieldsData: fieldsSlice,
});
