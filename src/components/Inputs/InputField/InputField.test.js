import { render, screen } from '../../../shared/functions/test-utils';
import InputField from './Index';

describe('<InputField/>', () => {
	const obj = {
		title: 'Description',
		id: 'description',
		type: 'text',
		placeholder: 'This project...',
	};
	test('Field is render', () => {
		render(<InputField {...obj} />);
		const el = screen.getByPlaceholderText(/this project.../i);
		expect(el).toBeInTheDocument;
	});
});
