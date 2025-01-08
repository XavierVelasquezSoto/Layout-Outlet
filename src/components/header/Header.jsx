import Menu from '../menu/Menu';
import { StyledHeader, StyledLogo } from './header.styles';

const Header = () => {
	return (
		<StyledHeader>
			<StyledLogo src='/assets/shared/logo.svg' />
			<Menu />
		</StyledHeader>
	);
};

export default Header;
