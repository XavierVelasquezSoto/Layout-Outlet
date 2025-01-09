import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/header/Header';
import { BACKGROUNDS } from '../constant/backgrounds';
import { StyledBackgroundImg } from './layout.styles';

const Layout = () => {
	const { pathname } = useLocation();

	const backgrounds = printImagesWeb(pathname);

	return (
		<StyledBackgroundImg $webImg={backgrounds}>
			<Header />
			<Outlet />
		</StyledBackgroundImg>
	);
};

const printImagesWeb = path => {
	if (path === '/') return BACKGROUNDS.HOME;

	const pathImg = path.substring(1).toUpperCase();
	console.log(pathImg);
	return BACKGROUNDS[pathImg];
};

export default Layout;
