import {Box, Typography} from '@mui/material';
import React, {FC, RefObject} from 'react';
import myProjects from './myProjects';
import ProjectCard from './ProjectCard';

interface ProjectsProps {
	isMobile: boolean;
	colorMap: Map<string, string>;
	componentRef: RefObject<HTMLDivElement>;
}

const Projects: FC<ProjectsProps> = ({isMobile, colorMap, componentRef}) => {
	const style = {
		container: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			width: '100vw',
			marginY: '5vh',
		},
		underlined: {
			textDecoration: 'underline',
			textDecorationColor: 'orange',
			textUnderlineOffset: '4px',
			textDecorationThickness: '4px',
			mb: '4px',
		},
		cardContainer: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-evenly',
			alignItems: 'center',
			width: '100%',
			maxWidth: '1800px',
			flexWrap: 'wrap',
		},
	};
	return (
		<Box sx={style.container} ref={componentRef}>
			<Typography variant="h2" sx={style.underlined}>
				Projects
			</Typography>
			<Box sx={style.cardContainer}>
				{myProjects.map((project) => (
					<ProjectCard isMobile={isMobile} project={project} key={project.title} colorMap={colorMap} />
				))}
			</Box>
		</Box>
	);
};

export default Projects;
