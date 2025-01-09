import styled from 'styled-components';
import { COLORS } from '../../constant/colors';
import { FONTS } from '../../constant/fonts';
import { NavLink } from 'react-router-dom';

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

const StyledDivButton = styled.ul`
	margin: 0 64px;
	display: flex;
`;
const StyledButton = styled.li`
	margin-right: 32px;
	background-color: transparent;
	color: ${props => (props.$active ? COLORS.white : 'none')};
	border: none;
`;

const StyledTitle = styled.h1`
	font-size: ${FONTS.fontSize4XL};
	font-family: 'Bellefair', serif;
	text-align: center;
	color: ${COLORS.white};
	margin: 0;
	margin-top: 24px;
`;

const StyledText = styled.p`
	position: relative;
	margin: 0;
	margin-top: 16px;
	font-size: ${FONTS.fontSizeL};
	font-weight: ${FONTS.fontWeightRegular};
	line-height: 180%;
	text-align: center;
	padding: 0 24px;

	&::after {
		content: '';
		position: absolute;
		width: 327px;
		height: 2px;
		border-bottom: 2px solid rgb(255, 255, 255, 0.3);
		bottom: -24px;
		right: 24px;
	}
`;

const StyledDivRow = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 49px;
	text-align: center;
`;

const StyledDivDistance = styled.div`
	height: 61px;
`;

const StyledDistante = styled.p`
	margin: 0;
	font-size: ${FONTS.fontSizeS};
`;

const StyledDistanteNumber = styled.p`
	margin: 0;
	font-family: 'Bellefair', serif;
	font-size: ${FONTS.fontSizeXXL};
	margin-top: 12px;
`;

const StyledDivTravel = styled.div`
	height: 61px;
	margin-top: 24px;
`;

const StyledTravel = styled.p`
	margin: 0;
	font-size: ${FONTS.fontSizeS};
`;

const StyledTravelDuration = styled.p`
	margin: 0;
	font-family: 'Bellefair', serif;
	font-size: ${FONTS.fontSizeXXL};
	margin-top: 12px;
`;

export {
	StyledContainer,
	StyledTitleIntro,
	StyledTitleIntroNumber,
	StyledImgActive,
	StyledDivButton,
	StyledButton,
	StyledTitle,
	StyledText,
	StyledDivRow,
	StyledDivDistance,
	StyledDistante,
	StyledDistanteNumber,
	StyledDivTravel,
	StyledTravel,
	StyledTravelDuration
};
