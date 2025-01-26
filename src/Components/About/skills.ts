export type skill = 'Web Development' | 'Database' | 'Software Development' | 'CI/CD' | 'Cloud';

export interface Skill {
	name: string;
	tags: string[];
	fromWhere?: string;
	linkTo?: string;
}

const skills: {[skillName: string]: skill[]} = {
	Javascript: ['Web Development', 'Software Development'],
	TypeScript: ['Web Development', 'Software Development'],
	'Node.js': ['Web Development'],
	React: ['Web Development'],
	'Next.js': ['Web Development'],
	Express: ['Web Development'],
	'Socket.io': ['Web Development'],
	'Material-UI': ['Web Development'],
	Auth0: ['Web Development', 'Software Development'],
	Typeorm: ['Web Development', 'Software Development', 'Database'],
	GO: ['Web Development', 'Software Development'],
	HTMX: ['Web Development'],
	TailwindCSS: ['Web Development'],
	DaisyUI: ['Web Development'],

	MongoDB: ['Database', 'Web Development', 'Software Development'],
	Mongoose: ['Database', 'Web Development', 'Software Development'],
	MySQL: ['Database', 'Web Development', 'Software Development'],
	PostgreSQL: ['Database', 'Web Development', 'Software Development'],
	SQLite: ['Database', 'Web Development', 'Software Development'],
	InfluxDB: ['Database', 'Web Development', 'Software Development'],
	Redis: ['Database', 'Web Development'],

	Git: ['Software Development'],
	GitHub: ['Software Development'],
	'Object Oriented Programming': ['Software Development'],
	Scrum: ['Software Development'],
	SOLID: ['Software Development'],
	Jest: ['Software Development'],
	'Software Architecture': ['Software Development'],
	Testing: ['Software Development', 'CI/CD'],
	'Data Structures': ['Software Development'],

	'Github Actions': ['CI/CD', 'Web Development'],
	'Github Pages': ['CI/CD', 'Web Development'],
	Docker: ['CI/CD', 'Web Development', 'Cloud'],
	Vagrant: ['Cloud'],

	Terraform: ['Cloud'],
	Ansible: ['Cloud'],
	Vercel: ['Cloud', 'Web Development'],
	DigitalOcean: ['Cloud', 'Web Development'],
	'Docker Swarm': ['Cloud'],
	Traefik: ['Cloud', 'Web Development', 'Software Development'],
};

export default skills;
