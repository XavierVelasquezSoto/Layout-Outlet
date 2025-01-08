import { v4 } from 'uuid';

export const MENU_INFO = [
	{
		id: v4(),
		link: '/',
		numberLink: '00',
		menuLink: 'HOME',
		backgroundImage: {
			mobile: '/assets/home/background-home-mobile.jpg',
			tablet: '/assets/home/background-home-tablet.jpg',
			desktop: '/assets/home/background-home-desktop.jpg'
		}
	},
	{
		id: v4(),
		link: '/destination',
		numberLink: '01',
		menuLink: 'DESTINATION',
		backgroundImage: {
			mobile: '/assets/destination/background-destination-mobile.jpg',
			tablet: '/assets/destination/background-destination-tablet.jpg',
			desktop: '/assets/destination/background-destination-desktop.jpg'
		}
	},
	{
		id: v4(),
		link: '/crew',
		numberLink: '02',
		menuLink: 'CREW',
		backgroundImage: {
			mobile: '/assets/crew/background-crew-mobile.jpg',
			tablet: '/assets/crew/background-crew-tablet.jpg',
			desktop: '/assets/crew/background-crew-desktop.jpg'
		}
	},
	{
		id: v4(),
		link: '/technology',
		numberLink: '03',
		menuLink: 'TECHNOLOGY',
		backgroundImage: {
			mobile: '/assets/technology/background-technology-mobile.jpg',
			tablet: '/assets/technology/background-technology-tablet.jpg',
			desktop: '/assets/technology/background-technology-desktop.jpg'
		}
	}
];
