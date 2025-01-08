import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledContainer = styled.div`
	width: 254px;
	background-color: ${props =>
		props.$showMenu ? 'rgb(11, 13, 23, 0.15)' : 'transparent'};
	height: 100vh;
	position: relative;
`;

const StyledLink = styled(NavLink)`
	margin-right: ${props => (props.$space ? '12px' : '0')};

	&.active {
		color: red;
	}
`;

const StyledIcon = styled.img`
	height: 21px;
	position: absolute;
	right: 0;
	margin: 32px 24px 0 0;
	@media screen and (width > 768px) {
		display: none;
	}
`;

const StyledUl = styled.ul`
	display: ${props => (props.$showMenu ? 'flex' : 'none')};
	flex-direction: column;
	position: absolute;
	top: 133px;
	padding-left: 35px;

	@media screen and (width > 768px) {
		display: flex;
	}
`;

const StyledLi = styled.li`
	margin-bottom: 32px;
`;

const StyledSpanLink = styled.span`
	margin-right: 12px;
`;

export {
	StyledContainer,
	StyledLink,
	StyledIcon,
	StyledUl,
	StyledLi,
	StyledSpanLink
};

// Link para navegación sin saber el menu activo
//NavLink para navegación sabiendo el menu activo
