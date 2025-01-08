import styled from 'styled-components';

const StyledBackgroundImg = styled.div`
	background-image: url(${props => props.$img.mobile});
	background-size: cover;
	background-repeat: no-repeat;

	@media screen and (width> 768px) {
		background-image: url(${props => props.$img.tablet});
	}
	@media screen and (width> 1440px) {
		background-image: url(${props => props.$img.desktop});
	}
`;

export { StyledBackgroundImg };
