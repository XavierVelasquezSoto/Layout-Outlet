import styled from 'styled-components';

const StyledHeader = styled.header`
	position: relative;
	display: flex;
	justify-content: space-between;
	overflow-x: clip;

	@media screen and (width>=768px) {
		height: 96px;
	}
	/* 	
	@media screen and (width>=1440px) {
		overflow: hidden;
	} */
`;

const StyledLogo = styled.img`
	height: 40px;
	margin: 24px 0 0 24px;
	@media screen and (width >= 768px) {
		margin: 24px 0 0 40px;
	}

	@media screen and (width >= 1440px) {
		margin-top: 64px;
	}
`;

export { StyledHeader, StyledLogo };
