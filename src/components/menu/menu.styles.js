import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FONTS } from '../../constant/fonts';
import { COLORS } from '../../constant/colors';

const StyledLink = styled(NavLink)`
	display: flex;
	margin-right: ${props => (props.$space ? '12px' : '0')};
	font-weight: ${FONTS.fontWeightRegular};
	font-size: ${FONTS.fontSizeL};
	letter-spacing: 2px;

	@media screen and (width >= 768px) {
		margin-right: ${props => (props.$number === '03' ? 'none' : '48px')};

		&.active {
			border-bottom: 4px solid ${COLORS.white};
			padding-bottom: 35px;
		}
	}
`;

const StyledIcon = styled.img`
	height: 21px;
	position: absolute;
	right: 0;
	margin: 32px 24px 0 0;
	z-index: 20;

	@media screen and (width >= 768px) {
		display: none;
	}
`;

const StyledUl = styled.ul`
	display: ${props => (props.$showMenu ? 'flex' : 'none')};
	background-color: ${props =>
		props.$showMenu ? 'rgb(11, 13, 23, 0.15)' : 'transparent'};
	backdrop-filter: ${props => (props.$showMenu ? 'blur(10px)' : 'transparent')};
	flex-direction: column;
	position: absolute;
	top: 0;
	right: 0;
	padding-top: 133px;
	height: 100vh;
	width: 254px;
	padding-left: 35px;
	z-index: 10;

	@media screen and (width >= 768px) {
		display: flex;
		flex-direction: row;
		padding: 0;
		margin: 0;
		left: 128px;
		top: 0;
		/* background-color: rgb(0, 0, 0, 0.3); */
		background-color: #333;
		/* backdrop-filter: blur(50px); */
		padding-left: 117px;
		padding-top: 38px;
		min-width: 640px;
		width: 100vw;
		height: 96px;
	}

	@media screen and (width >= 1440px) {
		padding: 0;
		margin: 0;
		left: 704px;
		margin-top: 40px;
		padding-left: 156px;
		padding-top: 38px;
		background-color: rgb(11, 13, 23, 0.15);
		backdrop-filter: blur(10px);
	}
`;

const StyledLi = styled.li`
	margin-bottom: 32px;
	/* display: flex; */
`;

const StyledSpanLink = styled.span`
	margin-right: 12px;
	font-weight: ${FONTS.fontWeightBold};
	@media screen and (width >= 768px) {
		display: ${props => (props.$number === '00' ? 'none' : 'inline')};
	}
	@media screen and (width >= 1440px) {
		display: flex;
	}
`;

export { StyledLink, StyledIcon, StyledUl, StyledLi, StyledSpanLink };

// Link para navegación sin saber el menu activo
//NavLink para navegación sabiendo el menu activo
