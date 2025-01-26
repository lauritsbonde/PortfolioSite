export interface Course {
	id: number;
	name: string;
	passed: boolean;
	learned: string[];
}

export interface Semester {
	id: number;
	name: string;
	level: 'Bachelors' | 'Masters';
	courses: Course[];
	startDate: Date;
	endDate: Date;
}

const semesters: Semester[] = [
	{
		id: 1,
		name: 'Fall 2020',
		level: 'Bachelors',
		startDate: new Date('2020-08-1'),
		endDate: new Date('2020-02-1'),
		courses: [
			{
				id: 1,
				name: 'Foundations of Computing - Discrete Mathematics',
				passed: true,
				learned: ['Logic', 'Sets', 'Algorithms', 'Graphs', 'Recursion', 'Proofs'],
			},
			{
				id: 2,
				name: 'Project Work and Communication',
				passed: true,
				learned: ['Commication', 'Project Management', 'Collaboration'],
			},
			{
				id: 3,
				name: 'Introductory Programming',
				passed: true,
				learned: ['Java', 'Object Oriented Programming', 'Data Structures', 'Algorithms', 'Testing', 'Debugging'],
			},
		],
	},
	{
		id: 2,
		name: 'Spring 2021',
		level: 'Bachelors',
		startDate: new Date('2021-02-1'),
		endDate: new Date('2021-07-1'),
		courses: [
			{
				id: 4,
				name: 'Systematic Design of User Interfaces',
				passed: true,
				learned: ['User Interface Design', 'User Experience', 'User Research', 'Prototyping', 'Javascript', 'HTML', 'CSS'],
			},
			{
				id: 5,
				name: 'Algorithms and Data Structures',
				passed: true,
				learned: ['Algorithms', 'Data Structures', 'Big O', 'Sorting', 'Searching', 'Graphs', 'Trees'],
			},
			{
				id: 6,
				name: 'First-year Project: Map of Denmark. Visualization, Navigation, Searching, and Route Pl',
				passed: true,
				learned: ['Collaboration', 'Project Management', 'Algorithms', 'Data Structures', 'Big O'],
			},
		],
	},
	{
		id: 3,
		name: 'Fall 2021',
		level: 'Bachelors',
		startDate: new Date('2021-08-1'),
		endDate: new Date('2021-02-1'),
		courses: [
			{
				id: 7,
				name: 'Distributed Systems',
				passed: true,
				learned: ['GO', 'REST', 'gRPC', 'Microservices'],
			},
			{
				id: 8,
				name: 'Introduction to Database Systems',
				passed: true,
				learned: ['SQL', 'NoSQL', 'MongoDB', 'PostgreSQL', 'Database Design', 'Database Normalization'],
			},
			{
				id: 9,
				name: 'Analysis, Design and Software Architecture',
				passed: true,
				learned: ['Software Architecture', 'Design Patterns', 'UML', 'Agile', 'SOLID Principles', 'Kanban'],
			},
		],
	},
	{
		id: 4,
		name: 'Spring 2022',
		level: 'Bachelors',
		startDate: new Date('2022-02-1'),
		endDate: new Date('2022-07-1'),
		courses: [
			{
				id: 10,
				name: 'Functional Programming',
				passed: true,
				learned: ['Functional Programming', 'F#'],
			},
			{
				id: 11,
				name: 'Second Year Project: Software Development in Large Teams',
				passed: true,
				learned: ['Collaboration', 'Project Management', 'Agile', 'Scrum'],
			},
			{
				id: 12,
				name: 'Introduction to Artificial Intelligence - Elective',
				passed: true,
				learned: ['Data structures', 'Algorithms', 'Artificial Intelligence'],
			},
		],
	},
	{
		id: 5,
		name: 'Fall 2022',
		level: 'Bachelors',
		startDate: new Date('2022-08-1'),
		endDate: new Date('2022-02-1'),
		courses: [
			{
				id: 13,
				name: 'Operating Systems and C',
				passed: true,
				learned: ['C', 'Operating Systems', 'Memory Management', 'Processes', 'Threads', 'Synchronization', 'Parallelization', 'Deadlocks'],
			},
			{
				id: 14,
				name: 'Programs as Data',
				passed: true,
				learned: ['F#', 'Creating Compilers', 'Parsing', 'Lexing', 'Interpreters'],
			},
			{
				id: 15,
				name: 'Digital Transformation and Business Models',
				passed: true,
				learned: ['Business Models', 'Digital Transformation', 'Ecosystems', 'Value Proposition Canvas', 'Business Model Canvas'],
			},
			{
				id: 16,
				name: 'Security 1',
				passed: true,
				learned: ['Network Security', 'Cryptography', 'Access Control and Authentication', 'Penetration Testing', 'Secure Channels'],
			},
		],
	},
	{
		id: 6,
		name: 'Spring 2023',
		level: 'Bachelors',
		startDate: new Date('2023-02-1'),
		endDate: new Date('2023-07-1'),
		courses: [
			{
				id: 17,
				name: 'Bachelor Project',
				passed: true,
				learned: ['IoT', 'C', 'LoRaWAN', 'Protocol Buffers'],
			},
			{
				id: 18,
				name: 'DevOps, Software Evolution and Software Maintenance',
				passed: true,
				learned: ['DevOps', 'Vagrant', 'Docker', 'CI/CD', 'DigitalOcean'],
			},
			{
				id: 19,
				name: 'Reflections on IT',
				passed: true,
				learned: ['Science and Pseudoscience diffenreces', 'Paradigm shifts'],
			},
		],
	},
	{
		id: 7,
		name: 'Fall 2023',
		level: 'Masters',
		startDate: new Date('2023-09-1'),
		endDate: new Date('2024-02-1'),
		courses: [
			{
				id: 20,
				name: 'Introduction to Machine Learning',
				passed: true,
				learned: ['Linear algebra', 'Regression', 'Classification', 'Neural Networks', 'deep learning'],
			},
			{
				id: 21,
				name: 'Practical Concurrent and Parallel Programming',
				passed: true,
				learned: ['Java', 'Threads', 'Locks', 'Performance and scalability', 'Message passing'],
			},
			{
				id: 22,
				name: 'Advanced Programming',
				passed: true,
				learned: ['Scala', 'Functional Programming'],
			},
			{
				id: 23,
				name: 'Algorithm Design',
				passed: true,
				learned: ['Dynamic Programming', 'Divide and Conquer'],
			},
		],
	},
	{
		id: 8,
		name: 'Spring 2024',
		level: 'Masters',
		startDate: new Date('2023-02-1'),
		endDate: new Date('2024-07-1'),
		courses: [
			{
				id: 24,
				name: 'Computer Systems Performance',
				passed: true,
				learned: ['Performance Experiments', 'Performance Analysis'],
			},
			{
				id: 25,
				name: 'Ethical Hacking',
				passed: true,
				learned: ['Fuzzying', 'Cryptanalysis'],
			},
			{
				id: 26,
				name: 'Internet of Things',
				passed: true,
				learned: ['InfluxDB', 'IoT'],
			},
			{
				id: 27,
				name: 'How to Make (Almost) Anything',
				passed: true,
				learned: ['3D modelling', 'Circuit Boards'],
			},
		],
	},
	{
		id: 9,
		name: 'Fall 2024',
		level: 'Masters',
		startDate: new Date('2024-09-1'),
		endDate: new Date('2024-02-1'),
		courses: [
			{
				id: 28,
				name: 'Advanced Robotics',
				passed: true,
				learned: ['Robots', 'Simulation', 'Bio-inspired robotics'],
			},
			{
				id: 29,
				name: 'Game Programming',
				passed: true,
				learned: ['C++', 'Game Engines'],
			},
			{
				id: 30,
				name: 'Research Project - Applying swarm and modular robotics in maritime shipping',
				passed: true,
				learned: ['Swarm robotics', 'Modular robots', 'C'],
			},
		],
	},
	{
		id: 10,
		name: 'Spring 2024',
		level: 'Masters',
		startDate: new Date('2025-02-1'),
		endDate: new Date('2024-07-1'),
		courses: [
			{
				id: 31,
				name: 'Thesis - Applying swarm and modular robotics in maritime shipping',
				passed: false,
				learned: ['Robots', 'Simulation', 'Bio-inspired robotics'],
			},
		],
	},
];

export default semesters;
