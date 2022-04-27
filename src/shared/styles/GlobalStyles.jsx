import { createGlobalStyle } from 'styled-components';

export const VAR = {
	colors: {
		primary: '#495fe8',
		secondary: '#101743',
		danger: '#ef233c',
		bg: '#F1F2F8',
		gray: '#666666',
		dark_gray: '#222',
		white: '#fff',
		font: '#000',
	},
	font: {
		size: '16px',
		family: 'Roboto',
		light: 300,
		regular: 400,
		medium: 600,
		bold: 700,
		black: 900,
	},
	mediaQueries: {
		responsive: '40em',
		mobile: '315px',
		mobile_l: '425px',
		mobile_xl: '535px',
		tablet: '768px',
		laptop: '1024px',
	},
	transitions: {
		css: '.3s ease-in-out',
		duration: 1,
		ease: 'easeInOut',
	},
};

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
	
    body {
        font-family: ${VAR.font.family}, sans-serif, Helvetica, Arial ;
        background-color: ${VAR.colors.bg};
        color:  ${VAR.colors.font};
        font-size: ${VAR.font.size};
		@media screen and (min-width: 320px) {
    		font-size: calc(${VAR.font.size} + 6 * ((100vw - 320px) / 680));	
		}

		@media screen and (min-width: 1000px) {
   			font-size: 22px;
		}
		// Project styles
		padding: 0 7rem;
    }
    

	a {
		cursor: pointer;
		all: unset;
	}
`;
