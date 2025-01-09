import styled from 'styled-components';
import { FONTS } from '../../constant/fonts';
import { COLORS } from '../../constant/colors';

const StyledTitle = styled.h2`
	font-size: ${FONTS.fontSizeL};
	font-weight: ${FONTS.fontWeightRegular};
	text-align: center;
	margin: 0;
	margin-top: 48px;

	@media screen and (width >= 768px) {
		margin-top: 128px;
		font-size: ${FONTS.fontSizeXXL};
		letter-spacing: ${FONTS.letterSpacingM};
	}

	@media screen and (width>= 1440px) {
		margin: 0;
		text-align: left;
	}
`;
const StyledSubtitle = styled.h1`
	margin: 0;
	text-align: center;
	font-family: 'Bellefair', serif;
	font-size: ${FONTS.fontSize5XL};
	margin-top: 24px;
	color: ${COLORS.white};

	@media screen and (width >= 768px) {
		margin-top: 24px;
		font-size: ${FONTS.fontSize6XL};
	}

	@media screen and (width>= 1440px) {
		margin: 0;
		text-align: left;
	}
`;
const StyledInfo = styled.p`
	margin: 0;
	margin-top: 24px;
	font-size: ${FONTS.fontSizeM};
	font-weight: ${FONTS.fontWeightRegular};
	text-align: center;
	padding: 0 24px;
	line-height: 180%;

	@media screen and (width >= 768px) {
		margin-top: 24px;
		font-size: ${FONTS.fontSizeL};
		line-height: 180%;
	}

	@media screen and (width>= 1440px) {
		margin: 0;
		padding: 0;
		margin-top: 24px;
		text-align: left;
		font-size: ${FONTS.fontSizeXL};
	}
`;
const StyledLink = styled.button`
	margin: 0;
	margin-top: 119px;
	text-align: center;
	margin-left: 115px;
	border-radius: 50%;
	height: 144px;
	width: 144px;
	border: none;
	font-size: ${FONTS.fontSizeXL};
	color: ${COLORS.dark};
	font-weight: ${FONTS.fontWeightRegular};

	@media screen and (width >= 768px) {
		margin-top: 66px;
		margin-left: 248px;
		font-size: ${FONTS.fontSize3XL};
		line-height: 180%;
		height: 272px;
		min-width: 272px;
		width: 272px;
	}

	@media screen and (width>= 1440px) {
		margin: 0;
		padding: 0;
		height: 272px;
	}
`;

const StyledRowDesktop = styled.div`
	@media screen and (width>= 1440px) {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-top: 455px;
		padding: 0 165px;
	}
`;

const StyledInfoText = styled.div`
	@media screen and (width>= 1440px) {
		padding-right: 298px;
	}
`;

export {
	StyledTitle,
	StyledSubtitle,
	StyledInfo,
	StyledLink,
	StyledRowDesktop,
	StyledInfoText
};
