import { useState } from 'react';
import { SPACE_INFO } from '../../constant/web-content';

const Crew = () => {
	const [active, setActive] = useState(0);
	const webcContent = SPACE_INFO.crew;
	return (
		<>
			<p>
				<span>02</span>
				{webcContent.introduction}
			</p>
			<div>
				<div>
					<h2>{webcContent.title[active]}</h2>
					<h1>{webcContent.name[active]}</h1>
					<p>{webcContent.info[active]}</p>
					<span onClick={() => setActive(0)}>point1 </span>
					<span onClick={() => setActive(1)}>point2 </span>
					<span onClick={() => setActive(2)}>point3 </span>
					<span onClick={() => setActive(3)}>point4 </span>
				</div>
				<div>
					<img src={webcContent.images.mobile[active]} alt='error img' />
				</div>
			</div>
		</>
	);
};

export default Crew;
