import { useState } from 'react';
import { SPACE_INFO } from '../../constant/web-content';
import {
	StyledButton,
	StyledContainer,
	StyledContainerButton,
	StyledImg,
	StyledInfo,
	StyledIntroTitle,
	StyledName,
	StyledRowContainer,
	StyledTitle,
	StyledTitleNumber
} from './technology.styles';

const Technology = () => {
	const [active, setActive] = useState(0);

	const webContent = SPACE_INFO.technology;

	return (
		<>
			<StyledIntroTitle>
				<StyledTitleNumber>03</StyledTitleNumber>
				{webContent.introduction}
			</StyledIntroTitle>
			<StyledContainer>
				<picture>
					<source media='(min-width:1024px )' srcSet='' />
					<source media='(min-width:768px )' srcSet='' />
					<source media='(min-width:360px )' srcSet='' />
					<StyledImg src={webContent.images.mobile[active]} alt='' />
				</picture>
				<StyledRowContainer>
					<StyledContainerButton>
						<StyledButton $isActive={active === 0} onClick={() => setActive(0)}>
							1
						</StyledButton>
						<StyledButton $isActive={active === 1} onClick={() => setActive(1)}>
							2
						</StyledButton>
						<StyledButton $isActive={active === 2} onClick={() => setActive(2)}>
							3
						</StyledButton>
					</StyledContainerButton>
					<div>
						<StyledTitle>{webContent.title[active]}</StyledTitle>
						<StyledName>{webContent.name[active]}</StyledName>
						<StyledInfo>{webContent.info[active]}</StyledInfo>
					</div>
				</StyledRowContainer>
			</StyledContainer>
		</>
	);
};

export default Technology;

//
//
//
