import { Card, CardActions, CardContent, CardMedia, Link, Typography, Box } from '@mui/material';
import React, { FC } from 'react';
import { Project } from './myProjects';
import SkillPill from '../About/SkillPill';

interface ProjectCardProps {
	isMobile: boolean;
	project: Project;
	colorMap: Map<string, string>;
}

const ProjectCard: FC<ProjectCardProps> = ({ isMobile, project, colorMap }) => {
	const style = {
		container: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'top',
			alignItems: 'center',
			minHeight: '400px',
			width: isMobile ? '90%' : '40%',
			minWidth: '300px',
			boxSizing: 'border-box',
			boxShadow: '0 0 10px 0px rgba(0,0,0,0.5)',
			margin: '2vh 0',
			position: 'relative',
			alignSelf: 'stretch',
		},
		cardMedia: {
			height: '300px',
			width: '100%',
			objectFit: 'cover',
		},
		cardContent: {
			display: 'flex',
			flexDirection: 'column',
			height: '50%',
			width: '100%',
			boxSizeing: 'border-box',
			justifyContent: 'space-between',
		},
		cardActions: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-around',
			width: '100%',
			boxSizing: 'border-box',
			margin: '0',
			padding: '0',
		},
		techStack: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-around',
			width: '100%',
			boxSizing: 'border-box',
			margin: '6px 0',
			padding: '0 10px',
			flexWrap: 'wrap',
		},
	};

	return (
		<Card sx={style.container}>
			<CardMedia image={project.image} component="img" sx={style.cardMedia} />
			<CardContent sx={style.cardContent}>
				<Typography variant="h4" sx={{ padding: '0 6px', boxSizing: 'border-box' }}>
					{project.title}
				</Typography>
				<Typography variant="h5" sx={{ padding: '6px', boxSizing: 'border-box' }}>
					{project.description}
				</Typography>

				<Box sx={style.techStack}>
					{project.tech.map((tech) => (
						<SkillPill skillName={tech} key={tech} colorMap={colorMap} isMobile={isMobile} />
					))}
				</Box>

				<Typography variant="h6" sx={{ padding: '6px', boxSizing: 'border-box' }}>
					Last updated: {project.lastUpdated}
				</Typography>

				<CardActions sx={style.cardActions}>
					<Link href={project.link} target="_blank" rel="noreferrer">
						<Typography variant="h6">Check it out!</Typography>
					</Link>
					<Link href={project.github} target="_blank" rel="noreferrer">
						<Typography variant="h6">Check the code</Typography>
					</Link>
				</CardActions>
			</CardContent>
		</Card>
	);
};

export default ProjectCard;
