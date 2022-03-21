import styled from 'styled-components';
import variables from '../shared/variables.json';

import { Questions } from '../components/Questions';

export const GeneratorPage = () => {
	return (
		<div>
			<Header>
				<h1>Readme project generator</h1>
				<span>A good project needs good description</span>
				<a href='http://' target='_blank' rel='noopener noreferrer'>
					By Jose Latines
				</a>
			</Header>
			<Questions />
		</div>
	);
};

const Header = styled.header`
	margin-bottom: 1.5rem;
	font-size: 16px;
	display: grid;
	align-items: center;
	justify-content: center;
	grid-template-columns: auto;
	text-align: center;
	h1 {
		font-size: 2em;
	}
	span {
		font-size: 1.3em;
		font-weight: ${variables.font.regular};
	}
	a {
		font-size: 1em;
	}
`;
