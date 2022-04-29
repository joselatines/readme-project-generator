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
	testingLibrary,
	selenium,
} from './images';

const initialState = {
	template: {
		title: 'Here is your project title',
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
		{
			id: 'feature_6',
			type: 'text',
			placeholder: 'Feature 6',
		},
	],
	checkboxes: {
		frontend: [
			{
				id: 'html',
				value: 'html',
				img: html,
				name: 'frontend',
				badge:
					'![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)',
			},
			{
				id: 'css3',
				value: 'css3',
				img: css,
				name: 'frontend',
				badge:
					'![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)',
			},
			{
				id: 'javascript',
				value: 'javascript',
				img: javascript,
				name: 'frontend',
				badge:
					'![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)',
			},
			{
				id: 'typescript',
				value: 'typescript',
				img: typescript,
				name: 'frontend',
				badge:
					'![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)',
			},
			{
				id: 'react',
				value: 'react',
				img: react,
				name: 'frontend',
				badge:
					'![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)',
			},
			{
				id: 'angular',
				value: 'angular',
				img: angular,
				name: 'frontend',
				badge:
					'![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)',
			},
			{
				id: 'vue',
				value: 'vue',
				img: vue,
				name: 'frontend',
				badge:
					'![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)',
			},
			{
				id: 'redux',
				value: 'redux',
				img: redux,
				name: 'frontend',
				badge:
					'![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)',
			},
			{
				id: 'babel',
				value: 'babel',
				img: babel,
				name: 'frontend',
				badge:
					'![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)',
			},
			{
				id: 'bootstrap',
				value: 'bootstrap',
				img: bootstrap,
				name: 'frontend',
				badge:
					'![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)',
			},
			{
				id: 'sass',
				value: 'sass',
				img: sass,
				name: 'frontend',
				badge:
					'![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)',
			},
		],
		backend: [
			{
				id: 'python',
				value: 'python',
				img: python,
				name: 'backend',
				badge:
					'![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)',
			},
			{
				id: 'cPlusPlus',
				value: 'c++',
				img: cPlusPlus,
				name: 'backend',
				badge:
					'![C++](https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white)',
			},
			{
				id: 'cSharp',
				value: 'c#',
				img: cSharp,
				name: 'backend',
				badge:
					'![C#](https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white)',
			},
			{
				id: 'php',
				value: 'php',
				img: php,
				name: 'backend',
				badge:
					'![PHP](https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white)',
			},
			{
				id: 'java',
				value: 'java',
				img: java,
				name: 'backend',
				badge:
					'![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white)',
			},
			{
				id: 'nodejs',
				value: 'node',
				img: nodejs,
				name: 'backend',
				badge:
					'![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)',
			},
			{
				id: 'swift',
				value: 'swift',
				img: swift,
				name: 'backend',
				badge:
					'![Swift](https://img.shields.io/badge/swift-F54A2A?style=for-the-badge&logo=swift&logoColor=white)',
			},
		],
		testing: [
			{
				id: 'jest-id',
				value: 'jest',
				img: jest,
				name: 'testing',
				badge:
					'![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)',
			},
			{
				id: 'testing-library',
				value: 'testing library',
				img: testingLibrary,
				name: 'testing',
				badge:
					'![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)',
			},
			{
				id: 'selenium',
				value: 'selenium',
				img: selenium,
				name: 'testing',
				badge:
					'![Selenium](https://img.shields.io/badge/-selenium-%43B02A?style=for-the-badge&logo=selenium&logoColor=white)',
			},
		],
		tools: [
			{
				id: 'photoshop',
				value: 'photoshop',
				img: photoshop,
				name: 'tools',
				badge:
					'![Adobe Photoshop](https://img.shields.io/badge/adobe%20photoshop-%2331A8FF.svg?style=for-the-badge&logo=adobe%20photoshop&logoColor=white)',
			},
			{
				id: 'xd',
				value: 'xd',
				img: xd,
				name: 'tools',
				badge:
					'![Adobe XD](https://img.shields.io/badge/Adobe%20XD-470137?style=for-the-badge&logo=Adobe%20XD&logoColor=#FF61F6)',
			},
			{
				id: 'illustrator',
				value: 'illustrator',
				img: illustrator,
				name: 'tools',
				badge:
					'![Adobe Illustrator](https://img.shields.io/badge/adobe%20illustrator-%23FF9A00.svg?style=for-the-badge&logo=adobe%20illustrator&logoColor=white)',
			},
			{
				id: 'figma',
				value: 'figma',
				img: figma,
				name: 'tools',
				badge:
					'![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)',
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
