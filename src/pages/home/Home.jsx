import {
	StyledInfo,
	StyledInfoText,
	StyledLink,
	StyledRowDesktop,
	StyledSubtitle,
	StyledTitle
} from './home.styles';

const Home = () => {
	return (
		<StyledRowDesktop>
			<StyledInfoText>
				<StyledTitle>SO, YOU WANT TO TRAVEL TO</StyledTitle>
				<StyledSubtitle>SPACE</StyledSubtitle>
				<StyledInfo>
					Let’s face it; if you want to go to space, you might as well genuinely
					go to outer space and not hover kind of on the edge of it. Well sit
					back, and relax because we’ll give you a truly out of this world
					experience!
				</StyledInfo>
			</StyledInfoText>
			<StyledLink>EXPLORE</StyledLink>
		</StyledRowDesktop>
	);
};

export default Home;
