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
// const StyledCrew = styled.div``
// const StyledCrew = styled.div``

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
	}
`;

const StyledContainerButton = styled.div`
	display: flex;
	justify-content: center;
	gap: 16px;

	@media screen and (width>=1024px) {
		gap: 40px;
	}
`;

const StyledButton = styled.div`
	/* background-color: ${COLORS.white}; */
	background-color: ${props =>
		props.$isActive ? 'white' : 'rgb(255,255,255, 0.3)'};
	border-radius: 0%;
	height: 10px;
	width: 10px;
	margin-top: 50px;
	border-radius: 100%;
`;

const StyledDivImg = styled.div`
	/* position: relative; */
`;

const StyledImg = styled.img`
	padding: 37px 51px 29px;
	mask-image: linear-gradient(black 50%, transparent);
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
	StyledDivImg
};
