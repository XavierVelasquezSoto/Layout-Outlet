import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/header/Header';
// import { useState } from 'react';
// import { MENU_INFO } from '../constant/menu-info';
import { StyledBackgroundImg } from './layout.styles';
import { BACKGROUNDS } from '../constant/backgrounds';

const Layout = () => {
	const { pathname } = useLocation();

	const backgrounds = printImagesWeb(pathname);
	// console.log(pathname);

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
	return BACKGROUNDS[pathImg];
};

export default Layout;
