import styled from 'styled-components';
import { COLORS } from '../../constant/colors';
import { FONTS } from '../../constant/fonts';

const StyledContainer = styled.div`
	height: 100vh;
	min-height: 100vh;
`;

const StyledTitleIntro = styled.p`
	color: ${COLORS.white};
	font-size: ${FONTS.fontSizeL};
	letter-spacing: 15%;
	text-align: center;
	margin: 0;
	margin-top: 48px;
`;

const StyledTitleIntroNumber = styled.span`
	font-weight: ${FONTS.fontWeightBold};
	opacity: 0.5;
	margin-right: 24px;
`;

const StyledImgActive = styled.img`
	padding: 50px 112px 58px;

	@media screen and (width >= 768px) {
	}
`;

export {
	StyledContainer,
	StyledTitleIntro,
	StyledTitleIntroNumber,
	StyledImgActive
};
