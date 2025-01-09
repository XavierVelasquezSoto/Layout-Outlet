import { useState } from 'react';
import { SPACE_INFO } from '../../constant/web-content';
import {
	StyledButton,
	StyledContainer,
	StyledDistante,
	StyledDistanteNumber,
	StyledDivButton,
	StyledDivContainerInfo,
	StyledDivDistance,
	StyledDivRow,
	StyledDivTravel,
	StyledImgActive,
	StyledText,
	StyledTitle,
	StyledTitleIntro,
	StyledTitleIntroNumber,
	StyledTravel,
	StyledTravelDuration
} from './destination.styles';

const Destination = () => {
	const [active, setActive] = useState(0);
	const webContent = SPACE_INFO.destination;
	return (
		<>
			<StyledTitleIntro>
				<StyledTitleIntroNumber>01</StyledTitleIntroNumber>
				{webContent.introduction}
			</StyledTitleIntro>
			<StyledContainer>
				<picture>
					<source
						media='(min-width:360px )'
						srcset={webContent.images.mobile[active]}
					/>
					<source
						media='(min-width:768px )'
						srcset={webContent.images.tablet[active]}
					/>
					<source
						media='(min-width: 1024px)'
						srcset={webContent.images.desktop[active]}
					/>
					<StyledImgActive
						src={webContent.images.mobile[active]}
					></StyledImgActive>
				</picture>
				<StyledDivContainerInfo>
					<StyledDivButton>
						<StyledButton $active={active === 0} onClick={() => setActive(0)}>
							{webContent.title[0]}
						</StyledButton>
						<StyledButton $active={active === 1} onClick={() => setActive(1)}>
							{webContent.title[1]}
						</StyledButton>
						<StyledButton $active={active === 2} onClick={() => setActive(2)}>
							{webContent.title[2]}
						</StyledButton>
						<StyledButton $active={active === 3} onClick={() => setActive(3)}>
							{webContent.title[3]}
						</StyledButton>
					</StyledDivButton>
					<StyledTitle>{webContent.title[active]}</StyledTitle>
					<StyledText>{webContent.info[active]}</StyledText>
					<StyledDivRow>
						<StyledDivDistance>
							<StyledDistante>{webContent.distance}</StyledDistante>
							<StyledDistanteNumber>
								{webContent.distanceNumber[active]}
							</StyledDistanteNumber>
						</StyledDivDistance>
						<StyledDivTravel>
							<StyledTravel>{webContent.travelTime}</StyledTravel>
							<StyledTravelDuration>
								{webContent.travelDuration[active]}
							</StyledTravelDuration>
						</StyledDivTravel>
					</StyledDivRow>
				</StyledDivContainerInfo>
			</StyledContainer>
		</>
	);
};

export default Destination;
