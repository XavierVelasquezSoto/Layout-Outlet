import styled from 'styled-components';

const StyledBackgroundImg = styled.div`
	background-image: url(${props => props.$webImg.mobile});
	background-size: cover;
	background-repeat: no-repeat;
	height: 100vh;
	@media screen and (width>= 768px) {
		background-image: url(${props => props.$webImg.tablet});
		min-height: 100vh;
		height: auto;
		/* height: calc(100vh - 96px); */
	}
	@media screen and (width>= 1440px) {
		background-image: url(${props => props.$webImg.desktop});
	}
`;

export { StyledBackgroundImg };
