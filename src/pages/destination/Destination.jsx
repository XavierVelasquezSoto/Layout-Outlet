import { useState } from 'react';
import { SPACE_INFO } from '../../constant/web-content';
import {
	StyledContainer,
	StyledContainerDescription,
	StyledImgActive,
	StyledTitleIntro,
	StyledTitleIntroNumber
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

			<button onClick={() => setActive(0)}>{webContent.title[0]}</button>
			<button onClick={() => setActive(1)}>{webContent.title[1]}</button>
			<button onClick={() => setActive(2)}>{webContent.title[2]}</button>
			<button onClick={() => setActive(3)}>{webContent.title[3]}</button>
			<h1>{webContent.title[active]}</h1>
			<p>{webContent.info[active]}</p>
			<div>
				<p>{webContent.distance}</p>
				<p>{webContent.distanceNumber[active]}</p>
			</div>
			<div>
				<p>{webContent.travelTime}</p>
				<p>{webContent.travelDuration[active]}</p>
			</div>
		</StyledContainer>
	);
};

export default Destination;
