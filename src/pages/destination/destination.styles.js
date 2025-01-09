import styled from 'styled-components';
import { COLORS } from '../../constant/colors';
import { FONTS } from '../../constant/fonts';

const StyledContainer = styled.div`
	min-height: 100vh;

	@media screen and (width >= 1440px) {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding-inline: 165px;
		gap: 108px;
	}
`;

const StyledTitleIntro = styled.p`
	color: ${COLORS.white};
	font-size: ${FONTS.fontSizeL};
	letter-spacing: 15%;
	text-align: center;
	margin: 0;
	margin-top: 48px;

	@media screen and (width >= 768px) {
		text-align: left;
		padding-left: 40px;
		font-size: ${FONTS.fontSize7XL};
	}
`;

const StyledTitleIntroNumber = styled.span`
	font-weight: ${FONTS.fontWeightBold};
	opacity: 0.5;
	margin-right: 24px;
`;

const StyledImgActive = styled.img`
	padding: 50px 112px 58px;

	@media screen and (width >= 768px) {
		padding: 66px 234px 74px;
	}

	@media screen and (width >= 1440px) {
		padding: 0;
		width: 480px;
	}
`;

const StyledDivButton = styled.ul`
	margin: 0 64px;
	display: flex;

	@media screen and (width >= 768px) {
		margin: 0 264px;
	}
	@media screen and (width >= 1440px) {
		margin: 0;
		padding-inline: 0 232px;
		gap: 32px;
	}
`;

const StyledDivContainerInfo = styled.div`
	@media screen and (width>=1440px) {
		width: 50%;
	}
`;

const StyledButton = styled.li`
	position: relative;
	margin-right: 32px;
	background-color: transparent;
	color: ${props => (props.$active ? COLORS.white : 'none')};
	border: none;

	&::after {
		left: 0;
		bottom: -15px;
		content: '';
		position: absolute;
		width: 100%;
		border-bottom: 3px solid ${props => (props.$active ? COLORS.white : 'none')};
		padding-bottom: 35px;
	}

	@media screen and (width >= 1440px) {
		margin: 0;
	}
`;

const StyledTitle = styled.h1`
	font-size: ${FONTS.fontSize4XL};
	font-family: 'Bellefair', serif;
	text-align: center;
	color: ${COLORS.white};
	margin: 0;
	margin-top: 24px;

	@media screen and (width >= 768px) {
		font-size: ${FONTS.fontSize5XL};
		margin-top: 37px;
	}

	@media screen and (width >= 1440px) {
		font-size: ${FONTS.fontSize8XL};
		margin-top: 53px;
		text-align: left;
	}
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

	@media screen and (width >= 768px) {
		padding: 0 127px;
		&::after {
			content: '';
			position: absolute;
			width: 514px;
			height: 2px;
			border-bottom: 2px solid rgb(255, 255, 255, 0.3);
			bottom: -24px;
			right: 127px;
		}
	}

	@media screen and (width >= 1440px) {
		padding: 0;
		font-size: ${FONTS.fontSizeXL};
		text-align: left;

		&::after {
			content: '';
			position: absolute;
			width: 80%;
			height: 2px;
			border-bottom: 2px solid rgb(255, 255, 255, 0.3);
			bottom: -24px;
			left: 0;
		}
	}
`;

const StyledDivRow = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 49px;
	text-align: center;

	@media screen and (width >= 768px) {
		display: flex;
		flex-direction: row;
		padding: 0 127px;
		justify-content: space-evenly;
	}

	@media screen and (width >= 1440px) {
		display: flex;
		flex-direction: row;
		padding: 0;
		justify-content: start;
	}
`;

const StyledDivDistance = styled.div`
	height: 61px;
	@media screen and (width >= 1440px) {
		padding-inline: 0 100px;
	}
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
	@media screen and (width >= 768px) {
		margin: 0;
	}
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
	StyledTravelDuration,
	StyledDivContainerInfo
};
