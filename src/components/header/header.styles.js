import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	overflow-x: clip;
	padding-inline: 24px;
	padding-top: 24px;

	@media screen and (width>=768px) {
		padding-top: 0;
		padding-inline: 40px;
		gap: 40px;
		height: 96px;
	}

	@media screen and (width>=1024px) {
		padding-top: 40px;
		padding-inline: 64px 0;
		gap: 704px;
	}
`;

const StyledLogo = styled.img`
	min-width: 40px;
	width: 40px;
	@media screen and (width >= 768px) {
		width: 48px;
	}
`;

const StyledLogoLink = styled(NavLink)``;

export { StyledHeader, StyledLogo, StyledLogoLink };
