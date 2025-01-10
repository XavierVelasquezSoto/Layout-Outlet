import styled from 'styled-components';
import { FONTS } from '../../constant/fonts';
import { COLORS } from '../../constant/colors';

const StyledIntroTitle = styled.p`
	margin: 0;
	text-align: center;
	font-size: ${FONTS.fontSizeL};
	margin-top: 48px;

	@media screen and (width>= 768px) {
		text-align: left;
		font-size: ${FONTS.fontSize7XL};
		margin-top: 64px;
		padding-left: 40px;
	}

	@media screen and (width>= 1024px) {
		text-align: left;
		font-size: ${FONTS.fontSizeXXL};
		margin-top: 72px;
		padding-left: 165px;
	}
`;
const StyledTitleNumber = styled.span`
	opacity: 0.5;
	padding-right: 24px;
`;
const StyledContainer = styled.div`
	@media screen and (width>= 1024px) {
		display: flex;
		flex-direction: row-reverse;
		gap: 32px;
		padding-inline: 165px 0;
		justify-content: center;
		align-items: center;
	}
`;

const StyledImg = styled.img`
	margin-top: 88px;

	@media screen and (width>= 768px) {
		width: 100%;
		min-height: 357px;
		height: 357px;
	}

	@media screen and (width>= 1024px) {
		margin-top: 0;
		padding: 0;
		width: 608px;
		height: 600px;
	}
`;

const StyledRowContainer = styled.div`
	@media screen and (width>= 1024px) {
		display: flex;
		flex-direction: row;
		gap: 64px;
	}
`;

const StyledContainerButton = styled.div`
	gap: 16px;
	display: flex;
	justify-content: center;
	padding-top: 32px;

	@media screen and (width>= 1024px) {
		flex-direction: column;
		gap: 32px;
		padding: 0;
	}
`;

const StyledButton = styled.button`
	width: 40px;
	height: 40px;
	border-radius: 100%;
	border: solid
		${props => (props.$isActive ? 'transparent' : 'rgb(255,255,255,0.25)')};
	background-color: ${props =>
		props.$isActive ? COLORS.white : 'transparent'};
	color: ${props => (props.$isActive ? '#0B0D17' : COLORS.white)};
	font-size: ${FONTS.fontSizeXL};

	@media screen and (width>= 768px) {
		width: 56px;
		height: 56px;
	}

	@media screen and (width>= 1024px) {
		width: 80px;
		height: 80px;
	}
`;

const StyledTitle = styled.h2`
	margin: 0;
	opacity: 0.5;
	text-align: center;
	font-family: 'Bellefair', serif;
	padding-top: 40px;
	font-size: ${FONTS.fontSizeXL};

	@media screen and (width>= 768px) {
		font-size: ${FONTS.fontSize9XL};
	}

	@media screen and (width>= 1024px) {
		text-align: left;
		padding-top: 0;
		font-size: ${FONTS.fontSize3XL};
	}
`;

const StyledName = styled.h1`
	margin: 0;
	font-family: 'Bellefair', serif;
	color: ${COLORS.white};
	line-height: 180%;
	padding-top: 16px;
	font-size: ${FONTS.fontSize9XL};
	text-align: center;

	@media screen and (width>= 768px) {
		font-size: ${FONTS.fontSize10XL};
	}

	@media screen and (width>= 1024px) {
		font-size: ${FONTS.fontSize4XL};
		text-align: left;
	}
`;

const StyledInfo = styled.p`
	margin: 0;
	padding: 16px 24px 48px;
	line-height: 180%;
	font-size: ${FONTS.fontSizeM};
	text-align: center;

	@media screen and (width>= 768px) {
		font-size: ${FONTS.fontSizeL};
		padding: 16px 128px 40px;
	}

	@media screen and (width>= 1024px) {
		font-size: ${FONTS.fontSizeXL};
		text-align: left;
		padding: 0;
		width: 491px;
	}
`;

export {
	StyledIntroTitle,
	StyledTitleNumber,
	StyledContainer,
	StyledRowContainer,
	StyledContainerButton,
	StyledImg,
	StyledButton,
	StyledTitle,
	StyledName,
	StyledInfo
};
