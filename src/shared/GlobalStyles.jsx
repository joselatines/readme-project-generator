import { createGlobalStyle } from 'styled-components';
import variables from './variables.json';

export const GlobalStyle = createGlobalStyle`
 *,
	*::before,
	::after {
		margin: 0;
		padding: 0;
		box-sizing: 0;
	}
	body {
		font-family: ${variables.font.style}, Helvetica, sans-serif;
		background-color: ${variables.colors.bg};
		color: ${variables.colors.font};
		padding: 1.5rem;
        font-size: ${variables.font.desktop};
		position: relative;
	}
	a {
		all: unset;
        cursor: pointer;
        &:hover {
            opacity: .6;
        }
	}
	img {
		width: 100%;
		object-fit: cover;
	}
	.content {
		margin: 3rem 0;
	}
`;
