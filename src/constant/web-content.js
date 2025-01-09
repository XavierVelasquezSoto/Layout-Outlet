const DESTINATION = {
	introduction: 'PICK YOUR DESTINATION',
	title: {
		0: 'MOON',
		1: 'MARS',
		2: 'EUROPA',
		3: 'TITAN'
	},
	info: {
		0: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
		1: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
		2: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
		3: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.'
	},
	distance: 'AVG. DISTANCE',
	distanceNumber: {
		0: '384,400 km',
		1: '225 MIL. km',
		2: '628 MIL. km',
		3: '1.6 BIL. km'
	},
	travelTime: 'Est. travel time',
	travelDuration: {
		0: '3 days',
		1: '9 months',
		2: '3 years',
		3: '7 years'
	},
	images: {
		mobile: {
			0: '/assets/destination/image-moon.png',
			1: '/assets/destination/image-mars.png',
			2: '/assets/destination/image-europa.png',
			3: '/assets/destination/image-titan.png'
		},
		tablet: {
			0: '/assets/destination/image-moon.png',
			1: '/assets/destination/image-moon.png',
			2: '/assets/destination/image-moon.png',
			3: '/assets/destination/image-moon.png'
		},
		desktop: {
			0: '/assets/destination/image-moon.webp',
			1: '/assets/destination/image-moon.webp',
			2: '/assets/destination/image-moon.webp',
			3: '/assets/destination/image-moon.webp'
		}
	}
};
const CREW = {
	introduction: 'MEET YOUR CREW',
	title: {
		0: 'COMMANDER',
		1: 'Mission Specialist ',
		2: 'PILOT',
		3: 'Flight Engineer'
	},
	name: {
		0: 'Douglas Hurley',
		1: 'MARK SHUTTLEWORTH',
		2: 'Victor Glover',
		3: 'Anousheh Ansari '
	},
	info: {
		0: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
		1: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
		2: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
		3: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. '
	},
	images: {
		mobile: {
			0: '/assets/crew/image-douglas-hurley.png',
			1: '/assets/crew/image-mark-shuttleworth.png',
			2: '/assets/crew/image-victor-glover.png',
			3: '/assets/crew/image-anousheh-ansari.png'
		},
		tablet: {
			0: '/assets/crew/image-douglas-hurley.png',
			1: '/assets/crew/image-mark-shuttleworth.png',
			2: '/assets/crew/image-victor-glover.png',
			3: '/assets/crew/image-anousheh-ansari.png'
		},
		desktop: {
			0: '/assets/crew/image-douglas-hurley.webp',
			1: '/assets/crew/image-mark-shuttleworth.webp',
			2: '/assets/crew/image-victor-glover.webp',
			3: '/assets/crew/image-anousheh-ansari.webp'
		}
	}
};
const TECHNOLOGY = {
	introduction: 'SPACE LAUNCH 101',
	title: {
		0: 'THE TERMINOLOGY…',
		1: 'THE TERMINOLOGY…',
		2: 'THE TERMINOLOGY…'
	},
	name: {
		0: 'LAUNCH VEHICLE',
		1: 'SPACEPORT',
		2: 'SPACE CAPSULE'
	},
	info: {
		0: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad! ",
		1: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
		2: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
	},
	images: {
		mobile: {
			2: '/assets/destination/image-moon.png'
		},
		tablet: {
			2: '/assets/destination/image-moon.png'
		},
		desktop: {
			2: '/assets/destination/image-moon.webp'
		}
	}
};

export const SPACE_INFO = {
	destination: DESTINATION,
	crew: CREW,
	technology: TECHNOLOGY
};
