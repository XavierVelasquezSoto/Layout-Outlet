import { useState } from 'react';
import {
	StyledIcon,
	StyledLi,
	StyledLink,
	StyledSpanLink,
	StyledUl
} from './menu.styles';
import { MENU_INFO } from '../../constant/menu-info';

const Menu = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			{!isOpen && (
				<StyledIcon
					src='/assets/shared/icon-hamburger.svg'
					alt=''
					$showMenu={isOpen}
					onClick={() => setIsOpen(!isOpen)}
				/>
			)}
			{isOpen && (
				<StyledIcon
					src='/assets/shared/icon-close.svg'
					alt=''
					$showMenu={isOpen}
					onClick={() => setIsOpen(!isOpen)}
				/>
			)}
			<nav>
				<StyledUl $showMenu={isOpen}>
					{MENU_INFO.map(infoLink => {
						return (
							<StyledLi key={infoLink.id}>
								<StyledLink
									to={infoLink.link}
									$number={infoLink.numberLink}
									// $isOpen={isOpen}
								>
									<StyledSpanLink $number={infoLink.numberLink}>
										{infoLink.numberLink}
									</StyledSpanLink>
									{infoLink.menuLink}
								</StyledLink>
							</StyledLi>
						);
					})}
				</StyledUl>
			</nav>
		</>
	);
};

export default Menu;
{
	/* <StyledContainer $showMenu={isOpen}></StyledContainer>; */
}
