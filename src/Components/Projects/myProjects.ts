import piEstimation from '../../Images/piEstimation.png';
import sudoku from '../../Images/sudoku.png';
import emage from '../../Images/emage.png';
import fetchlytics from '../../Images/fetchlytics.png';
import loglite from '../../Images/loglite.png';

export interface Project {
	title: string;
	description: string;
	image: string;
	link?: string;
	github: string;
	tech: string[];
	lastUpdated: string;
}

const myProjects: Project[] = [
	{
		title: 'LogLite',
		description: 'A lightweight, easy-to-use, open-source logging app written in GO.',
		image: loglite,
		link: 'https://github.com/lauritsbonde/LogLite',
		github: 'https://github.com/lauritsbonde/LogLite',
		tech: ['GO', 'HTMX', 'SQLite'],
		lastUpdated: 'Ongoing',
	},
	{
		title: 'Fetchlytics',
		description: 'A tool to get insights into the network requests made by your applications',
		image: fetchlytics,
		link: 'https://fetchlytics.dev/',
		github: '',
		tech: ['Next.js', 'TypeScript', 'DaisyUI', 'Vercel', 'Redis', 'MongoDB', 'Mongoose', 'TailwindCSS'],
		lastUpdated: '20/11/2024',
	},
	{
		title: 'Emage',
		description: 'Upload an image an see it get remade from emojis!',
		image: emage,
		link: 'https://lauritsbonde.github.io/Emage/',
		github: 'https://github.com/lauritsbonde/Emage',
		tech: ['React', 'TypeScript', 'Github Actions', 'Github Pages', 'DaisyUI', 'TailwindCSS'],
		lastUpdated: '11/11/2024',
	},
	{
		title: 'Sudoku Solver (Creater)',
		description: 'A sudoku solver and creator. The solver uses a backtracking algorithm to solve the sudoku.',
		image: sudoku,
		link: 'https://lauritsbonde.github.io/Sudoku/',
		github: 'https://github.com/lauritsbonde/Sudoku',
		tech: ['React', 'TypeScript', 'Github Actions', 'Github Pages'],
		lastUpdated: '19/03/2022',
	},
	{
		title: 'PiEstimation',
		description: 'A small project to estimate pi using a square, a circle and a lot of dots!',
		image: piEstimation,
		link: 'https://lauritsbonde.github.io/PiEstimation/',
		github: 'https://github.com/lauritsbonde/PiEstimation',
		tech: ['React', 'Javascript', 'Framer Motion', 'Github Actions', 'Github Pages'],
		lastUpdated: '13/12/2021',
	},
];

export default myProjects;
