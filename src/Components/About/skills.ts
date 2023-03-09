export interface Skill {
	name: string;
	tags: string[];
	fromWhere?: string;
	linkTo?: string;
}

const skills: { [skillName: string]: string[] } = {
	Javascript: ['Web Development', 'React.js', 'Node.js', 'Express.js', 'TypeScript', 'Next.js', 'Socket.io', 'Frontend', 'Backend', 'Software Development', 'App Development'],
	TypeScript: ['Web Development', 'React.js', 'Node.js', 'Express.js', 'Next.js', 'Socket.io', 'Frontend', 'Backend', 'Software Development', 'App Development'],
	'Node.js': ['Web Development', 'Express.js', 'Socket.io', 'Backend', 'JavaScript', 'TypeScript'],
	React: ['Web Development', 'React.js', 'Next.js', 'Frontend', 'JavaScript', 'TypeScript'],
	'Next.js': ['Web Development', 'Next.js', 'Frontend', 'JavaScript', 'TypeScript'],
	'Framer Motion': ['Web Development', 'Frontend', 'JavaScript', 'TypeScript'],
	Express: ['Web Development', 'Express.js', 'Backend', 'JavaScript', 'TypeScript'],
	'Socket.io': ['Web Development', 'Socket.io', 'Backend', 'JavaScript', 'TypeScript'],
	HTML: ['Web Development', 'Frontend'],
	CSS: ['Web Development', 'Frontend'],
	'Material-UI': ['Web Development', 'React.js', 'Frontend'],
	REST: ['Web Development', 'Backend', 'Frontend', 'Software Development', 'APP Development'],
	Traefik: ['Web Development', 'Backend', 'Frontend', 'Docker', 'Software Development'],
	Auth0: ['Web Development', 'Backend', 'Frontend', 'Software Development'],
	'Azure Functions': ['Web Development', 'Backend', 'Frontend', 'Software Development'],
	Typeorm: ['Web Development', 'Backend', 'Frontend', 'Software Development'],
	MongoDB: ['Database', 'Web Development', 'Backend', 'NoSQL'],
	Mongoose: ['Database', 'Web Development', 'Backend', 'NoSQL'],
	MySQL: ['Database', 'Web Development', 'Backend', 'SQL'],
	PostgreSQL: ['Database', 'Web Development', 'Backend', 'SQL'],
	Database: ['Database', 'Web Development', 'SQL', 'NoSQL'],
	NoSQL: ['Database', 'Web Development', 'SQL', 'NoSQL'],
	SQL: ['Database', 'Web Development', 'SQL', 'NoSQL'],
	'Database Design': ['Database', 'Web Development', 'SQL', 'NoSQL'],
	Git: ['Software Development', 'Backend', 'Frontend', 'VersionControl'],
	GitHub: ['Software Development', 'Backend', 'Frontend', 'VersionControl'],
	'C#': ['Software Development', 'Web Development', 'Backend'],
	Java: ['Software Development', 'App Development', 'Backend'],
	'GO!': ['Software Development', 'Web Development', 'Backend'],
	'F#': ['Software Development'],
	'Object Oriented Programming': ['Software Development'],
	Scrum: ['Software Development'],
	Agile: ['Software Development'],
	SOLID: ['Software Development'],
	Jest: ['Software Development'],
	'Design Patterns': ['Software Development'],
	UML: ['Software Development'],
	'Software Architecture': ['Software Development'],
	Testing: ['Software Development', 'CI/CD'],
	'Data Structures': ['Software Development'],
	Algorithms: ['Software Development'],
	'App Development': ['App Development', 'Frontend', 'Backend'],
	'React Native': ['App Development', 'React Native', 'Frontend', 'JavaScript', 'TypeScript'],
	'Github Actions': ['CI/CD', 'Github Actions', 'Frontend', 'Backend', 'Workflows', 'Web Development'],
	'Github Pages': ['CI/CD', 'Github Pages', 'Frontend', 'Backend', 'Workflows', 'Web Development'],
	Docker: ['CI/CD', 'Docker', 'Frontend', 'Backend', 'Workflows', 'Web Development'],
	DigitalOcean: ['CI/CD', 'DigitalOcean', 'Frontend', 'Backend', 'Workflows', 'Deployment', 'Hosting', 'Cloud', 'Web Development'],
	Vagrant: ['CI/CD', 'Vagrant', 'Frontend', 'Backend', 'Workflows', 'Deployment', 'Hosting', 'Cloud'],
};

export default skills;
