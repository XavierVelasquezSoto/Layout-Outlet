import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import { useState } from 'react';
import { MENU_INFO } from '../constant/menu-info';
import { StyledBackgroundImg } from './layout.styles';

const Layout = ({ webImg }) => {
	// const img = MENU_INFO;

	return (
		<StyledBackgroundImg $img={webImg}>
			<Header />
			<Outlet />
		</StyledBackgroundImg>
	);
};

export default Layout;
