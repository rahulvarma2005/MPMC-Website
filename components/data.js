import {
	ViewListIcon,
	DeviceMobileIcon,
	AdjustmentsIcon,
	SunIcon,
	DocumentDownloadIcon,
	HeartIcon,
	CloudIcon,
	GlobeIcon,
	ChatIcon,
	CheckCircleIcon,
	MoonIcon,
} from '@heroicons/react/outline';

import Uno2 from '../public/img/uno2.jpg';

import activity1 from '../public/img/activity1.jpg';
import activity2 from '../public/img/activity2.jpg';
import activity3 from '../public/img/activity3.jpg';
import activity4 from '../public/img/activity4.jpg';

const benefitOne = {
	title: 'Benefits of the project',
	desc: 'Mobile app for teams to collaborate, share ideas, and work together towards common goals. With real-time communication and app notifications, your team will stay connected and informed, no matter where they are.',
	image: Uno2,
	bullets: [
		{
			title: 'High Accuracy',
			desc: 'Laser beams provide precise detection of rat presence, reducing false positives and improving overall efficiency.',
			icon: <ViewListIcon />,
		},
		{
			title: 'Rapid Response',
			desc: 'Real-time monitoring allows for immediate action when rats are detected, minimizing potential damage and health risks.',
			icon: <ViewListIcon />,
		},
		{
			title: 'Environmental Impact',
			desc: 'The system minimizes harm to non-target species and reduces reliance on chemical control methods.',
			icon: <ViewListIcon />,
		},
		{
			title: 'Labor Efficiency',
			desc: 'Automated detection reduces the need for manual inspections, allowing pest control professionals to focus on targeted interventions',
			icon: <ViewListIcon />,
		},
	],
};

{/*const benefitTwo = {
	title: 'Software Components',
	desc: 'Gain valuable insights into your teams and engagement through our analytics dashboard. Track progress and make data-backed decisions to optimize team dynamics, productivity and satisfaction.',
	image: benefitTwoImg,
	bullets: [
		{
			title: 'Signal Processing Algorithm',
			desc: '',
			icon: <ViewListIcon />,
		},
		{
			title: 'Alert System',
			desc: '',
			icon: <ViewListIcon />,
		},
		{
			title: 'Data Logging',
			desc: '',
			icon: <ViewListIcon />,
		},
		{
			title: 'Remote Monitoring',
			desc: '',
			icon: <ViewListIcon />,
		},
	],
};*/}

export { benefitOne }; //benefitTwo 

const features = [
	{
		title: <p>Hardware Used:<br/><br/>
		1.Laser Emitters and Receivers:  <br/><br/>
		2.Microcontroller (e.g., Arduino):  </p>,
		description: '',
		icon: <CloudIcon />,
	},
	{
		title: <p>software Components:<br/><br/>
		1.Signal Processing Algorithm<br/>
		2.Alert System<br/>
		3.Data Logging<br/>
		4.Remote Monitoring<br/><br/>
		</p>,
		description:'',
		icon: <CloudIcon />,
	},
	
];

export { features };

const activities = [
	{
		path: activity1,
		title: 'Volleyball',
	},

];

export { activities };
