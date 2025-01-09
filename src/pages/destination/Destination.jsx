import { useState } from 'react';
import { SPACE_INFO } from '../../constant/web-content';
import {
	StyledButton,
	StyledContainer,
	StyledDistante,
	StyledDistanteNumber,
	StyledDivButton,
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
		<StyledContainer>
			<StyledTitleIntro>
				<StyledTitleIntroNumber>01</StyledTitleIntroNumber>
				{webContent.introduction}
			</StyledTitleIntro>
			<StyledImgActive src={webContent.images.mobile[active]}></StyledImgActive>
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
		</StyledContainer>
	);
};

export default Destination;
