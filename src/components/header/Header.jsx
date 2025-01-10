import Menu from '../menu/Menu';
import { StyledHeader, StyledLogo, StyledLogoLink } from './header.styles';

const Header = () => {
	return (
		<StyledHeader>
			<StyledLogoLink to='/'>
				<StyledLogo src='/assets/shared/logo.svg' />
			</StyledLogoLink>
			<Menu />
		</StyledHeader>
	);
};

export default Header;
