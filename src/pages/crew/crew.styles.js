import styled from 'styled-components';
import { FONTS } from '../../constant/fonts';
import { COLORS } from '../../constant/colors';

const StyledIntroTitle = styled.p`
	margin: 0;
	text-align: center;
	font-size: ${FONTS.fontSizeL};
	color: ${COLORS.white};
	margin-top: 24px;

	@media screen and (width>=768px) {
		text-align: left;
		padding-left: 40px;
		font-size: ${FONTS.fontSize7XL};
		margin-top: 40px;
	}

	@media screen and (width>=1024px) {
		padding-left: 165px;
		font-size: ${FONTS.fontSize7XL};
		margin-top: 48px;
	}
`;
const StyledTitle = styled.span`
	padding-right: 24px;
	opacity: 0.5;
`;
const StyledCrewContainer = styled.div`
	@media screen and (width>= 1440px) {
		min-height: 100vh;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding-top: 64px;
		padding-bottom: 77px;
		padding-inline: 164px;
		gap: 32px;
	}
`;

const StyledTitleJob = styled.h2`
	margin: 0;
	margin-top: 64px;
	font-family: 'Bellefair', serif;
	text-align: center;
	font-size: ${FONTS.fontSizeXL};
	opacity: 0.5;

	@media screen and (width>=768px) {
		font-size: ${FONTS.fontSize9XL};
	}

	@media screen and (width>=1024px) {
		margin: 0;
		text-align: left;
		font-size: ${FONTS.fontSize3XL};
		padding-top: 197px;
	}
`;

const StyledTitleName = styled.h1`
	margin: 0;
	margin-top: 8px;
	font-size: ${FONTS.fontSize9XL};
	text-align: center;
	font-family: 'Bellefair', serif;
	color: ${COLORS.white};

	@media screen and (width>=768px) {
		margin-top: 16px;
		font-size: ${FONTS.fontSize10XL};
	}

	@media screen and (width>=1024px) {
		text-align: left;
		font-size: ${FONTS.fontSize4XL};
	}
`;

const StyledDescription = styled.p`
	margin: 0;
	margin-top: 24px;
	line-height: 180%;
	text-align: center;
	font-size: ${FONTS.fontSizeM};
	padding-inline: 24px;

	@media screen and (width>=768px) {
		margin-top: 16px;
		font-size: ${FONTS.fontSizeL};
		padding-inline: 128px;
	}

	@media screen and (width>=1024px) {
		text-align: left;
		font-size: ${FONTS.fontSizeXL};
		padding-inline: 0;
		margin-top: 24px;
		width: 539px;
	}
`;

const StyledContainerButton = styled.div`
	display: flex;
	justify-content: center;
	gap: 16px;
	margin-top: 50px;

	@media screen and (width>=1024px) {
		gap: 40px;
		display: flex;
		justify-content: start;
		margin: 0;
		margin-top: 237px;
	}
`;

const StyledButton = styled.div`
	background-color: ${props =>
		props.$isActive ? 'white' : 'rgb(255,255,255, 0.3)'};
	border-radius: 0%;
	height: 10px;
	width: 10px;

	border-radius: 100%;
`;

const StyledImg = styled.img`
	padding: 37px 51px 29px;
	mask-image: linear-gradient(black 50%, transparent);

	@media screen and (width>=768px) {
		padding: 32px 160px 0;
	}

	@media screen and (width>=1024px) {
		padding: 0;
		min-height: 676px;
		width: 100%;
		height: auto;
	}
`;

export {
	StyledIntroTitle,
	StyledTitle,
	StyledTitleJob,
	StyledTitleName,
	StyledDescription,
	StyledContainerButton,
	StyledButton,
	StyledImg,
	StyledCrewContainer
};
