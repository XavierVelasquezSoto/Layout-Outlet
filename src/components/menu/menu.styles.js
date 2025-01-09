import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../constant/colors';
import { FONTS } from '../../constant/fonts';

const StyledIcon = styled.img`
	position: absolute;
	right: 24px;
	top: 33px;
	height: 21px;
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
	gap: 32px;
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
		align-items: center;
		position: static;
		padding-top: 0;
		padding-inline: 117px 40px;
		background-color: #292b37;
		backdrop-filter: blur(10px);
		min-width: 640px;
		width: 100vw;
		height: 96px;
	}

	@media screen and (width >= 1024px) {
		width: 664px;
	}
`;

const StyledSpanLink = styled.span`
	margin-right: 12px;
	font-weight: ${FONTS.fontWeightBold};
	display: flex;
`;

const StyledLink = styled(NavLink)`
	position: relative;
	display: flex;
	margin-right: ${props => (props.$space ? '12px' : '0')};
	font-weight: ${FONTS.fontWeightRegular};
	font-size: ${FONTS.fontSizeL};
	letter-spacing: 2px;

	@media screen and (width >= 768px) {
		&.active::after {
			content: '';
			position: absolute;
			bottom: -38px;
			width: 100%;
			height: 4px;
			background-color: ${COLORS.white};
		}
	}
`;

export { StyledIcon, StyledLink, StyledSpanLink, StyledUl };

// Link para navegación sin saber el menu activo
//NavLink para navegación sabiendo el menu activo
