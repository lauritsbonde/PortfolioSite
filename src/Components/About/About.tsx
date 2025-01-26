import React, {FC, RefObject} from 'react';
import {Box, Typography, Divider} from '@mui/material';
import SkillContainer from './SkillContainer';

interface AboutProps {
	isMobile: boolean;
	colorMap: Map<string, string>;
	setColorMap: (colorMap: Map<string, string>) => void;
	componentRef: RefObject<HTMLDivElement>;
}

const About: FC<AboutProps> = ({isMobile, colorMap, setColorMap, componentRef}) => {
	const style = {
		container: {
			width: '100vw',
			marginTop: '5vh',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'top',
			boxSizing: 'border-box',
			alignItems: 'center',
			padding: '0 5%',
		},
		content: {
			display: 'flex',
			flexDirection: isMobile ? 'column' : 'row',
			justifyContent: 'space-between',
			textAlign: 'center',
			borderCollapse: 'collapse',
			marginTop: '2vh',
			minHeight: '10vh',
			width: '100%',
			maxWidth: '1800px',
		},
		contentText: {
			margin: '1vh 0',
		},
		side: {
			width: isMobile ? '100%' : '50%',
			borderCollapse: 'collapse',
			padding: '0 5%',
			boxSizing: 'border-box',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'top',
			alignItems: 'top',
		},
		mobileDivider: {
			width: '100%',
			height: '2px',
			backgroundColor: 'lightgrey',
			margin: '2vh 0',
		},
		divider: {
			width: '2px',
			backgroundColor: 'lightgrey',
			margin: '0 2vw',
		},
		underlined: {
			textDecoration: 'underline',
			textDecorationColor: 'orange',
			textUnderlineOffset: '4px',
			textDecorationThickness: '4px',
		},
	};

	return (
		<Box sx={style.container} ref={componentRef}>
			<Typography variant="h2" sx={style.underlined}>
				ABOUT ME
			</Typography>
			<Box sx={style.content}>
				<Box sx={style.side}>
					<Typography variant="h3" sx={{...style.underlined, textDecorationThickness: '3px'}}>
						Basic information
					</Typography>
					<Typography variant="body1" sx={style.contentText}>
						I am a 27 year old fullstack developer. Currently writing my thesis in "Applying swarm and modular robotics in maritime shipping" for my Computer Science degree at the IT
						University of Copenhagen
					</Typography>
					<Typography variant="body1" sx={style.contentText}>
						I have a passion for learning and creating. I am always looking for new challenges and opportunities to learn and grow.
					</Typography>
					<Typography variant="body1" sx={style.contentText}>
						I like to spend my freetime building small projects to try new technologies and techniques.
					</Typography>
					<Typography variant="body1" sx={style.contentText}>
						I am currently looking for a job as a fullstack developer or a job where I can learn and grow as a developer. Prefereably in Copenhagen. I am also open to remote work.
					</Typography>
				</Box>
				<Divider sx={isMobile ? style.mobileDivider : style.divider} />
				<Box sx={style.side}>
					<Typography variant="h3" sx={{...style.underlined, textDecorationThickness: '3px'}}>
						Skills
					</Typography>
					<SkillContainer isMobile={isMobile} colorMap={colorMap} setColorMap={setColorMap} />
				</Box>
			</Box>
		</Box>
	);
};

export default About;
