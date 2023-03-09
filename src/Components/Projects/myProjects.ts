import multiminer from '../../Images/multiminer.png';
import piEstimation from '../../Images/piEstimation.png';
import satlasNews from '../../Images/satlasNews.png';
import sudoku from '../../Images/sudoku.png';

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
		title: 'Multiminer',
		description: 'An online multiplayer game. The aim of the game is to mine resources, upgrade miner and get more points that the others!',
		image: multiminer,
		link: 'https://multiminer.click',
		github: 'https://github.com/lauritsbonde/MultiMiner',
		tech: ['React', 'Node.js', 'Express', 'Socket.io', 'TypeScript', 'Auth0', 'Traefik', 'MongoDB', 'Mongoose', 'Docker', 'Vagrant', 'DigitalOcean'],
		lastUpdated: 'Regular updates 🚧',
	},
	{
		title: 'Satlas News',
		description: 'A news website with a focus on environmental news. The website is built with Next.js and uses Azure functions. It is built from a project description by DHI.',
		image: satlasNews,
		link: 'https://satlas-news.dhigroup.com/',
		github: 'https://github.com/DHI-GRAS/satlas-news',
		tech: ['Next.js', 'Azure Functions', 'TypeScript', 'Typeorm', 'PostgreSQL'],
		lastUpdated: '31/05/2022',
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
