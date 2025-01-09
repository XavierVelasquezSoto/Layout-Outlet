import { useState } from 'react';
import { SPACE_INFO } from '../../constant/web-content';
import {
	StyledButton,
	StyledContainerButton,
	StyledDescription,
	StyledDivImg,
	StyledImg,
	StyledIntroTitle,
	StyledTitle,
	StyledTitleJob,
	StyledTitleName
} from './crew.styles';

const Crew = () => {
	const [active, setActive] = useState(0);
	const webContent = SPACE_INFO.crew;
	return (
		<>
			<StyledIntroTitle>
				<StyledTitle>02</StyledTitle>
				{webContent.introduction}
			</StyledIntroTitle>
			<div>
				<div>
					<StyledTitleJob>{webContent.title[active]}</StyledTitleJob>
					<StyledTitleName>{webContent.name[active]}</StyledTitleName>
					<StyledDescription>{webContent.info[active]}</StyledDescription>
					<StyledContainerButton>
						<StyledButton
							$isActive={active === 0}
							onClick={() => setActive(0)}
						/>
						<StyledButton
							$isActive={active === 1}
							onClick={() => setActive(1)}
						/>
						<StyledButton
							$isActive={active === 2}
							onClick={() => setActive(2)}
						/>
						<StyledButton
							$isActive={active === 3}
							onClick={() => setActive(3)}
						/>
					</StyledContainerButton>
				</div>
				<StyledDivImg>
					<picture>
						<source
							media='(min-width:360px )'
							srcSet={webContent.images.mobile[active]}
						/>
						<source
							media='(min-width:768px )'
							srcSet={webContent.images.tablet[active]}
						/>
						<source
							media='(min-width: 1024px)'
							srcSet={webContent.images.desktop[active]}
						/>
						<StyledImg src={webContent.images.mobile[active]} />
					</picture>
				</StyledDivImg>
			</div>
		</>
	);
};

export default Crew;
