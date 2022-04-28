import styled from 'styled-components';

export const Container = styled.section`
	display: grid;
	gap: 10rem;
	justify-content: space-between;
	grid-template-columns: repeat(2, auto);
`;

export const Title = styled.span`
	font-weight: bolder;
	font-size: larger;
`;
export const Content = styled.div`
	margin: 0.1rem 0 1rem 0;
`;

export const InfoContainer = styled.div`
	font-weight: normal;
	font-size: smaller;
`;
